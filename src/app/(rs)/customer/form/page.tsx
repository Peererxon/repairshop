import { BackButton } from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";
import * as Sentry from "@sentry/nextjs";
import CustomerForm from "@/app/(rs)/customer/form/CustomerForm";

export default async function CustomerFormPage({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
	try {
		const { customerId } = await searchParams; // myurl.com?customerId=9
		// edit customer form
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
			console.log(customer);
			return <CustomerForm customer={customer} />;
		} else {
			return <CustomerForm />;
		}
	} catch (err) {
		if (err instanceof Error) {
			Sentry.captureException(err);
			throw err;
		}
	}
}
