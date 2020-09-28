import { Sequelize, DataTypes } from 'sequelize';
import sequelizePaginate from 'sequelize-paginate';
import DB from '../db';

import Users from './Users';

const db = new DB;

const Admins = db.sequelize.define('Admins', {
        id: {
            type: Sequelize.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
        permission: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: Date.now,
        },
    },
    {
        timestamps: false,
    }
)

Admins.belongsTo(Users, {
    foreignKey: 'userId',
    foreignKeyConstraint: true
});

console.log(Admins === db.sequelize.models.Admins);

export default Admins;