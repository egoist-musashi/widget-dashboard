const dotenv = require("dotenv");
dotenv.config();

const databaseConfig = {
    test: {
        username: process.env.TEST_DB_USERNAME || "",
        password: process.env.TEST_DB_PASSWORD || "",
        database: process.env.TEST_DB_DATABASE || "",
        host: process.env.TEST_DB_HOST || "",
        dialect: process.env.TEST_DB_DIALECT || "postgres",
    },

    development: {
        username: process.env.DEV_DB_USERNAME || "",
        password: process.env.DEV_DB_PASSWORD || "",
        database: process.env.DEV_DB_DATABASE || "",
        host: process.env.DEV_DB_HOST || "",
        dialect: process.env.DEV_DB_DIALECT || "postgres",
    },

    production: {
        username: process.env.PROD_DB_USERNAME || "",
        password: process.env.PROD_DB_PASSWORD || "",
        database: process.env.PROD_DB_DATABASE || "",
        host: process.env.PROD_DB_HOST || "",
        dialect: process.env.PROD_DB_DIALECT || "postgres",
    },
};

module.exports = databaseConfig;
