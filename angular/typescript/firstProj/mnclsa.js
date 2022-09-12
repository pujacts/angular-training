var myCls = /** @class */ (function () {
    function myCls() {
    }
    myCls.prototype.myMeth = function (a) {
        return a;
    };
    return myCls;
}());
var obj = new myCls();
console.log(obj.myMeth(21));
