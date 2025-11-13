/*
Continue statement - skips current iteration of loop and proceeds to the next.
*/
//Skip even numbers, print odd.
for (let i = 1; i <= 10; i++){
    if (i % 2 == 0){
        continue;
    }
    console.log(i);
}