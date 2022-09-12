var Books = /** @class */ (function () {
    function Books() {
    }
    Books.prototype.getDetails = function () {
        return this.bid + " " + this.bname;
    };
    return Books;
}());
var book = new Books();
book.bid = 101;
book.bname = 'DSA';
console.log(book.getDetails());
