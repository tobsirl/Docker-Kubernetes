require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Express app setup
const app = express();

app.use(cors());
app.use(express.json());

// Postgres Client Setup
const { Pool } = require('pg');
const { PG_USER, PG_HOST, PG_DATABASE, PG_PASSWORD, PG_PORT } = process.env;
const pgClient = new Pool({
  user: PG_USER,
  host: PG_HOST,
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: PG_PORT
});

pgClient.on('error', () => console.log(`Lost PG connection`));

// Create the table for storing the values
pgClient
  .query('CREATE TABLE IF NOT EXISTS values (number INT)')
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
