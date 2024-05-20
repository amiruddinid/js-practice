import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("books", (table: Knex.TableBuilder) => {
        table.increments("id").primary();
        table.string("title", 255).notNullable();
        table.string("author", 255).notNullable();
        table.text("cover");
        table.float("price").notNullable().defaultTo(0);
        table.boolean("sold").notNullable().defaultTo("false");
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("books")
}

