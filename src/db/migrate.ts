// src/db/migrate.ts
import { migrate } from "drizzle-orm/neon-http/migrator";
import { db } from ".";

const main = async () => {
	try {
		await migrate(db, {
			migrationsFolder: "src/db/migrations",
		});
		console.log("Migration successful");
	} catch (error) {
		console.error("Migration failed:", error);
	}
};

main();
