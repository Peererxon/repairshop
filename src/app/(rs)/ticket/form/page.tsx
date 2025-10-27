import { BackButton } from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import * as Sentry from "@sentry/nextjs";
import TicketForm from "@/app/(rs)/ticket/form/TicketForm";
export default async function TicketFormPage({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
	try {
		const { customerId, ticketId } = await searchParams; // myurl.com?customerId=9

		// edit customer form

		if (!customerId && !ticketId) {
			return (
				<>
					<h2 className="text-2xl mb-2">
						{" "}
						Customer ID or Ticket ID required to load ticket form.
					</h2>
					<BackButton title="Go Back" variant="default" />
				</>
			);
		} else {
			// new ticket form
			if (customerId) {
				const customer = await getCustomer(parseInt(customerId));
				if (!customer) {
					return (
						<>
							<h2 className="text-2xl mb-2">
								{" "}
								Customer #{customerId} not found.
							</h2>
							<BackButton title="Go Back" variant="default" />
						</>
					);
				}

				if (customer.active === false) {
					return (
						<>
							<h2 className="text-2xl mb-2">
								{" "}
								Customer #{customerId} is inactive. Cannot create or edit
								tickets for inactive customers.
							</h2>
							<BackButton title="Go Back" variant="default" />
						</>
					);
				}

				return <TicketForm customer={customer} />;
			}
			// edit ticket form
			if (ticketId) {
				const ticket = await getTicket(parseInt(ticketId));
				if (!ticket) {
					return (
						<>
							<h2 className="text-2xl mb-2"> Ticket #{ticketId} not found.</h2>
							<BackButton title="Go Back" variant="default" />
						</>
					);
				}

				const customer = await getCustomer(ticket.customerId);
				console.log({ ticket, customer });
				// return ticket form
				return <TicketForm customer={customer} ticket={ticket} />;
			}

			// put cstomer form component
		}
	} catch (err) {
		if (err instanceof Error) {
			Sentry.captureException(err);
			throw err;
		}
	}
}
