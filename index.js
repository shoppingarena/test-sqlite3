import express from "express"
import sqlite3 from "sqlite3"
const { verbose } = sqlite3


const app = express()

const db = new (verbose().Database)('test-sqlite3.db', (err) => {
    if (err) {
        console.error('Error opening database: ', err.message);
    } else {
        console.log('Openened databse: test-sqlite3.db');
    }
})


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
