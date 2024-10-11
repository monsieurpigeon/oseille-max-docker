import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const productTable = sqliteTable("product", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});
