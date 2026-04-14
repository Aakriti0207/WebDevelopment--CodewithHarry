class Student{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hi! I am ${this.name}`);
    }
}
class Engineer extends Student{
    constructor(name,field){
        super(name);
        this.field = field;
    }
    greet(){
        super.greet();
        console.log("I am an engineer");
    }
};

let e = new Engineer("Aakriti", "CSE");
e.greet();