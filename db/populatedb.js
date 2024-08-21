#! /usr/bin/env node

const { Client } = require("pg");
require ('dotenv').config()
const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message TEXT,
  added TIMESTAMP
);

INSERT INTO messages (username , message ,added) 
VALUES
  ('Charles (Leclerc)' ,'Hello World!'  , NOW()),
  ('Fernando Alonso' ,'I am a completely real message.'  , NOW());
  
`;

async function main() {
  // Check if the connection string is passed as an argument
  const connectionString = process.argv[2];
  if (!connectionString) {
    console.error("Error: No connection string provided.");
    console.error("Usage: node populateDB.js \"your-connection-string\"");
    process.exit(1);
  }

  console.log("Seeding...");

  const client = new Client({
    connectionString: connectionString
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Database seeding completed successfully.");
  } catch (err) {
    console.error("Error during seeding:", err);
  } finally {
    await client.end();
  }
}

main();
