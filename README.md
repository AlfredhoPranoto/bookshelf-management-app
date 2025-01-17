# Bookshelf Management App

A simple web application for managing a personal bookshelf. This app allows users to add, edit, delete, search, and manage books by categorizing them into unfinished and finished lists.

## Features

- **Add New Book**: Add a new book with its title, author, and completion status.
- **Edit Book**: Update the details of an existing book.
- **Delete Book**: Remove a book from the list.
- **Search Book**: Quickly find books by their title.
- **Change Completion Status**: Move books between unfinished and finished lists.

### Bookshelf Lists
The app organizes books into two separate lists:
1. **Unfinished Book List**: Contains books that are still being read.
2. **Finished Book List**: Contains books that have been completed.

Books are added to the appropriate list based on the `book.isComplete` property:
- If the "Is Complete" checkbox is checked in the form, the book is added to the **Finished Book List**.
- Otherwise, it is added to the **Unfinished Book List**.

## Technologies Used

- **HTML**: Structure and content of the application.
- **CSS**: Custom styling for the application.
- **Bootstrap**: Responsive design and prebuilt components.
- **JavaScript**: Core logic and functionality.

## Planned Updates

- **SweetAlert Integration**:
  - Add stylish alerts and dialogs for better user experience.
  - Provide confirmation prompts when deleting books.

- **GSAP (GreenSock Animation Platform) or Anime.js**:
  - Implement smooth animations for adding, updating, and deleting books.

- **Enhanced Book Properties**:
  - Add a "Pages" property to store the total number of pages in a book.
  - Update UI to display and manage the "Pages" property.

## How to Use

1. **Add a Book**:
   - Fill in the book's title, author, and completion status in the form.
   - Click the "Add" button to add the book to the appropriate list.

2. **Edit a Book**:
   - Click the "Edit" button on a book to modify its details.
   - Save changes to update the book's information.

3. **Delete a Book**:
   - Click the "Delete" button to remove a book from the list.
   - (Future update: Confirmation dialog before deletion.)

4. **Search for a Book**:
   - Enter a keyword in the search bar to filter books by title.

5. **Change Completion Status**:
   - Use the "Mark as Finished" or "Mark as Unfinished" button to move books between lists.

## Folder Structure

```
project-root/
├── index.html                # Main entry point of the app
├── editBook.html             # Page for editing book details
├── assets/
│   ├── css/
│   │   └── style.css         # Custom styles
├── src/
│   ├── components/
|   |   ├── renderButton.js   # Component for rendering book elements
│   │   └── renderBook.js     # Component for rendering book elements
│   ├── helpers/
|   |   ├── formSelectors.js  # Helper to select all form input
|   |   ├── generateBook.js   # Helper to generate book structure
|   |   ├── generateId.js     # Helper to generate unique id
|   |   └── saveStorage.js    # Helper to save to storage
│   ├── modules/
│   │   ├── addBook.js        # Module for adding books
│   │   ├── bookOperation.js  # Module for book operation (change status, delete, edit)
│   │   ├── editBook.js       # Module for editing a book
│   │   ├── loadBooks.js      # Module for loading books from local storage
│   │   ├── bookStorage.js    # Module for managing local storage
│   │   └── searchBook.js     # Module for searching books
│   └── main.js               # Main app logic
```

## License
This project is open-source and available under the [MIT License](LICENSE).

---

Enjoy managing your personal bookshelf! 😊
