import { tickets } from "@/db/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const insertTicketSchema = createInsertSchema(tickets, {
	id: z.union([z.number(), z.literal("(New)")]),
	customerId: (schema) => schema.min(1, "Customer ID is required"),
	title: (schema) => schema.min(1, "Title is required"),
	description: (schema) => schema.min(1, "Description is required"),
	completed: z.boolean("completed").default(false),
	tech: z.email("Invalid email address"),
});

export const selectTicketSchema = createSelectSchema(tickets);
export type insertTicketSchemaType = z.infer<typeof insertTicketSchema>;
export type selectTicketSchemaType = z.infer<typeof selectTicketSchema>;
