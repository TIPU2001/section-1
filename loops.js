for(let i = 0; i<10; i++){
    console.log(i);

};
console.log('................');
for (let i=10; i>0;i-=2){
    console.log(i);
};


// wap to check if s number is prime or not 
 

m= 35;
 for (let i = 2; i<m; i++){
    console.log('not prime');
    prime = false;
    break
 }
 

 if(prime) console.log('prime');


//  WAP to check if a number is divisible by both 7 and 11 
// in rane of 100 - 500
for (let i =100; i<500; i++){

    if(i%7==0 && i%11===0){
        console.log(i);
    }
}
    

// WAP to check if a number is perfect square or not 

// console.log(25 ** 0.5);
// console.log(30 ** 0.5);
let n = 25;

let sqrt = n**0.5;

// console.log(26**0.5 == parseint(26**0.5));

if (sqrt=== parseInt(sqrt)){
    console.log('perfect square');
}else{
    console.log('not perfect square');
}
console.log('not perfect square');

 p = 10;

 while(p>0){
    console.log(p);
    p--;

 };

 q = 10 
 do{
    console.log(q);
    q--
 }while(q>0)
 


//  WAP to reverse number


 let num1 = 376574;
 let reverse = 0;


 while (num1>0){
    let d = num1%10;
    reverse = reverse*10 + d;
    num1 = parseInt(num1/10);
 }

//  console.log(reverse);

// WAP to print all perfect squares in range of 50-350

  for(let i=50; i<=351; i++){
    let sqrt = i**0.5;
    if((sqrt)===parseInt(sqrt)){
        console.log(i+'is a perfect square');
    }

  }

  


//   question2
//  WAP to convert celsius to Fahrenheiht and vice-versa


let Fahrenheiht = 61;

console.log('The celsius of' +Fahrenheiht+ 'is' +(Fahrenheiht-32)*(5/9));

let celsius = 36.66;

console.log('The Fahrenheiht of'+ celsius+ 'is' +((celsius*(9/5))+32));

// question3

// WAP to check if number is palindrome

let num = 5665;
let rev = 0;
let temp = num;
while(num>0){
    let d = num%10;
    rev = rev*10+d;
    num = parseInt(num/10);
}
if(rev === temp){
    console.log('palindrom number');
    
} else{
    console.log('not palindrom');
}



//  question4 

// WAP to print sum of all digits of number.

let n = 23456;
var sum = 0;
while(n>0){
    sum = sum + n % 10;
    n = parseInt(n / 10);
}
 console.log(sum);

//  question 5

// WAP to print fibonacci series.

let n1 = 0;
let n2 = 1;
console.log(n1);
console.log(n2);
let sum;
for(let i=1; i<5; i++){
    sum = n1+n2;
    console.log(sum);
    n1=n2;
    n2=sum;
    
}







 


 







