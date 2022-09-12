var Departments;
(function (Departments) {
    Departments[Departments["NuclearPhysics"] = 0] = "NuclearPhysics";
    Departments[Departments["Chemistry"] = 1] = "Chemistry";
    Departments[Departments["Mathematics"] = 2] = "Mathematics";
})(Departments || (Departments = {}));
var University = /** @class */ (function () {
    function University() {
    }
    return University;
}());
var uni = new University();
uni.uid = 1001;
uni.uname = 'WBUT';
uni.dept = Departments.Mathematics;
console.log(Departments[uni.dept] + " " + uni.uid + " " + uni.uname);
