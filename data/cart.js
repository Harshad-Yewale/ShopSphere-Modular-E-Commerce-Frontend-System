export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 1,
      optionId: '2'
    },
    {
      productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
      quantity: 2,
      optionId: '1'
    }
  ]
}

function savetocart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addproduct(productId) {
  let sameProduct;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      sameProduct = cartItem;
    }
  });
  if (sameProduct) {
    sameProduct.quantity += Number(document.querySelector(`.js-selected-quantity-${productId}`).value);
  }
  else {
    cart.push({
      productId,
      quantity: Number(document.querySelector(`.js-selected-quantity-${productId}`).value),
      optionId: '1'
    })
  }
  savetocart();
}

export function deleteProduct(productId) {
  let newCart = [];
  cart.forEach((product) => {
    if (product.productId != productId) {
      newCart.push(product);
    }
  })
  cart = newCart;
  savetocart();
}

export function totalq() {
  let totalquantity = 0;
  cart.forEach(element => {
    totalquantity += Number(element.quantity);
  });
  return totalquantity;
}

export function updatedeliveryOption(productId, deliveryOptionId) {
  let sameProduct;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      sameProduct = cartItem;
      console.log(cartItem);
    }
  });
  console.log(deliveryOptionId);
  sameProduct.optionId = deliveryOptionId;
  savetocart();
}