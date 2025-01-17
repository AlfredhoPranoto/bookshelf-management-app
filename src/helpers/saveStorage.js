/**
 * @module BookStorageSave
 * @description Module for saving new book to local storage
 */

import { books } from "../main.js";
import { STORAGE_KEY } from "../modules/bookStorage.js";

/**
 * @function saveToStorage
 * @description store a new book to local storage after converting books array to JSON
 * 
 * @throws {Alert}
 * @returns {void}
 */
const saveToStorage = () => {
    // Convert books array to JSON
    const storeData = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, storeData);
    alert('Book successfully saved');
}

export { saveToStorage }