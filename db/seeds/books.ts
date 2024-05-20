import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("books").del();

    // Inserts seed entries
    await knex("books").insert([
        { title: "Buku 1", author: "Budi", cover: null, price: 2000, sold: false },
        { title: "Buku 2", author: "Budi", cover: null, price: 5000, sold: true },
    ]);
};
