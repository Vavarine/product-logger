import { Sequelize, DataTypes } from 'sequelize';
import sequelizePaginate from 'sequelize-paginate';
import DB from '../db'
import Products from './Products';
import Tags from './Tags';

const db = new DB;

const Product_tag = db.sequelize.define('Product_tag', {
        productId: {
            type: Sequelize.INTEGER,    
            primaryKey: true,
        },
        tagId: {
            type: Sequelize.INTEGER,    
            primaryKey: true
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

Product.belongsTo(Products, {
    foreignKey: 'productId',
    foreignKeyConstraint: true
});

Product.belongsTo(Tags, {
    foreignKey: 'tagId',
    foreignKeyConstraint: true
});

console.log(Product_tag === db.sequelize.models.Product_tag);

export default Product_tag;