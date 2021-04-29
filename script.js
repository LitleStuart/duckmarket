function addedToCart() {
    Swal.fire({
        title: 'Added to cart',
        icon: 'success',
        timer: 5000,
        confirmButtonColor: '#009688'
    })
}

function cart() {
    Swal.fire({
        titleText: 'YOUR CART',
        icon: 'info',
        timer: 5000,
        confirmButtonColor: '#009688'
    })
}