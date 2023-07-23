let productContents = document.querySelectorAll('.product__content');

const funcContent = function(myCard) {
    console.log(myCard);
    myCard.style.background = 'red';
    myCard.onclick = function(event) {
        console.log(event.target.style.background = 'green');
    }
}

productContents.forEach(funcContent);
















