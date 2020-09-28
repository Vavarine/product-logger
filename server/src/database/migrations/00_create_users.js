'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now,
      },
    });

    

    return users;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('users')
  }
};