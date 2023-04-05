function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((books) => books.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter(({borrows}) => borrows[0].returned === true);
  const returnedBooks = books.filter(({borrows}) => borrows[0].returned === false);
  return books = [returnedBooks, borrowedBooks];
}

function getBorrowersForBook(book, accounts) {
  let theBorrowersOfTheBooks = [];
  book.borrows.map(borrow => {
    let accountFinder = accounts.find(({id}) => id === borrow.id);
    const returned = borrow.returned;
    accountFinder = {...accountFinder, returned};
    theBorrowersOfTheBooks.push(accountFinder);
  });
  return theBorrowersOfTheBooks.slice (0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
