import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("users", (table: Knex.TableBuilder) => {
        table.increments("id").primary();
        table.string("nama", 255).notNullable();
        table.string("email", 255).notNullable();
        table.string("password", 255).notNullable();
        table.text("avatar");
        table.string("role", 255).notNullable().defaultTo('user');
        table.string("created_by", 255)
        table.string("updated_by", 255)
        table.timestamp("created_at").defaultTo(knex.fn.now())
        table.timestamp("updated_at").defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("users")
}

