export let cart;

loadCart()

export function loadCart(){
    cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
    cart = [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        optionId: '1'
      },
      {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        optionId: '2'
      }]
  }
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
      
      sameProduct.quantity += 1;
    }
    else {
      cart.push({
        productId,
       // Number(document.querySelector(`.js-selected-quantity-${productId}`).value),
        quantity: 1,
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
    }
  }); 
  sameProduct.optionId = deliveryOptionId;
  savetocart();
}