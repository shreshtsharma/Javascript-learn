const nums=[1,2,3]

// const total=nums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc+currval
// },0)

const total=nums.reduce((acc,curr)=>acc+curr,0)
console.log(total);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:999
    },
    {
        itemName:"ML course",
        price:4999
    }
]
const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);