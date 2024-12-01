export const cart=[];

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
