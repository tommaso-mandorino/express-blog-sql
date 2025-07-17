// Database connection importing
const connection = require('../database/connection.js');

// Index
function index(request, response) {

    const indexQuery = 'SELECT * FROM `posts`;';

    connection.query(indexQuery, (error, result) => {

        // IF there is a query error
        if(error) {

            // Create an error response object
            const errorResponseObject = {
                error: true,
                message: 'Internal server error.'
            };

            // Set response status code to 500 (internal server error)
            response.status(500);

            // Send error response
            response.json(errorResponseObject);

            // Stop function execution
            return;

        }

        // Send query results
        response.json(result);

    });

}

// Show
function show(request, response) {



}

// Store
function store(request, response) {



};

// Update
function update(request, response) {



}

// Modify
function modify(request, response) {



}

// Destroy
function destroy(request, response) {



}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
};