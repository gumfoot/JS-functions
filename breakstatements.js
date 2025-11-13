/*
Break statements
Terminates the loop immediately when encountered.
*/

//Example in a for loop
for (let i = 1; i <= 10; i++){
    console.log(i);
    if (i == 5){
        break;
    }
}

//Example in a while loop
let j = 4;
while(i >= 0){
    console.log(i);
    if (i == 2){
        break;
    }
    
    i--;

}

//Example in a do...while loop
let k = 1;
do {
    console.log(k);
    if (k == 4){
        break;
    }
    k++;
}
while (k <= 10);



function checkPrime(num) {
  if (num <= 1) {
    return "Invalid";
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `${num} is not a prime number.`;
    }
  }

  return `${num} is a prime number.`;
}

console.log(checkPrime(11)); // → "6 is not a prime number."
