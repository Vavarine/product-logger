import { Sequelize, DataTypes } from 'sequelize';
import sequelizePaginate from 'sequelize-paginate';
import DB from '../db'

const db = new DB;

const Users = db.sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,    
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
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


console.log(Users === db.sequelize.models.Users);

export default Users;