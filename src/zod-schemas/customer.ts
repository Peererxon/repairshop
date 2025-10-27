import { customer } from "@/db/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const insertCustomerSchema = createInsertSchema(customer, {
	firstName: (schema) => schema.min(1, "First name is required"),
	lastName: (schema) => schema.min(1, "Last name is required"),
	email: z.email("Invalid email address"),
	address1: (schema) => schema.min(1, "Address is required"),
	city: (schema) => schema.min(1, "City is required"),
	state: (schema) => schema.length(2, "State must be 2 characters"),
	zip: (schema) =>
		schema.regex(
			/^\d{5}(-\d{4})?$/,
			"Zip code must be 5 digit or 5 digit followed by hyphen and 4 digits"
		),
	phone: (schema) =>
		schema.regex(
			/^\d{3}-\d{3}-\d{4}$/,
			"Phone number must be in the format xxx-xxx-xxxx"
		),
});

export const customerSelectSchema = createSelectSchema(customer);
export type insertCustomerSchemaType = z.infer<typeof insertCustomerSchema>;
export type selectCustomerSchemaType = z.infer<typeof customerSelectSchema>;
