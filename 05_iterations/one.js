// for

for (let i = 0; i < 10; i++) {
    const element=i;
    // console.log(element);
    
}

for (let i = 0; i <=10; i++) {
    for (let j = 0; j <=5; j++) {
        {
            // console.log(`Inner loop value ${j} and outer loop ${i}`);
        }
        
    }
    
}

let myArr=["flash","batman","superman"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
    
}

// break and continue

for (let index = 1; index <=10; index++) {
    if(index==5)
    {
        console.log(`5 is detected`);
        // break
        continue
    }
   console.log(`value of i is ${index}`);
    
}
