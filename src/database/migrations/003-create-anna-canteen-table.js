'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('anna_canteen', {
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
          schema: 'widgets-dashboard',
        }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('anna_canteen');
  },
};