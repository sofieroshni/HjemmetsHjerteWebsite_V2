import getProducts from "../api/getProducts.js";
import renderFiltered from "./renderFilteredProducts.js";

export default async function filterProducts(){
    const products = await getProducts(); /*Henter produkter */

    const henrikBtn = document.getElementById('Henrik');
    const hjemmetsHjerteBtn = document.getElementById('HJerte');
    const newProductsBtn = document.getElementById('newest');
    const oldProductsBtn = document.getElementById('oldest');
    const moerkEgeTreBtn = document.getElementById('darkOak');
    const lystEgeTreBtn = document.getElementById('lightOak');
    const cheapToExpenBtn = document.getElementById('exspensive');
    const expentToCheapBtn = document.getElementById('cheapest');

    if(henrikBtn){
        henrikBtn.addEventListener('click', () => {
            const filteredProducts = products.filter((a) => {
                return a.designer === 'Henrik Jespersen'
            })
            renderFiltered(filteredProducts);
        })
    }

    if(hjemmetsHjerteBtn){
        hjemmetsHjerteBtn.addEventListener('click', () => {
            const filteredProducts = products.filter((a) => {
                return a.designer === 'Hjemmets Hjerte';
            })
            renderFiltered(filteredProducts);
        })
    }

    if(newProductsBtn){
        newProductsBtn.addEventListener('click', () => {
            const filteredProducts = products.sort((a, b) => {
                
                return a.year < b.year;
            })
            console.log(filteredProducts.year)
            renderFiltered(filteredProducts);
        })

    }

    if(oldProductsBtn){
        oldProductsBtn.addEventListener('click', () => {
            const filteredProducts = products.sort((a, b) => {
                return a.year > b.year;
            })
            console.log(filteredProducts.year)
            renderFiltered(filteredProducts);
        })
    }
    
    if(moerkEgeTreBtn){
        moerkEgeTreBtn.addEventListener('click', () => {
            const filteredProducts = products.filter((product) => product.color === "dark");
            renderFiltered(filteredProducts);

        })
    }

    if(lystEgeTreBtn){
        lystEgeTreBtn.addEventListener('click', () => {
            const filteredProducts = products.filter((product) => product.color === 'light');
            renderFiltered(filteredProducts);
        })
    }

    if(cheapToExpenBtn){
        cheapToExpenBtn.addEventListener('click', () => {
            const filteredProducts = products.sort((a, b) => {
                return a.price > b.price;
            });
            renderFiltered(filteredProducts);

        })
    }

    if(expentToCheapBtn){
        expentToCheapBtn.addEventListener('click', () => {
            const filteredProducts = products.sort((a, b) => a.price < b.price);
            renderFiltered(filteredProducts);
        })
    }

}

// export default async function filterProducts() {
//     const products = await getProducts();

//     const buttonConfig = [
//         { id: 'Henrik', filter: (product) => product.designer === 'Henrik Jespersen' },
//         { id: 'HJerte', filter: (product) => product.designer === 'Hjemmets Hjerte' },
//         { id: 'newest', sort: (a, b) => a.year < b.year },
//         { id: 'oldest', sort: (a, b) => a.year > b.year },
//         { id: 'darkOak', filter: (product) => product.color === 'dark' },
//         { id: 'lightOak', filter: (product) => product.color === 'light' },
//         { id: 'exspensive', sort: (a, b) => a.price - b.price },
//         { id: 'cheapest', sort: (a, b) => b.price - a.price },
//     ];

//     buttonConfig.forEach(({ id, filter, sort }) => {
//         const btn = document.getElementById(id);
//         if (btn) {
//             btn.addEventListener('click', () => {
//                 let filteredProducts = products;
                
//                 if (filter) {
//                     filteredProducts = products.filter(filter);
//                 }
//                 if (sort) {
//                     filteredProducts = products.sort(sort);
//                 }
//                 renderFiltered(filteredProducts);
//             });
//         }
//     });
// }