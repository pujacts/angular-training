enum Departments{
    NuclearPhysics, Chemistry, Mathematics,
}

class University{
    uid:number;
    uname: string;
    dept: Departments;
}

var uni = new University();
uni.uid= 1001;
uni.uname = 'WBUT';
uni.dept = Departments.Mathematics;

console.log(Departments[uni.dept] +" " + uni.uid + " "+ uni.uname);