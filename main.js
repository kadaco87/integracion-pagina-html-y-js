const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailClosedIcon = document.querySelector('.product-detail-close');
const carrritoClosedIcon = document.querySelector('#shoppingCartContainer')

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailClosedIcon.addEventListener('click', closeProductDetailAside);
carrritoClosedIcon.addEventListener('click', closeShoppingCart);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}


function toggleCarritoAside() {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');



    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');

}


function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');

}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function closeShoppingCart() {
    carrritoClosedIcon.classList.add('inactive');
}


const productList = [];
productList.push({
    name: 'Purse',
    price: 120.00,
    image: './img/pexels-anne-r-3908800.jpg',

});
productList.push({
    name: 'Bolso',
    price: 320.00,
    image: './img/pexels-anne-r-3908800.jpg',

});
productList.push({
    name: 'Backpack',
    price: 620.00,
    image: './img/pexels-anne-r-3908800.jpg',

})

productList.push({
    name: 'Backpack',
    price: 620.00,
    image: './img/pexels-anne-r-3908800.jpg',

})

productList.push({
    name: 'Backpack',
    price: 620.00,
    image: './img/pexels-anne-r-3908800.jpg',

})

productList.push({
    name: 'Backpack',
    price: 620.00,
    image: './img/pexels-anne-r-3908800.jpg',

})


function renderProducts(productList) {
    for (product of productList) {
        //da el elemento del array por nombre
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image); // cambiar la propiedad de la img
        productImg.addEventListener('click', openProductDetailAside)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        ////////////////
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        /////////////////
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);

        ////////////////// 
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        ////////////////////
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard)
    }

};

renderProducts(productList);


/*for (product in productList) {
//nos da el producto por su indice
}*/
