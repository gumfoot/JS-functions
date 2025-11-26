function greet(){
    console.log('Hello user!');
    setTimeout(greet, 3000);
}

greet();
