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
    let newCardElement = document.createElement('div');
    newCardElement.className = 'task__card';
    let newAvatarElement = document.createElement('div');
    newAvatarElement.className = 'task__avatar';
    let newNameElement = document.createElement('p');
    newNameElement.className = 'task__name';
    nameElement = inputElement.value;
    newNameElement.textContent = nameElement;
    newCardElement.append(newAvatarElement, newNameElement);
    contentElement.append(newCardElement);
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

let characteristicPeople = [
    {
        name: 'Steve', 
        age: 26, 
        job: 'Businessman', 
        salary: '$1 billion'
    },

    {
        name: 'Bill', 
        age: 45, 
        job: 'Shareholder the company Microsoft', 
        salary: '$267 millions'
    },

    {
        name: 'Elon', 
        age: 52, 
        job: 'Chief engineer of SpaceX', 
        salary: '$15,3 billion'
    }
];

let sumAgePeople = 0;

let characterOfPeoples = function(elemPeople) {
    console.log(elemPeople.job);
    sumAgePeople += elemPeople.age;
};

characteristicPeople.forEach(characterOfPeoples);
console.log(sumAgePeople);

let cars = [
    {
        stamp: 'Volkswagen',
        speed: 216,
        release: 2019
    },

    {
        stamp: 'Ford',
        speed: 214,
        release: 2020
    },

    {
        stamp: 'Mersedes',
        speed: 210,
        release: 2023
    }
];

let sumSpeedCars = 0;
let sumReleaseCars = 0;

let descriptionCars = function(elemCar) {
    sumSpeedCars += elemCar.speed;
    sumReleaseCars += elemCar.release;
};

cars.forEach(descriptionCars);
console.log(sumSpeedCars);
console.log(sumReleaseCars);







