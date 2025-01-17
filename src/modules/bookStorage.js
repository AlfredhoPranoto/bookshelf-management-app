/**
 * @module BookStorage
 * @description Module for handling creation and validation of local storage
 */

/**
 * @constant {string} STORAGE_KEY
 * @description Key used for storing book data in localStorage
 */
const STORAGE_KEY = 'bookshelf_app';

/**
 * Checks if browser supports web storage
 * @function checkStorage
 * @description Validates whether the browser has Storage functionality
 * 
 * @returns {boolean} Returns true if storage is supported, false otherwise
 */
const checkStorage = () => {
    if (typeof Storage === 'undefined') return false;

    return true;
}

/**
 * Checks if storage key exists in localStorage
 * @function checkIfExists
 * @description Verifies if STORAGE_KEY already exists in localStorage
 * 
 * @returns {boolean} Returns true if storage key exists, false otherwise
 */
const checkIfExists = () => {
    if (localStorage.getItem(STORAGE_KEY)) return true;

    return false;
}

/**
 * Initializes localStorage for the application
 * @function createLocalStorage
 * @description Creates localStorage entry if it doesn't exist and browser supports storage
 * 
 * Process:
 * 1. Checks if browser supports web storage
 * 2. If supported and storage key doesn't exist, creates it with empty value
 * 3. If not supported, shows alert message
 * 
 * @returns {void}
 * @throws {Alert} Shows alert if browser doesn't support web storage
 */
const createLocalStorage = () => {
    if (checkStorage()) {
        if (localStorage.getItem(STORAGE_KEY) === null) {
            localStorage.setItem(STORAGE_KEY, '');
        }
    } else {
        alert('Browser doesnt support web storage');
    }
}

export { createLocalStorage, checkIfExists, STORAGE_KEY }