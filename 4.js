const books = [ 
{
    title: "The greate Gatsby", author: "F scott fitzgerald",
    year: 1925,

},

{
    title: "to kill a Mockingbird",
    author: "Harper lee",
    year: 1960,
},

{
    title : "Who are you",
    author : "George well",
    year: 1949,
}

];

function logTitles(titles) {
    titles.sort();
    console.log(title.join(", "));

}

function extractTitles(books, callback) {
const titles = books.map((books) => books.title); 
callback (titles);
}

extractTitles(books,logTitles);