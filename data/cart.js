export const cart=[{
  productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity:2
},
{
  productId:"54e0eccd-8f36-462b-b68a-8182611d9add",
  quantity:2
}

];

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
      quantity: Number(document.querySelector(`.js-selected-quantity-${productId}`).value)
    })
  }
}
