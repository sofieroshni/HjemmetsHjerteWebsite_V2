import getProducts from "../api/getProducts.js";
import removeLoader from "../functions/removeLoader.js";

export default async function renderProducts() {
    try {
        const products = await getProducts();
        
        const productSection = document.getElementById('items');
        
        if (!productSection) {
            console.error("No element found with id 'items'");
            return;
        }
        
        products.forEach(product => {
            
            productSection.innerHTML += `
                <div class="itemroshni">
                    <a href='./product.html?id=${product.id}'>
                        <img src="${product.image}" alt="${product.name}" class='item-img'>
                        <section class='item-section'>
                            <div class="product-info-roshni">
                                <p class="titelroshni">${product.name}</p>
                                <p class="prisroshni">${product.price} kr;</p>
                                <p class="year">${product.year} udgivelsesår</p>
                            </div>
                        </section>
                    </a>
                    <div>
                        <img class="nofillroshni" src="../images/productimg/nofill.png" alt="save">
                        <img id="bagroshni" src="../images/productimg/bag.png" alt="bag">
                    </div>
                </div>
            `;
        });

        
    } catch (error) {
        console.error("Error rendering products:", error);
    } finally {
        removeLoader();
    }
}