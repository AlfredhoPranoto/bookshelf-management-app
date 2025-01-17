/**
* @module BookEdit
* @description Module for handling book editing functionality
*/

import { generateBook } from '../helpers/generateBook.js';
import { STORAGE_KEY } from '../modules/bookStorage.js'
import { getFormElements } from "../helpers/formSelectors.js";

/**
* Book object retrieved from localStorage for editing
* @constant {Object} book
*/
const book = JSON.parse(localStorage.getItem('editBook'));

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
* Form submit action
* @constant {HTMLElement} editBookForm - Form element for book editing
*/
const editBookForm = document.querySelector('[data-testid="bookEditForm"]');

/**
* Populate form fields with existing book data if available
*/
if (book) {
    titleInput.value = book.title;
    authorInput.value = book.author;
    yearInput.value = book.year;
    completeCheck.checked = book.isComplete
}

/**
* Handle form submission for editing book
* @listens submit
* @description Updates book information in localStorage when edit form is submitted
* 
* Process:
* 1. Prevent default form submission
* 2. Get updated values from form inputs
* 3. Generate updated book object with existing ID
* 4. Retrieve current books from localStorage
* 5. Find and update the book in the array
* 6. Save changes and redirect to home page
* 
* @param {Event} e - Form submission event
*/

editBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get updated values from form
    const title = titleInput.value;
    const author = authorInput.value;
    const year = parseInt(yearInput.value);
    const isComplete = completeCheck.checked;

    // Generate updated book object
    const updatedBook = generateBook(book.id, title, author, year, isComplete);

    // Get current books from storage
    const books = JSON.parse(localStorage.getItem(STORAGE_KEY));

    // Find book index in array
    const bookIndex = books.findIndex(book => book.id == updatedBook.id);

    if (bookIndex !== -1) {
        // Update book in array
        books[bookIndex] = updatedBook;

        // Save changes and clean up
        localStorage.removeItem('editBook');
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
        alert('Buku berhasil terupdate');
        window.location.href = 'index.html';
    }
})




