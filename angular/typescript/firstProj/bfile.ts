class Books1 {
    bid : number;
    bname: string;

    getDetails(){
        return this.bid + " " + this.bname;
    }
}

var book = new Books1();
book.bid  = 101;
book.bname = 'DSA';

console.log(book.getDetails());