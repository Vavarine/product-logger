import { Sequelize, DataTypes } from 'sequelize';
import sequelizePaginate from 'sequelize-paginate';
import DB from '../db'

const db = new DB;

const Tags = db.sequelize.define('Tags', {
        id: {
            type: Sequelize.INTEGER,    
            autoIncrement: true,
            primaryKey: true
        },
        name: {
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

//console.log(Tags === db.sequelize.models.Tags);

export default Tags;