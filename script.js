const cartBadge = document.getElementById('cartBadge');
let countItemsInCart = 0;

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
