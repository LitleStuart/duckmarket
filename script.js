const cartBadge = document.getElementById('cartBadge');
const drawer = document.getElementById('drawer');
const container = document.getElementById('container');
let countItemsInCart = 0;
let drawerIsActive = 0;

function addedToCart() {
    Swal.fire({
        title: 'Added to cart',
        icon: 'success',
        timer: 5000,
        confirmButtonColor: '#009688'
    });
    countItemsInCart+=1;
    cartBadge.setAttribute('data-badge', countItemsInCart);
}

function cart() {
    Swal.fire({
        titleText: 'YOUR CART',
        icon: 'info',
        timer: 10000,
        text: 'There are ' + countItemsInCart + ' items!',
        confirmButtonColor: '#009688',
        showCancelButton: true,
        confirmButtonText: 'Заказать'
    })
}

function onBodyClick() {
    if (drawer.classList.contains('is-visible')) {
        container.classList.add('drawer-is-active')
    } else {
        container.classList.remove('drawer-is-active')
    }
}