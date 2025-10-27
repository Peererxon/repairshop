"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/Button";
import {
	insertTicketSchema,
	type insertTicketSchemaType,
	type selectTicketSchemaType,
} from "@/zod-schemas/ticket";
import { tickets } from "@/db/schema";
import { selectCustomerSchemaType } from "@/zod-schemas/customer";

type Props = {
	customer: selectCustomerSchemaType;
	ticket?: selectTicketSchemaType;
};

export default function TicketForm({ ticket, customer }: Props) {
	const defaultValues: insertTicketSchemaType = {
		id: ticket?.id ?? "(New)",
		customerId: ticket?.customerId ?? 0,
		title: ticket?.title ?? "",
		description: ticket?.description ?? "",
		completed: ticket?.completed ?? false,
		tech: ticket?.tech ?? "new-ticket@example.com",
		//createdAt: ticket?.createdAt ?? new Date(),
		//updatedAt: ticket?.updatedAt ?? new Date(),
	};

	const form = useForm({
		mode: "onBlur",
		resolver: zodResolver(insertTicketSchema),
		defaultValues,
	});

	async function submitForm(data: insertTicketSchemaType) {
		console.log(data);
	}
	const formTitle = ticket?.id
		? `Edit Ticket #${ticket.id}`
		: `New Ticket Form`;
	return (
		<div className="flex flex-col gap-1 sm:px-8">
			<h2 className="text-2xl font-bold">{formTitle}</h2>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(submitForm)}
					className="flex flex-col sm:flex-row gap-4 sm:gap-8"
				>
					<p>{JSON.stringify(form.getValues())}</p>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</div>
	);
}
