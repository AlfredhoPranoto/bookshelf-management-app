/**
 * @module BookSearch
 * @description Module handling book search from from input
 */

import { books, RENDER_EVENT } from "../main.js";

let filteredBooks = [];

/**
 * @function searchBooks
 * @description Get search input value and filter the array that contains the search value
 * 
 * Process:
 * 1. Get input value from search form
 * 2. Search books array for book title that includes search value
 * 3. Assign filteredBooks array with the result
 * 4. Render UI
 * 
 * @returns {void}
 */
const searchBooks = () => {
    // Get search input value from form
    const searchInput = document.querySelector('[data-testid="searchBookFormTitleInput"]').value;

    // Assign filtered result to filteredBooks array
    filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchInput.toLowerCase()));

    // Trigger render event
    document.dispatchEvent(new Event(RENDER_EVENT));
};

export { filteredBooks, searchBooks }