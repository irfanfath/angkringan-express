module.exports = {
    "development": {
      "username": "postgres",
      "password": "postgres",
      "database": "angkringan_development",
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
    "test": {
      "username": "postgres",
      "password": "postgres",
      "database": "angkringan_test",
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
    "production": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_NAME,
      "host": process.env.DB_HOST,
      "dialect": "postgres"
    }
  }
  