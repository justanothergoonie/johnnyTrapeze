console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);

let box = document.querySelector('.about__text');
let green = document.querySelector('.about__green-bar')
let about = document.querySelector('.about__btn')
let height = box.offsetHeight 
green.style.height = height +'px'
