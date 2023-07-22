let productContents = document.querySelectorAll('.product__content');

const funcContent = function(myCard) {
    console.log(myCard);
    myCard.style.background = 'red';
    myCard.onclick = function() {
        console.log('Привет');
    }
}

productContents.forEach(funcContent);
















