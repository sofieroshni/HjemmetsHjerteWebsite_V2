import getProducts from '../api/getProducts.js';
import removeLoader from '../functions/removeLoader.js';

export default async function renderSpecificProduct(){
    try {
        const queryString = window.location.search;
        const params = new URLSearchParams(queryString);
        const productId = parseInt(params.get("id"));

        const products = await getProducts();
        const productSection = document.querySelector('.roshni-slider');

        const filteredProduct = products.reduce((foundProduct, product) => {
            if (product.id === productId) {
                return product;
            }
            return foundProduct; /**retunerer det produkt hvis url-id matcher med array.id*/
        }, null); /*den første sammenlikningen i urgangspunktet, aka, tomt*/

        console.log(filteredProduct.model)

        if (!filteredProduct) {
            console.log('No product found with the given ID.');
        }

        productSection.innerHTML = `
                                    <div class="two-rows">
                                        <div class="product-information">
                                        <h1>${filteredProduct.name}</h1>
                                        <p>Stolen er lavet af mørk egetræ og er vandmodståelig og kan holde i lang tid.</p>
                                        <div class="product-details">
                                            <ul>
                                                <li>Model</li>
                                                <li>Højde</li>
                                                <li>Bredde</li>
                                                <li>Stel</li>
                                                <li>Farve</li>
                                            </ul>
                                            <ul>
                                                <li>${filteredProduct.model}</li>
                                                <li>${filteredProduct.højde}</li>
                                                <li>${filteredProduct.bredde}</li>
                                                <li>${filteredProduct.stel}</li>
                                                <li>${filteredProduct.farve}r</li>
                                            </ul>
                                        </div>
                                        <button class="put-in-basket">Læg i kurv</button>
                                        <button class="add-wish">Tilføj til ønskeliste</button>
                                    </div>
                                    <div class="picture-slider">
                                        <img class="stolslide" src="${filteredProduct.image}" alt="Dark Oak Chair">
                                        <img src="../images/productimg/gigantiskstol.png" alt="Dark Oak Chair">
                                    </div>
                                </div>
                                <div class="bottoonsss">
                                    <button></button>
                                    <button></button>
                                    <button></button>
                                </div>
                            `;


    } catch (error){
        console.log(error)
    } finally {
        removeLoader();
    }
}