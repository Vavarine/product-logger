'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const product_tag = queryInterface.createTable('product_tag', {
      productId: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        references: { model: 'Products', key: 'id' },

      },
      tagId: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        references: { model: 'Tags', key: 'id' },
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now,
      },
    });

    return product_tag;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('product_tag')
  }
};
