import { Dialect } from "sequelize";

interface DatabaseConfig {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: Dialect;
}

declare const config: {
    development: DatabaseConfig;
    test: DatabaseConfig;
    production: DatabaseConfig;
};

export default config;
