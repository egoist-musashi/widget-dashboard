import { Sequelize } from "sequelize";
import databaseConfig from "./config/database";

const environment = process.env.NODE_ENV ?? "test";
const config = databaseConfig[environment as keyof typeof databaseConfig];

if (!config) {
    throw new Error(
        `No database config found for the environment :  ${environment}`,
    );
}

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect as any,
    },
);

export default sequelize;
