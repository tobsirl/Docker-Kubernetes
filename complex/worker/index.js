require('dotenv').config();
const redis = require('redis');

const { redisHost, redisPort } = process.env;

const redisClient = redis.createClient({
  host: redisHost,
  port: redisPort,
  retry_strategy: () => 1000
});

const sub = redisClient.duplicate();


