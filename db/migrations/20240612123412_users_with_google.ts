import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('users', (table: Knex.TableBuilder) => {
        table.setNullable("password")
        table.string("googleId", 255)
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex("users").whereNull("password").del()
        .then(() => {
            knex.schema.alterTable('users', (table: Knex.TableBuilder) => {
                table.dropNullable("password")
                table.dropColumn("googleId")
            })
        })
    
}

