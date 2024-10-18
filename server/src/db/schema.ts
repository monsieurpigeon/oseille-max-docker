import {
  integer,
  primaryKey,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

export const productTable = sqliteTable("product", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});

export const customerTable = sqliteTable("customer", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
});

export const priceTable = sqliteTable(
  "price",
  {
    customerId: integer("customer_id")
      .notNull()
      .references(() => customerTable.id),
    productId: integer("product_id")
      .notNull()
      .references(() => productTable.id),
    value: integer("value").notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.customerId, t.productId] }),
  })
);
