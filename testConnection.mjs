// test db connection
import { Sequelize } from "sequelize" // import Sequelize v.6

export const testConnection = async () => {
    let sequelize; // Declare sequelize outside the try block
    try {
        // Initialize Sequelize with SQLITE3 database
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: 'test-sqlite3.db' // Path to SQLite file
        })
        await sequelize.authenticate()
        console.log('DB: sequelize: Connection has been established successfully.')
    } catch (error) {
        console.error('DB: sequelize: Unable to connect to the database:', error)
    } finally {
        if (sequelize) {
            try {
                sequelize.close();
                console.log('DB: sequelize: Connection closed.');
            } catch (closeError) {
                console.error('DB: sequelize: Error closing the connection:', closeError);
            }
        } else {
            console.log('DB: sequelize: No connection to close.');
        }
    }
};