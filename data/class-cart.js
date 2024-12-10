class Cart{
  cartItem;
  localStorageKey;

  constructor(key){
    this.localStorageKey=key;
    this.loadCart();
  }
  
  loadCart(){
    this.cartItem = JSON.parse(localStorage.getItem(this.localStorageKey));

    if (!this.cartItem) {
    this.cartItem = [{
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

  savetocart() {
    localStorage.setItem(`${this.localStorageKey}`, JSON.stringify(this.cartItem));
  }

  addproduct(productId) {
    let sameProduct;
    this.cartItem.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        sameProduct = cartItem;
      }
    });
    if (sameProduct) {
      
      sameProduct.quantity += 1;
    }
    else {
      this.cartItem.push({
        productId,
       // Number(document.querySelector(`.js-selected-quantity-${productId}`).value),
        quantity: 1,
        optionId: '1'     
      })
    }
    this.savetocart();
  }

  deleteProduct(productId) {
    let newCart = [];
    this.cartItem.forEach((product) => {
      if (product.productId != productId) {
        newCart.push(product);
      }
    })
    this.cartItem = newCart;
    this.savetocart();
  }

  totalq() {
    let totalquantity = 0;
    this.cartItem.forEach(element => {
      totalquantity += Number(element.quantity);
    });
    return totalquantity;
  }

  updatedeliveryOption(productId, deliveryOptionId) {
    let sameProduct;
    this.cartItem.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        sameProduct = cartItem;   
      }
    }); 
    sameProduct.optionId = deliveryOptionId;
    this.savetocart();
  }
  
}

export const carts=new Cart('cart');



