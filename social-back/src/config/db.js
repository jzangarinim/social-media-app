import pg from "pg";
import "dotenv/config";

const { Client } = pg;

const dbClient = new Client({
  user: process.env.DBUSER,
  password: process.env.DBPASS,
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  database: process.env.DBNAME,
});

export { dbClient };
