/**
 * Express router for handling comment-related API endpoints.
 * 
 * @module routes/api/comments
 */

 /**
    * GET /
    * Retrieves all comments, sorted by creation date (most recent first).
    * 
    * @name GET /api/comments
    * @function
    * @memberof module:routes/api/comments
    * @async
    * @param {express.Request} req - Express request object
    * @param {express.Response} res - Express response object
    * @returns {Object[]} 200 - An array of comment objects
    * @returns {Object} 500 - Error message if fetching fails
    */

 /**
    * POST /
    * Adds a new comment.
    * 
    * @name POST /api/comments
    * @function
    * @memberof module:routes/api/comments
    * @async
    * @param {express.Request} req - Express request object, expects `body` and `author` in the request body
    * @param {express.Response} res - Express response object
    * @returns {Object} 201 - The created comment object
    * @returns {Object} 500 - Error message if creation fails
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
//Hey GitHub Copilot,
// This is a simple Express router for handling comments in a web application.
// Add a new comment
router.post("/", async (req, res) => {
    try {
        const { body, author } = req.body;
        const comment = new Comment({ body, author });
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: "Error adding comment" });
    }
});
function calculateSum(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
function calculateAverage(array) {
    if (array.length === 0) return 0;
    const sum = calculateSum(array);
    return sum / array.length;
}
// This is a 

