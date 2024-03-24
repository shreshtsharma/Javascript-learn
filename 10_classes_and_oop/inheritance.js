class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password)
    {
        // super()
        // this.username=username
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`a course is added by ${this.username}`);
    }
}

const teacherOne=new Teacher("chai","teacher@gmail.com","123")
const user=new User("tea")
user.logMe()
teacherOne.addCourse()
console.log(teacherOne instanceof Teacher);
console.log(teacherOne instanceof User);
// Output will be true for both as teacherOne is instance of teacher and teacher is instance of user 