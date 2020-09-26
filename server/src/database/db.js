import { Sequelize } from 'sequelize';

class DB{
    // Inicializando o BD
    constructor(){
        this.sequelize = new Sequelize('test', 'root', 'XM8maxter', {
            host: 'localhost',
            dialect: 'mysql',
        });
    }
    
    async testConnection(){
        try {
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default DB;