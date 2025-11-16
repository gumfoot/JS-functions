//Recursion is when a function calls itself repeatedly to solve a problem.

//program to countdown to 1

function counter(count){
    console.log(count);

    if (count > 1){
        count-= 1;
        counter(count);
    }
    else {
        return;
    }
}

counter(6);

