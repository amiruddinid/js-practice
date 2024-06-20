import { Knex } from "knex";
import { encryptPassword } from "../../app/utils/encrypt";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        { 
            nama: "SuperAdmin", 
            email: "superadmin@mail.com", 
            password: await encryptPassword("Password1!"), 
            role: "superadmin",
        },
    ]);
};
