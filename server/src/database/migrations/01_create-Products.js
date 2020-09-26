'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Products = queryInterface.createTable('Products', {
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

    return Products;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('Products')
  }
};
