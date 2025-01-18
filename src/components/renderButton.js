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
    changeIsCompleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
    </svg>`
    changeIsCompleteButton.classList.add('btn', 'btn-success');

    // Add event listener to trigger changeIsCompleteStatus
    changeIsCompleteButton.addEventListener('click', () => {
        changeIsCompleteStatus(book.id);
    });

    // Create button to delete book item
    const deleteButton = document.createElement('button');
    deleteButton.dataset.testid = 'bookItemDeleteButton';
    deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">'
    '<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>'
    </svg>`
    deleteButton.classList.add('btn', 'btn-danger');

    // Add event listener to trigger deleteBook
    deleteButton.addEventListener('click', () => {
        deleteBook(book.id);
    });

    // Create button to edit book item
    const editButton = document.createElement('a');
    editButton.dataset.testid = 'bookItemEditButton';
    editButton.href = `editBook.html?id=${book.id}`;
    editButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
    </svg>`
    editButton.classList.add('btn', 'btn-warning');

    // Add event listener to trigger editBook
    editButton.addEventListener('click', () => {
        editBook(book);
    });

    // Append all button elements to main container
    buttonContainer.append(changeIsCompleteButton, deleteButton, editButton);

    return buttonContainer;
};
