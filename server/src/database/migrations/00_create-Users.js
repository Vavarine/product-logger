'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Users = queryInterface.createTable('Users', {
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

    

    return Users;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('Users')
  }
};