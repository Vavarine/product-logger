import { Sequelize, DataTypes } from 'sequelize';
import sequelizePaginate from 'sequelize-paginate';
import DB from '../db'
import Products from './Products';

const db = new DB;

const Images = db.sequelize.define('Images', {
        id: {
            type: Sequelize.INTEGER,    
            autoIncrement: true,
            primaryKey: true
        },
        fileName: {
            type: Sequelize.STRING,
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

Images.belongsTo(Products, {
    foreignKey: 'productId',
    keyType: DataTypes.INTEGER,
    foreignKeyConstraint: true
});


//console.log(Images === db.sequelize.models.Images);

export default Images;