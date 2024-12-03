import { cart, deleteProduct, totalq, updatedeliveryOption } from "../../data/cart.js";
import { products,matchingproducts} from "../../data/products.js";
import { moneyFormat } from "../utility/money.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { calcdeliverydate, deliveryOptions } from "../../data/delivery.js";
import { renderpayment } from "./paymentsummery.js";

 export function rendercheckout() {
  let checkoutsummery = ``;
  cart.forEach(cartItem => {
    const productId = cartItem.productId;
    const matchingproduct=matchingproducts(productId);

    let deliveryheaddate;
    deliveryOptions.forEach((item) => {
      if (cartItem.optionId === item.id) {
        deliveryheaddate = item;
      }

    })
     const deliveryDateString=calcdeliverydate(deliveryheaddate);
    checkoutsummery += `
      <div class="cart-item-container js-class-container-${matchingproduct.id}">
        <div class="delivery-date">
          Delivery date: ${deliveryDateString}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingproduct.image}">

          <div class="cart-item-details">
            <div class="product-name">
              ${matchingproduct.name}
            </div>
            <div class="product-price">
              $${moneyFormat(matchingproduct.priceCents)}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary">
                Update
              </span>
              <span class="delete-quantity-link link-primary js-delete-quantity" data-product-id="${matchingproduct.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            ${selectoption(matchingproduct, cartItem)}
                    </div>
        </div>
      </div>
    `;





  });
  document.querySelector('.js-order-summary')
    .innerHTML = checkoutsummery;


  function selectoption(matchingproduct, cartItem) {
    let deliveryhtml = ``;
    deliveryOptions.forEach((item) => {
      let deliveryDateString = calcdeliverydate(item);
      let priceCentsstring = item.priceCents === 0 ? "FREE" : `$${moneyFormat(item.priceCents)} -`;
      const ischecked = item.id === cartItem.optionId;


      deliveryhtml += `<div class="delivery-option js-delivery-option"
      data-product-id="${matchingproduct.id}"
      data-delivery-option-id="${item.id}">
              <input type="radio" ${ischecked ? 'checked' : ''}
                class="delivery-option-input"
                name="delivery-option-${matchingproduct.id}">
              <div>
                <div class="delivery-option-date">
                  ${deliveryDateString}
                </div>
                <div class="delivery-option-price">
                  ${priceCentsstring} Shipping
                </div>
              </div>
            </div>
    `
    })
    return deliveryhtml;
  }

  document.querySelectorAll('.js-delivery-option')
    .forEach(element => {
      element.addEventListener('click', () => {
        const { productId, deliveryOptionId } = element.dataset;
        updatedeliveryOption(productId, deliveryOptionId);
        rendercheckout();
        renderpayment();
      })
    })


  function totalquantity() {
    let totalquantity = totalq();
    document.querySelector('.js-checkout-header')
      .innerHTML = `${totalquantity} items`;

  }

  document.querySelectorAll('.js-delete-quantity')
    .forEach((link) => {
      totalquantity();
      link.addEventListener('click', () => {
        let { productId } = link.dataset;
        deleteProduct(productId);
        const deletedItem = document.querySelector(`.js-class-container-${productId}`);
        deletedItem.remove();
        totalquantity();
        renderpayment();
      })

    })
}




