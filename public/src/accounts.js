function findAccountById(accounts, id) {
  const foundAccountById = accounts.find((account) => account.id === id);
  return foundAccountById;
}

function sortAccountsByLastName(accounts) {
  const sortedAccountsByLastName = accounts.sort((accountA, accountB) => {
    return accountA.name.last < accountB.name.last ? -1 : 1;
  });
  return sortedAccountsByLastName;
}

function getTotalNumberOfBorrows(account, books) {
  let results = books.reduce((accumaltor, item) => {
    return accumaltor.concat(item.borrows)
  }, []);
  let runner = 0;
  results.forEach((result) => {
    if (result.id === account.id) {
      runner ++
    }
  })
  return runner;
}

function getBooksPossessedByAccount(account, books, authors) {
  let theBooksOut = [];
  books.forEach(book => {
    if (book.borrows[0].returned === false && book.borrows[0].id === account.id) {
      authors.forEach(author => {
        if (author.id === book.authorId) {
          let result = {
            "author": {"name": author.name },
            "title": book.title,
          };
          theBooksOut.push(result);
        }
      })
      
    }
  });
  return theBooksOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
