// Database connection importing
const connection = require('../database/connection.js');

// Internal server error function declaration
function internalServerError(routeResponseObject) {

    // Create an error response object
    const errorResponseObject = {
        error: true,
        message: 'Internal server error.'
    };

    // Set response status code to 500 (internal server error)
    routeResponseObject.status(500);

    // Send error response
    routeResponseObject.json(errorResponseObject);

}

// Not found function declaration
function notFoundError(notFoundId, routeResponseObject) {
 
    // Create an error response object
    const errorResponseObject =  {
        error: true,
        errorCode: 404,
        errorString: 'Not found',
        message: `Post with ID ${notFoundId} not found.`
    };

    // Set response status code to 404 (not found)
    routeResponseObject.status(404);

    // Send error response
    routeResponseObject.json(errorResponseObject);

}

// Index
function index(request, response) {

    // Declare index route query
    const indexQuery = 'SELECT * FROM `posts`;';

    // Execute query
    connection.query(indexQuery, (error, result) => {

        // IF there is a query error
        if(error) {

            // Call internal server error function
            internalServerError(response);

            // Stop function execution
            return;

        }

        // Send query results
        response.json(result);

    });

}

// Show
function show(request, response) {

    // Get request id parameter
    const requestId = request.params.id;

    // Declare show route query
    const showQuery = 'SELECT * FROM `posts` WHERE `id` = ?;';

    // Execute query
    connection.query(showQuery, [requestId], (error, result) => {

        // IF there is a query error
        if (error) {

            // Call internal server error function
            internalServerError(response);

            // Stop function execution
            return;

        }

        // IF requested ID doesn't exist
        if (result.length === 0) {

            // Call not found error (404)
            notFoundError(requestId, response);

            // Stop function execution
            return;

        }

        // Send query results
        response.send(result[0]);

    });

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

    // Get request id parameter
    const requestId = request.params.id;

    // Declare destroy route query
    const showQuery = 'DELETE FROM `posts` WHERE `id` = ?;';

    // Execute query
    connection.query(showQuery, [requestId], (error, result) => {

        // IF there is a query error
        if (error) {

            // Call internal server error function
            internalServerError(response);

            // Stop function execution
            return;

        }

        // IF requested ID doesn't exist
        if (result.length === 0) {

            // Call not found error (404)
            notFoundError(requestId, response);

            // Stop function execution
            return;

        }

        // Send 204 status (no content)
        response.sendStatus(204);

    });


}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
};