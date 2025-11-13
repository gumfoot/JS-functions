/* While loops
while (condition){
    body
}
*/


 let sum = 0; 
 let i = 1;
 while(i <= 10){
     sum += i;
     console.log(sum);
     i++;
 }

const num = 4;
let j = 0;
while (j <= 10){
    let product = num * j;
    console.log(`${num} x ${j} = ${product}`);
    j++;
}


const numb = 4;
let k = 1;
while(k <= 10){
    if(k % 2 == 0){
        let product = num * k;
        console.log(`${num} x ${k} = ${product}`);
    }
    
    k++;

}


/*
do...while loops
do {
    body;
}
    while(condition)
*/

let m = 10;
do {
    console.log(i);
    m --;
}
while (m >= 0);