/**
 * @module FormSelectors
 * @description Module for centralized form element selectors
 */

/**
 * Book form input selectors
 * @constant {Object} bookFormSelectors
 * @property {string} title - Selector for book title input
 * @property {string} author - Selector for book author input
 * @property {number} year - Selector for book year input
 * @property {boolean} complete - Selector for book completion checkbox
 */

const bookFormSelectors = {
    title: '[data-testid="bookFormTitleInput"]',
    author: '[data-testid="bookFormAuthorInput"]',
    year: '[data-testid="bookFormYearInput"]',
    complete: '[data-testid="bookFormIsCompleteCheckbox"]',
};

/**
 * Gets all form input elements
 * @function getFormElements
 * @returns {Object} Object containing all form input elements
 */
const getFormElements = () => {
    return {
        titleInput: document.querySelector(bookFormSelectors.title),
        authorInput: document.querySelector(bookFormSelectors.author),
        yearInput: document.querySelector(bookFormSelectors.year),
        completeCheck: document.querySelector(bookFormSelectors.complete)
    };
}

export { getFormElements }