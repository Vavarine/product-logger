import { Sequelize, DataTypes } from 'sequelize';
import sequelizePaginate from 'sequelize-paginate';
import DB from '../db';

import Users from './Users';

const db = new DB;

const Products = db.sequelize.define('Products', {
        id: {
            type: Sequelize.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        views: {
            type: DataTypes.INTEGER,
        },
        likes: {
            type: DataTypes.INTEGER,
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

Products.belongsTo(Users, {
    foreignKey: 'userId',
    foreignKeyConstraint: true
});

sequelizePaginate.paginate(Products);

console.log(Products === db.sequelize.models.Products);

export default Products;