// mysql2 importing
const mysql2 = require('mysql2');

// mysql2 database connection options object
const databaseConnectionOptions = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}

// Databasse connection creation
const connection = mysql2.createConnection(databaseConnectionOptions);

// Database connection attempt
connection.connect(error => {

    // IF there is an error
    if(error) {

        // Throw an exception
        throw error;

    }

    // Connection success logging
    console.log(`Connected successfully to "${databaseConnectionOptions.database}".`);

});

// mysql2 connection exporting
module.exports = connection;