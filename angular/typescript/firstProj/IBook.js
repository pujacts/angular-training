var FictionBook = /** @class */ (function () {
    function FictionBook() {
    }
    FictionBook.prototype.retDetails = function () {
        return "".concat(this.bid, "\t").concat(this.bname, "\t").concat(this.bauth);
    };
    return FictionBook;
}());
var fBook = new FictionBook();
fBook.bid = 101;
fBook.bname = 'DSA';
fBook.bauth = 'ME';
console.log(fBook.retDetails());
