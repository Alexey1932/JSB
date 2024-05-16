const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');


products.forEach(product => {
	product.addEventListener('click', function (e) {
		const productId = this.dataset.id;
		const quantityElement = this.querySelector('.product__quantity-value');
		let quantity = parseInt(quantityElement.textContent);

		if (e.target.classList.contains('product__quantity-control_inc')) {
			if (quantity < 10) {
				quantity += 1;
				quantityElement.textContent = quantity;
			}
		}

		if (e.target.classList.contains('product__quantity-control_dec')) {
			if (quantity > 1) {
				quantity -= 1;
				quantityElement.textContent = quantity;
			}
		}

		if (e.target.classList.contains('product__add')) {
			const cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
			if (cartProduct) {
				const cartProductQuantity = cartProduct.querySelector('.cart__product-count');
				cartProductQuantity.textContent = quantity;
			} else {

				const productImageSrc = this.querySelector('.product__image').src;

				const cartProductHTML = `
                    <div class="cart__product" data-id="${productId}">
                        <img class="cart__product-image" src="${productImageSrc}">
                        <div class="cart__product-count">${quantity}</div>
                    </div>`;
				cartProducts.insertAdjacentHTML('beforeend', cartProductHTML);
			}
		}
	});
});