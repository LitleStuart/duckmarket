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
        showDenyButton: true,
        cancelButtonText: 'Отмена',
        denyButtonText: 'Очистить',
        confirmButtonText: 'Заказать'
    }).then((result) => {
        if (result.isConfirmed) {
            swal.fire({
                titleText: 'Вы оплатили заказ!',
                icon: 'success',
                timer: 10000,
            });
            countItemsInCart = 0;
            cartBadge.setAttribute('data-badge', 0);
        }
        if (result.isDenied) {
            swal.fire({
                titleText: 'Корзина успешно очищена!',
                icon: 'success',
                timer: 10000
            });
            countItemsInCart = 0;
            cartBadge.setAttribute('data-badge', 0);
        }
    })
}

function onBodyClick() {
    if (drawer.classList.contains('is-visible')) {
        container.classList.add('drawer-is-active')
    } else {
        container.classList.remove('drawer-is-active')
    }
}