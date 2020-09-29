'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const admins = queryInterface.createTable('admins', {
      id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
      },
      permissions: {
        type: Sequelize.STRING,
        allowNull: false
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

    return admins;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('admins')
  }
};
