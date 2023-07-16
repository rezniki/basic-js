let car = {
    engine: 800,
    speed: 300,
    stamp: 'Volkswagen',
    color: 'white'
};

let dog = {
    breed: 'Hachiko',
    height: 71,
    weight: 50,
    country: 'Japan'
};

dog.breed = 'Sheepdog';
dog.height = 65;
dog.weight = 40;
dog.country = 'Germany';

console.log(car);
console.log(dog);

let sumNumbers = function(numberA, numberB) {
    console.log(numberA + numberB);
};

sumNumbers(12, 15);

let helloWorld = function() {
    console.log('Hello world)');
};

helloWorld();

let sayHello = function(word, name) {
    console.log(`Приветствую ${word}, ${name}`);
};

sayHello('вас', 'Игорь');

let mainElement = document.querySelector('.task');
let myElement = document.querySelector('.task__container');
let taskElement = document.querySelector('.task__title')
let inputElement = document.querySelector('.task__input');
let lineElement = document.querySelector('.task__line');
let contentElement = document.querySelector('.task__content');
let cardElement = document.querySelector('.task__card');
let avatarElement = document.querySelector('.task__avatar');
let nameElement = document.querySelector('.task__name');

let buttonElement = document.querySelector('.task__button');

buttonElement.onclick = function() {
    console.log('Произошел клик');
    taskElement.style.color = 'white';
    let inputText = inputElement.value;
    let newDiv = document.createElement('div');
    newDiv.innerHTML += ""
};

console.log(mainElement);
console.log(myElement);
console.log(taskElement);
console.log(inputElement);
console.log(lineElement);
console.log(contentElement);
console.log(cardElement);
console.log(avatarElement);
console.log(nameElement);
