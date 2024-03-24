function setUsername(username)
{
    this.username=username;
    console.log(this)
    console.log("called")
}

function createUser(username,email,password)
{
    // here call is used to provide this which gives the current context to setUsername 
    // otherwise setUsername will initialize its own username and then pop from call stack 
    // and we didn't get the value because it is popped now
    setUsername.call(this,username)
    this.email=email
    this.password=password
}

const chai=new createUser("chai","chai@google.com","1234")
console.log(chai);

// +++++++++++++++++++++++++++ This Keyword +++++++++++++++++++++++++++++++
// In JavaScript, the value of this depends on how a function is called. When a function is called as a method of an object, this refers to the object the method is called on. However, when a function is called in a standalone manner (not as a property of an object), this typically refers to the global object (window in a browser, global in Node.js) in non-strict mode, and it is undefined in strict mode.



var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  var person1 = {
    firstName: "John",
    lastName: "Doe"
  };
  
  var person2 = {
    firstName: "Jane",
    lastName: "Doe"
  };
// if we dont use .call() here output will be undefined undefined as function will be called as standalone function and this will point to window object and firstname and lastname is not defined in window object therefore we need to specify the context of this to the function using call.
//   
  
  // Using .call() to invoke fullName with different objects
  console.log(person.fullName(person1));
  console.log(person.fullName.call(person2)); // Outputs: Jane Doe