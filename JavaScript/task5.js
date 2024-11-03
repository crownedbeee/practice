const library = [];

function Book(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.getSummary = function() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.yearPublished}`;
    };
}

function addBook(title, author, yearPublished) {
    const newBook = new Book(title, author, yearPublished);
    library.push(newBook);
}

function viewBooks() {
    library.forEach(book => console.log(book.getSummary()));
}

function deleteBook(title) {
    const index = library.findIndex(book => book.title === title);
    if (index !== -1) {
        library.splice(index, 1);
        console.log(`The book titled "${title}" has been removed.`);
    } else {
        console.log(`No book found with the title "${title}".`);
    }
}


// Adding books to the library
addBook("Think Big", "Ben Carson", 1992);
addBook("To Kill a Mockingbird", "Harper Lee", 1960);
addBook("1984", "George Orwell", 1949);

// Viewing books in the library
console.log("Viewing all books in the library:");
viewBooks();

// Deleting a book
console.log("\nDeleting a book titled '1984':");
deleteBook("1984");

// Viewing updated list of books in the library
console.log("\nUpdated library:");
viewBooks();
