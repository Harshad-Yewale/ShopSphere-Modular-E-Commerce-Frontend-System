export let cart=JSON.parse(localStorage.getItem("cart"));

if(!cart){
cart=[
    {
      productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity:1
    }  
  ]
}

function savetocart(){
  localStorage.setItem('cart',JSON.stringify(cart));
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
      quantity: Number(document.querySelector(`.js-selected-quantity-${productId}`).value)
    })
  }
  savetocart();
}

export function deleteProduct(productId){
  let newCart=[];
  cart.forEach((product)=>{
    if(product.productId !=productId){
      newCart.push(product);
    }
  })
  cart=newCart;
  savetocart();
}