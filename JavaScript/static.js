class User{
    static userCount = 0;
    constructor (name){
        this.name = name;
        User.userCount++;
    }
    greet(){
        console.log(`Hi! My name is ${this.name}`);
    }
    static getUserCount(){
        console.log(`Total Active Users - ${User.userCount}`);
    }
};

const User1 = new User("Aakriti");
const User2 = new User("Aahana");
const User3 = new User("Shreya");

User1.greet();
User.getUserCount();