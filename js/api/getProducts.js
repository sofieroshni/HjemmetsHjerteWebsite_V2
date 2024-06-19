import { items } from "../functions/items.js";

export default async function getProducts() {
    // API call hvis det var en database med url man henter det fra
    // const productUrl = 'www.url.dk';
    // const response = await fetch(productUrl);
    // const json = await response.json();
    // return json; 

    // Simulert API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items);
        }, 1000); // Simulere 1 sekunds forsinkelse
    });

}