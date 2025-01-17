/**
 * @module BookLoad
 * @description Module for loading books to UI
 */

import { books, RENDER_EVENT } from "../main.js"
import { STORAGE_KEY } from "./bookStorage.js";

/**
 * @function loadBooks
 * @description Get all books from local storage and push to array for updating UI
 * @returns {void};
 */
export const loadBooks = () => {
    /**
     * LoadBooks object received from localStorage for UI update
     * @constant {Object} loadedBooks
     */
    const loadedBooks = JSON.parse(localStorage.getItem(STORAGE_KEY));

    // Looping to push book from local storage to books array
    for (const book of loadedBooks) {
        books.push(book);
    }

    // Trigger render event
    document.dispatchEvent(new Event(RENDER_EVENT));
}