// // creating promise
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
const promiseOne=new Promise(function(resolve,reject){
    // Do any async task
    // db calls,cryptography,newtwork
    setTimeout(function(){
        
        console.log('Async task is complete');
        resolve(1)
    },2000)
   
})

 promiseOne.then(function(num){
    console.log('promise consumed');
    console.log(num);
 })

 new Promise(function(resolve,reject){
    setTimeout(()=>{
    console.log("Async Task 2")
    resolve()
    },2000)
 }).then(function(){
    console.log("async two resolved");
 })
 


 const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        // we can also pass data through resolve
        resolve({username:"shresht",email:"xyz@email.com"})
    },2000)
 })
 promiseThree.then(function(user){
    console.log(user);
 })

 const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"shresht",email:"xyz@email.com"})
        }
        else
        {
            reject('ERROR: something went wrong')
        }
    },2000)
 })

 promiseFour
 .then((user)=>{
    console.log(user);
    return user.username
 })
 .then((username)=>{
    console.log(username);
 })
 .catch(function(error){
    console.log(error);
 })
 .finally(()=>console.log("the promise is either resolved or rejected"))



 const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Javascript",email:"xyz@email.com"})
        }
        else
        {
            reject('ERROR: JS went wrong')
        }
    },2000)
 })

async function consumePromiseFive(){
    try {
        const response=await promiseFive
         console.log(response);
    } catch (error) {
        console.log(error)
    }
    finally{
        console.log("promise five consumed");
    }
    
}
consumePromiseFive() 


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/shreshtsharma')
//         const data=await response.json()
//         console.log(response);
//         console.log(data)
//     } catch (error) {
//         console.log("error");
//     }
// }


// getAllUsers()


fetch("https://api.github.com/users/shreshtsharma")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log("error"))