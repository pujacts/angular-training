var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(acid, aname, bname) {
        if (acid === void 0) { acid = 0; }
        if (aname === void 0) { aname = ''; }
        if (bname === void 0) { bname = ''; }
        this.acid = acid;
        this.aname = aname;
        this.bname = bname;
    }
    BankAccount.prototype.getDetails = function () {
        var str = "".concat(this.acid, "\t").concat(this.aname, "\t").concat(this.bname);
        return str;
    };
    return BankAccount;
}());
var ba = new BankAccount(101, 'puja', 'puja');
console.log(ba.getDetails());
var fixedAccount = /** @class */ (function (_super) {
    __extends(fixedAccount, _super);
    function fixedAccount(acid, aname, bname, bal) {
        if (acid === void 0) { acid = 0; }
        if (aname === void 0) { aname = ''; }
        if (bname === void 0) { bname = ''; }
        if (bal === void 0) { bal = 0; }
        var _this = _super.call(this, acid, aname, bname) || this;
        _this.bal = 0;
        _this.bal = bal;
        return _this;
    }
    return fixedAccount;
}(BankAccount));
var fobj = new fixedAccount(1021, 'Dheeraj', 'Citi Bank', 10000000000000000);
console.log(fobj.getDetails());
console.log(fobj.bal);
