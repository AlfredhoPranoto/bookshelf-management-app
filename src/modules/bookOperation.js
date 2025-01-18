/**
 * @module BookOperations
 * @description Module for handling various book operations including status changes, deletion, and editing
 */

import { books, RENDER_EVENT } from "../main.js";
import { saveToStorage } from "../helpers/saveStorage.js";

/**
 * Finds a book in the collection by its ID
 * @function findBook
 * @param {string|number} bookId - The ID of the book to find
 * @returns {Object|null} Returns the book object if found, null otherwise
 */

const findBook = (bookId) => books.find(book => book.id == bookId) ?? null;

/**
 * Toggles the completion status of a book
 * @function changeIsCompleteStatus
 * @description Changes the isComplete status of a book between true and false
 * 
 * Process:
 * 1. Finds the target book by ID
 * 2. If book exists, toggles its completion status
 * 3. Triggers UI update event
 * 4. Saves changes to storage
 * 
 * @param {string|number} bookId - The ID of the book to update
 * @returns {void}
 */

const changeIsCompleteStatus = (bookId) => {
    const bookTarget = findBook(bookId);

    if (!bookTarget) return;

    bookTarget.isComplete = !bookTarget.isComplete;

    document.dispatchEvent(new Event(RENDER_EVENT));

    saveToStorage();
}

/**
 * Removes a book from the collection
 * @function deleteBook
 * @description Deletes a book from the books array by its ID
 * 
 * Process:
 * 1. Finds the index of the book in the array
 * 2. If found, removes the book using splice
 * 3. Triggers UI update event
 * 4. Saves changes to storage
 * 
 * @param {string|number} bookId - The ID of the book to delete
 * @returns {void}
 */

const deleteBook = (bookId) => {
    const index = books.findIndex(book => book.id == bookId);

    if (index !== -1) books.splice(index, 1);

    document.dispatchEvent(new Event(RENDER_EVENT));

    saveToStorage();
}

/**
 * Initiates the book editing process
 * @function editBook
 * @description Stores the book data in localStorage and redirects to the edit page
 * 
 * Process:
 * 1. Saves the book object to localStorage
 * 2. Redirects to the edit page with the book ID as a URL parameter
 * 
 * @param {Object} book - The book object to edit
 * @param {string|number} book.id - The ID of the book
 * @returns {void}
 */

const editBook = (book) => {
    localStorage.setItem('editBook', JSON.stringify(book));
}

export { changeIsCompleteStatus, deleteBook, editBook }