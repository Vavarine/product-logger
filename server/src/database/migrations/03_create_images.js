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
        references: { model: 'Users', key: 'id' },
      },
      data: {
        type: Sequelize.BLOB,
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
