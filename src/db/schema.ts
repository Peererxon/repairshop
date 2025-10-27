import { time } from "console";
import { create } from "domain";
import { relations } from "drizzle-orm";
import {
	PgTable,
	serial,
	varchar,
	boolean,
	timestamp,
	integer,
	text,
	pgTable,
} from "drizzle-orm/pg-core";
export const customer = pgTable("Customer", {
	id: serial("id").primaryKey(),
	firstName: varchar("first_name").notNull(),
	lastName: varchar("last_name").notNull(),
	email: varchar("email").notNull().unique(),
	phone: varchar("phone").notNull().unique(),
	address1: text("address1").notNull(),
	address2: text("address2"),
	city: varchar("city").notNull(),
	state: varchar("state", { length: 2 }).notNull(),
	zip: varchar("zip", { length: 10 }).notNull(),
	notes: text("notes"),
	active: boolean("active").notNull().default(true),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at")
		.defaultNow()
		.notNull()
		.$onUpdateFn(() => new Date()),
});

export const tickets = pgTable("Ticket", {
	id: serial("id").primaryKey(),
	customerId: integer("customer_id")
		.notNull()
		.references(() => customer.id),
	title: varchar("title").notNull(),
	description: text("description"),
	completed: boolean("completed").notNull().default(false),
	tech: varchar("tech").default("unassigned").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at")
		.defaultNow()
		.notNull()
		.$onUpdateFn(() => new Date()),
});

// Create relations
export const customersRelations = relations(customer, ({ many }) => ({
	tickets: many(tickets),
}));

export const ticketsRelations = relations(tickets, ({ one }) => ({
	customer: one(customer, {
		fields: [tickets.customerId],
		references: [customer.id],
	}),
}));
