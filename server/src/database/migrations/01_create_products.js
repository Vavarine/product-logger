'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const products = queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      views: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      likes: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' },
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now,
      },
    });

    return products;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('products')
  }
};
