import { carts} from "../../data/class-cart.js";

describe('test suite: add to cart function:',()=>{
  

  it('add the existing item in the cart',()=>{
    spyOn(localStorage,'setItem');

    spyOn(localStorage,'getItem').and.callFake(()=>{
      return JSON.stringify([{
        productId :"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity : 1,
        optionId : '1'
      }
      ]);
      
    })
    carts.loadCart();

    carts.addproduct("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(carts.cartItem.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toEqual(jasmine.anything());
    expect(carts.cartItem[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(carts.cartItem[0].quantity).toEqual(2);
  });


  it('add the new item in the cart',()=>{
    spyOn(localStorage,'setItem');

    spyOn(localStorage,'getItem').and.callFake(()=>{
      return JSON.stringify([]);
    });
    carts.loadCart();

    carts.addproduct("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(carts.cartItem.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toEqual(jasmine.anything());
    expect(carts.cartItem[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(carts.cartItem[0].quantity).toEqual(1);
  });

})