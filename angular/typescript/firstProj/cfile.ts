class BankAccount{
    acid : number;
    aname : string;
    bname: string;

    constructor(acid:number=0, aname:string='',bname:string=''){
        this.acid = acid;
        this.aname = aname;
        this.bname = bname;
    }

    getDetails(){
        var str : string = `${this.acid}\t${this.aname}\t${this.bname}`;
        return str;
    }
}

var ba = new BankAccount(101, 'puja', 'puja');
console.log(ba.getDetails());

class fixedAccount extends BankAccount{
    bal: number = 0;
    constructor(
        acid:number=0, 
        aname:string='',
        bname:string='',
        bal: number= 0){
       super(acid, aname, bname);
       this.bal = bal;
    }
}

var fobj = new fixedAccount(1021, 'Dheeraj', 'Citi Bank', 10000000000000000);
console.log(fobj.getDetails());
console.log(fobj.bal);