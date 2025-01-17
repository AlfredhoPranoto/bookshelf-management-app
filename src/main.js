/**
 * @module BookShelfApp
 * @description Module for operating main logic for operating the Bookshelf App, including initialization, event handling, and rendering.
 */

import { addBook } from "./modules/addBook.js";
import { loadBooks } from "./modules/loadBooks.js";
import { checkIfExists, createLocalStorage } from "./modules/bookStorage.js"
import { renderBook } from "./components/renderBook.js";
import { filteredBooks, searchBooks } from "./modules/searchBook.js";

/**
 * List of all books in the app.
 * @constant {Array<Object>} books
 */
export const books = [];
/**
 * Custom event name for rendering book lists.
 * @constant {string} RENDER_EVENT 
 */
export const RENDER_EVENT = 'render-event';

// Initialize the application and set up event listeners.
window.addEventListener('DOMContentLoaded', () => {
    const addBookForm = document.querySelector('[data-testid="bookForm"]');
    const searchBookForm = document.querySelector('[data-testid="searchBookForm"]');

    // Initialize local storage and remove any stale data
    createLocalStorage();
    localStorage.removeItem('editBook');

    // Load books from local storage into the app
    if (checkIfExists()) {
        loadBooks();
    }

    // Set up event listener for adding a new book
    addBookForm.addEventListener('submit', (e) => {
        addBook();
    })

    // Set up event listener for searching books
    searchBookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        searchBooks();
    })
})

// Handle rendering of book lists when the RENDER_EVENT is dispatched.UI
document.addEventListener(RENDER_EVENT, () => {
    const incompleteBookList = document.getElementById('incompleteBookList');
    const completeBookList = document.getElementById('completeBookList');
    const searchInput = document.querySelector('[data-testid="searchBookFormTitleInput"]').value;
    
    // Clear existing book lists
    completeBookList.innerText = '';
    incompleteBookList.innerText = '';

    // Determine which books to display based on search input
    const displayBooks = searchInput ? filteredBooks : books;

    // Populate the respective book lists
    for (const book of displayBooks) {
        if (book.isComplete) {
            completeBookList.append(renderBook(book));
        } else {
            incompleteBookList.append(renderBook(book));
        }
    }
});


