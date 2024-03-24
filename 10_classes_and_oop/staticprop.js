class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username : ${this.username}`);
    }
    static  createId(){
        return `123`
    }
}
const hitesh=new User("hitesh")
hitesh.logMe()
// this will give a error as we can't use access a static function
// console.log(hitesh.createId())

class teacher extends User{
    constructor(username,email)
    {
        super(username)
        this.email=email
    }

}
const iphone=new teacher("iphone","i@phone")
iphone.logMe()
// this is also not accessible 
console.log(iphone.createId());

// Static Methods: These are methods that are called on the class itself, rather than on an instance of the class. They are defined using the static keyword in front of the method name.

// example:
// class MyClass {
//     static myStaticMethod() {
//       return 'Static method has been called';
//     }
//   }
  
//   console.log(MyClass.myStaticMethod()); // Output: Static method has been called
  
//   Static Properties: These are properties that belong to the class itself, rather than to instances of the class. They are also defined using the static keyword.

