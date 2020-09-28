'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tags = queryInterface.createTable('tags', {
      id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now,
      },
    });

    return tags;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('tags')
  }
};
