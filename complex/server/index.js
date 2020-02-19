require('dotenv').config();
const express = require('express');
const cors = require('cors');
const redis = require('redis');
const { Pool } = require('pg');

// Express app setup
const app = express();

app.use(cors());
app.use(express.json());

// Postgres Client Setup
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

// Redis Client Setup
const { REDIS_HOST, REDIS_PORT } = process.env;
const redisClient = redis.createClient({
  host: REDIS_HOST,
  port: REDIS_PORT,
  retry_strategy: () => 1000
});

const redisPublisher = redisClient.duplicate()

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
