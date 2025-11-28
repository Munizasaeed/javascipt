// Build a mini library system: array of books, functions to add/remove books, display all books.
let books=['englis','urdu','math','computer']
console.log(books);
// for add
function add(str){
books.push(str);
}
add("bio");
console.log(books);
// for remove
function remove (bookname){
    let index=books.indexOf(bookname);
    if(index!==-1){
 books.splice(index, 1);
    }
    else {
        console.log("Book not found");
    }
}
remove("math");
console.log(books);