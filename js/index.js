import header from './functions/header.js';
import renderProducts from './rendering/renderProducts.js';
import renderSpecificProduct from './rendering/renderSpecificProduct.js';
import filterProducts from './rendering/filterProducts.js';

const pathName = location.pathname;
console.log(pathName);

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