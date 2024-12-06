import { addproduct , cart , loadCart} from "../../data/cart.js";

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
    loadCart();

    addproduct("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toEqual(jasmine.anything());
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(2);
  });


  it('add the new item in the cart',()=>{
    spyOn(localStorage,'setItem');

    spyOn(localStorage,'getItem').and.callFake(()=>{
      return JSON.stringify([]);
    });
    loadCart();

    addproduct("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toEqual(jasmine.anything());
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(1);
  });

})