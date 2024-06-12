export default function renderFiltered(products){
    const productSection = document.getElementById('items');
    productSection.innerHTML = ``;

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
}