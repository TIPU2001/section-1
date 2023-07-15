const user = {
    name : 'Tipu',
    email : 'tipubaba998@gamil.com',
    password : '1234567',

};

console.log(user.email);
console.log(typeof user);

console.log(user['password']);

user.address = 'lucknow';
console.log(user);

console.log (user);
for(let k of Object.keys(user)){
    console.log(k);
}
for (let k  of Object.values(user)){
console.log(k);
}

for (let k of Object.entries(user) ){
    console.log(k);
}


const laptop = [
    { brand: 'DELL', model: 'corei3', price: 65000, color:[ 'black silver']},
    { brand: 'Lenove', model: 'Thinkpad', price: 56000, color:["black"]},
    { brand: 'HP', MODEL: "Elitebook", price: 68000, color:['blue']},
    {
        brand: "Asus",
        model: "Ultrabook",
        price: 89999,
        color:["silver","black","white"]







    },



];

// syntax to get the price of ultrabook
console.log(laptop[3].price);

// syntax to replace silver color with gray in ultrabook
laptop[3].color[0] = 'gray';
console.log(laptop);

for (let lap of laptop){
    console.log(lap.brand);
}


// syntax to filter laptops having price less than 70000
//  syntax to filter  laptops hanving black color

 const res1 = laptop.filter((l) =>{return l.price < 60000} );

 console.log(res1);
      
      
console.log(['red','blue','black'].includes('green'));

const res2 = laptop.filter((lappy)=>{return lappy.color.includes('black')})
console.log(laptop);
console.log(res2);


// find the sum of all laptops prices.

let sum = 0;
  
for(let i = 0; i<laptop.length;i++) {
    const lprice = parseInt(laptop[i].price);
    sum = sum + lprice;

}
console.log("Total cost: "+sum);


// add 10% discount to all the laptop.

const discountedprice = laptop.map(laptop =>{
    const discount = parseInt(laptop.price);
    const dp = p*0.1
    const discountedPrice = laptop.price - discount;
    laptop.price = discountedPrice
    return laptop
});
console.log(discountedprice);


// Filter all the laptop having price more than 40000 and 60000(use Filter)

const filteredLaptops = laptops.filter(laptop.price >= 40000 && laptop.price <= 60000);

console.log(filteredLaptops);




