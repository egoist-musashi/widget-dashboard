'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('customers', {
                id: {
                    type: Sequelize.BIGINT,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                },
                mobile_number: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                attributes: {
                    type: Sequelize.JSONB,
                    allowNull: false,
                },
                created_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.fn('NOW'),
                },
                updated_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.fn('NOW'),
                },
                deleted_at: {
                    type: Sequelize.DATE,
                },
            },
            {
                schema: 'widgets-dashboard', // Specify the schema here
            }
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('customers');
    },
};
