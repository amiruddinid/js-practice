import type { Knex } from "knex";
import dotenv from 'dotenv';

const envPath = process.env.NODE_ENV === 'development' ? 
  '.env' : `.env.${process.env.NODE_ENV}`

console.log(process.env.NODE_ENV);

dotenv.config({path: envPath})

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      database: process.env.DB,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      port: Number(process.env.DB_PORT)
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  },
  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },
  production: {
    client: "postgresql",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      port: Number(process.env.DB_PORT)
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  },
};

//module.export = config;
export default config;
