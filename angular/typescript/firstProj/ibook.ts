interface IBook{
    bid: number;
    bname: string;
    bauth: string;

    retDetails(): string;
}

class FictionBook implements IBook{
    bid: number;
    bname: string;
    bauth: string;
    retDetails(): string {
       return `${this.bid}\t${this.bname}\t${this.bauth}`;
   }    
}


var fBook = new FictionBook();
fBook.bid=101;
fBook.bname='DSA';
fBook.bauth='ME';

console.log(fBook.retDetails());
