// import db
// import customer schema
// import eq from drizzle-orm
// export async function getCustomers() that returns all customers from the db
import { db } from "@/db";
import { customer } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getCustomer(id: number) {
	const customerResponse = await db
		.select()
		.from(customer)
		.where(eq(customer.id, id));
	return customerResponse[0];
}
