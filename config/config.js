require('dotenv').config();

module.exports = {
 development: {
  database: process.env.DB_Name,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres',
  },
 test: {
  database: process.env.DB_Name,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres',
  },
 production: {
  database: process.env.DB_Name,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres',
  }
}
