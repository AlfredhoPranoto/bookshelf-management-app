/**
 * @module ButtonRenderer
 * @description Module for rendering action buttons for book items, including status change, edit, and delete functionality
 */

import { changeIsCompleteStatus, deleteBook, editBook } from "../modules/bookOperation.js";

/**
 * Creates and returns a container with action buttons for a book item
 * @function renderButton
 * @description Generates a div element containing three buttons:
 * - Toggle completion status button
 * - Edit book button
 * - Delete book button
 * 
 * Process:
 * 1. Creates main container div for buttons
 * 2.  Creates and sets up status toggle button
 *    - Sets text based on current completion status
 *    - Adds click handler to update status
 * 3. Creates and sets up delete button
 *    - Adds click handler for book deletion
 * 4. Creates and sets up edit button
 *    - Adds click handler to initiate editing
 * 5. Assembles all buttons into container
 * 
 * @param {Object} book - The book object to create buttons for
 * @param {string|number} book.id - Unique identifier for the book
 * @param {boolean} book.isComplete - Current completion status of the book
 * @returns {HTMLDivElement} 
 */

export const renderButton = (book) => {
    // Create main container
    const buttonContainer = document.createElement('div');

    // Create button to change status of book.isComplete
    const changeIsCompleteButton = document.createElement('button');
    changeIsCompleteButton.dataset.testid = 'bookItemIsCompleteButton';
    changeIsCompleteButton.innerText = book.isComplete ? 'Belum Selesai dibaca' : 'Selesai dibaca';
    changeIsCompleteButton.classList.add('btn', 'btn-success');

    // Add event listener to trigger changeIsCompleteStatus
    changeIsCompleteButton.addEventListener('click', () => {
        changeIsCompleteStatus(book.id);
    });

    // Create button to delete book item
    const deleteButton = document.createElement('button');
    deleteButton.dataset.testid = 'bookItemDeleteButton';
    deleteButton.innerText = 'Hapus Buku';
    deleteButton.classList.add('btn', 'btn-danger');

    // Add event listener to trigger deleteBook
    deleteButton.addEventListener('click', () => {
        deleteBook(book.id);
    });

    // Create button to edit book item
    const editButton = document.createElement('button');
    editButton.dataset.testid = 'bookItemEditButton';
    editButton.innerText = 'Edit Buku';
    editButton.classList.add('btn', 'btn-warning');

    // Add event listener to trigger editBook
    editButton.addEventListener('click', () => {
        editBook(book);
    });

    // Append all button elements to main container
    buttonContainer.append(changeIsCompleteButton, deleteButton, editButton);

    return buttonContainer;
};
