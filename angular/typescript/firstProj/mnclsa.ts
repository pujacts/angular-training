class myCls<T> {
    public myMeth(a: T): T {
        return a;
    }
}

var obj = new myCls<Number>();
console.log(obj.myMeth(21));
