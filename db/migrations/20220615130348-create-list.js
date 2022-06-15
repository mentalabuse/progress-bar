'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Lists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mentor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ch1: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      ch2: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      ch3: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      ch4: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      ch5: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      ch6: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      ch7: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      ch8: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      ch9: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      ch10: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      ch11: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      ch12: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      mates: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Lists');
  }
};
