function User(email,password){
    this._email=email;
    this._password=password;

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value)
        {
            this._email=value;
        }
    });
    
    Object.defineProperty(this,'password',{
        get: function(){
            return this._password+"abc";
        },
        set: function(value)
        {
            this._password=value;
        }
    });
}

const chai=new User("sharma@gmail.com","8126")
console.log(chai.email)
console.log(chai.password);



// I see what you mean now. Yes, you're correct. If you try to use email directly in the getter and setter functions, you would encounter a problem because it creates a recursive call.

// When you define email property using Object.defineProperty, and inside the getter and setter of email, you try to access email again, it would lead to an infinite loop of getter and setter calls, resulting in a stack overflow error.

// To avoid this issue, you typically use a separate internal property, like _email, to store the actual value and then apply any necessary transformations or logic within the getter and setter of the public property, like email.

// Public property (email): This is the property that is intended to be accessed from outside the object. It has a getter and setter defined using Object.defineProperty, which provides controlled access and allows for additional logic or transformations.

// Private property (_email): This property is intended to be accessed and modified only within the object itself. It is prefixed with an underscore (_) as a convention to indicate that it's not meant to be accessed directly from outside the object. It stores the actual value of the email.

// By using the getter and setter for the public property email, you can control how the email is accessed and modified while keeping the actual value stored in the private property _email. This encapsulation helps maintain data integrity and control access to the object's properties.