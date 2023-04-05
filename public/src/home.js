function getTotalBooksCount(books) {
return books.length
}

function getTotalAccountsCount(accounts) {
return accounts.length
}

function getBooksBorrowedCount(books) {
let addedTotal = 0
books.forEach((book) => {
  if (book.borrows[0].returned === false) {
    addedTotal ++
  }
})
return addedTotal
}

function getMostCommonGenres(books) {
let mostCommonGenres = {};
  books.forEach((book) => {
    if (mostCommonGenres[book.genre]) {
      mostCommonGenres[book.genre]++;
    }
    else {
      mostCommonGenres[book.genre] = 1;
    }
  });
  let recordedResults = Object.entries(mostCommonGenres).map(([name, count]) => {
    return {name, count};})
  let results = recordedResults.sort((recordedA,recordedB) => recordedB.count - recordedA.count).splice(0,5);
  return results
  }

function getMostPopularBooks(books) {
  let mostPopularBooks = {};
  books.forEach((book) => {
    if (mostPopularBooks[book.title]) {
      mostPopularBooks[book.title] += book.borrows.length
    }
    else {
      mostPopularBooks[book.title] = book.borrows.length
    }
  });
  let recordedResults = Object.entries(mostPopularBooks).map(([name, count]) => {
    return {name, count};})
  let results = recordedResults.sort((totalA, totalB) => totalB.count - totalA.count)
.splice(0,5);
return results
}


function getMostPopularAuthors(books, authors) {
let totalResults = [];
  authors.forEach((author) => {
    let information = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    }
    books.forEach((book) => {
      if (author.id === book.authorId) {
        information.count += book.borrows.length;
      }
    })
    return totalResults.push(information);
  });
  return totalResults = totalResults.sort((totalA, totalB) => totalB.count - totalA.count).splice(0,5);
}
                                           

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
