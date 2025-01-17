/**
 * @function generateBook
 * @description Creates a new book object with provided properties
 * @param {string|number} id - The unique identifier of the book
 * @param {string} title - The title of the book 
 * @param {string} author - The author of the book
 * @param {number} year - The publication year of the book
 * @param {boolean} isComplete - The reading completion status of the book
 * 
 * @returns {Object} A book object containing all provided parameters
 */

export const generateBook = (id, title, author, year, isComplete) => {
    return {
        id,
        title,
        author,
        year,
        isComplete
    };
}
