/**
 * @module BookRenderer
 * @description Module for rendering single book items in the UI
 */

import { renderButton } from "./renderButton.js";

/**
 * Create and return a DOM element for a book
 * @function renderBook
 * @description Generate a div element containing book information and action buttons
 * 
 * Process:
 * 1. Create main container for book
 * 2. Create and populates elements for book detail (title, author, year)
 * 3. Adds button container using renderButton
 * 4. Add all elements into the main container
 * 
 * @param {Object} book 
 * @param {string|number} book.id - Unique identifier for the book
 * @param {string} book.title - Title of the book
 * @param {string} book.author - Author of the book
 * @param {number} book.year - Publication year of the book
 * @returns {HTMLDivElement} A div element containing the rendered information
 */
export const renderBook = (book) => {
    // Create main container for book item
    const bookItem = document.createElement('div');
    bookItem.dataset.bookid = book.id;
    bookItem.dataset.testid = 'bookItem';
    bookItem.classList.add('bg-light', 'rounded', 'text-black', 'p-3');

    // Create and populate title element
    const bookTitle = document.createElement('h3');
    bookTitle.dataset.testid = 'bookItemTitle';
    bookTitle.innerText = book.title;

    // Create and populate author element
    const bookAuthor = document.createElement('p');
    bookAuthor.dataset.testid = 'bookItemAuthor';
    bookAuthor.innerText = `Penulis: ${book.author}`;

    // Create and populate author element
    const bookYear = document.createElement('p');
    bookYear.dataset.testid = 'bookItemYear';
    bookYear.innerText = `Tahun: ${book.year}`;

    // Get button container from renderButton module
    const buttonContainer = renderButton(book);

    // Append all elements into main container
    bookItem.append(bookTitle, bookAuthor, bookYear, buttonContainer);

    return bookItem;
}

