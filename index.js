import express from "express"
import { Sequelize } from "sequelize" // import Sequelize v.6
import sqlite3 from "sqlite3"
const { verbose } = sqlite3


const app = express()

const db = new (verbose().Database)('test-sqlite3.db', (err) => {
    if (err) {
        console.error('sqlite: Error opening database: ', err.message);
    } else {
        console.log('sqlite: Openened databse: test-sqlite3.db');
    }
})
// Example: Close the database after some operations
db.close((closeErr) => {
    if (closeErr) {
        console.error('sqlite: Error closing database: ', closeErr.message);
    } else {
        console.log('sqlite: Database connection closed.');
    }
});

//TEST CONNECTION
async function testConnection() {
    let sequelize; // Declare sequelize outside the try block
    try {
        // Initialize Sequelize with SQLITE3 database
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: 'test-sqlite3.db' // Path to SQLite file
        })
        await sequelize.authenticate()
        console.log('sequelize: Connection has been established successfully.')
    } catch (error) {
        console.error('sequelize: Unable to connect to the database:', error)
    } finally {
        if (sequelize) {
            try {
                sequelize.close();
                console.log('sequelize: Connection closed.');
            } catch (closeError) {
                console.error('sequelize: Error closing the connection:', closeError);
            }
        } else {
            console.log('sequelize: No connection to close.');
        }
    }
}

testConnection()


app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/api/sqlite3", (req, res) => {
    // res.send("Welcome to the SQLite3 API")
    res.send("This is DB Object: " + { db })
    console.log("This is db object: " + { db })
})


// Start server
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
