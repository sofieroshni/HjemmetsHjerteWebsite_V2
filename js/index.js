import header from './functions/header.js';
import renderProducts from './rendering/renderProducts.js';
import renderSpecificProduct from './rendering/renderSpecificProduct.js';
import filterProducts from './rendering/filterProducts.js';

const pathName = location.pathname;
// console.log(pathName);

function setRoute(path){
    header();
    switch(path){
        case '/pages/products.html':
            renderProducts();
            filterProducts();
            break;

        case '/pages/product.html':
            renderSpecificProduct();
            break;
    }
}

setRoute(pathName);

// const url = "https://v2.api.noroff.dev/jokes";

// async function getJokes(){
//     const response = await fetch(url);
//     const jokes = await response.json();
//     console.log(jokes.data);
// }

// getJokes();

// function addNumbers(numberA, numberB){
//     const sum = numberA + numberB;
// }

// addNumbers("5, 4", "nfdjfesnkjnf")