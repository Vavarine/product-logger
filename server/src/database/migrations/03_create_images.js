'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const images = queryInterface.createTable('images', {
      id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
      },
      productId: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: { model: 'Products', key: 'id' },
      },
      fileName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now,
      },
    });

    return images;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('images')
  }
};
