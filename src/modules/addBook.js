/**
 * @module BookAdd
 * @description Module for handling adding new book
 */

import { generateBook } from "../helpers/generateBook.js";
import { generateId } from "../helpers/generateId.js";
import { books, RENDER_EVENT } from "../main.js";
import { saveToStorage } from "../helpers/saveStorage.js";
import { getFormElements } from "../helpers/formSelectors.js";

/**
 * Destructures form input elements from the `getFormElements` function.
 *
 * @constant
 * @type {Object}
 * @property {HTMLInputElement} titleInput - Input element for the book title.
 * @property {HTMLInputElement} authorInput - Input element for the book author.
 * @property {HTMLInputElement} yearInput - Input element for the book publication year.
 * @property {HTMLInputElement} completeCheck - Checkbox element for book completion status.
 */
const { titleInput, authorInput, yearInput, completeCheck } = getFormElements();

/**
 * Menambahkan buku baru ke dalam koleksi
 * @function addBook
 * @description Create new book to the list based on the input
 * 
 * Process:
 * 1. Generate unique id
 * 2. Get value from the form
 * 3. Create new book object
 * 4. Add book to books array
 * 5. Dispatch custom event to update UI
 * 6. Save to local storage
 * 
 * @returns {void}
 */

const addBook = () => {
    // Generate unique id
    const bookId = generateId();

    // Get value from the form
    const title = titleInput.value;
    const author = authorInput.value;
    const year = parseInt(yearInput.value);
    const isComplete = completeCheck.checked;

    // Create new book object
    const newBook = generateBook(bookId, title, author, year, isComplete);

    // Add book to books array
    books.push(newBook);

    // Dispatch custom event to update UI
    document.dispatchEvent(new Event(RENDER_EVENT));

    // Save to local storage
    saveToStorage();
}

export { addBook }