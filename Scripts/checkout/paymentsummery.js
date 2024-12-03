import { cart, totalq } from "../../data/cart.js";
import { matchingproducts } from "../../data/products.js";
import { matchingdeliveryoption } from "../../data/delivery.js";
import { moneyFormat } from "../utility/money.js";

export function renderpayment(){
  let totalPriceCents=0;
  let totalShippingCost=0;
  let totalcostBreforeTax=0;
  let tax=0;
  let totalcost=0;
  cart.forEach(item=> {
   const matchingproduct=matchingproducts(item.productId);
    totalPriceCents+=matchingproduct.priceCents*item.quantity;
   const shippingCost=matchingdeliveryoption(item.optionId);
    totalShippingCost+=shippingCost.priceCents;
    
})
totalcostBreforeTax=totalPriceCents+totalShippingCost;
tax=totalcostBreforeTax*0.1;
totalcost=totalcostBreforeTax+tax;
console.log(moneyFormat(totalcost));



const summaryhtml=`
 <div class="payment-summary-title">
    Order Summary
  </div>

  <div class="payment-summary-row">
    <div>Items (${totalq()}):</div>
    <div class="payment-summary-money">$${moneyFormat(totalPriceCents)}</div>
  </div>

  <div class="payment-summary-row">
    <div>Shipping &amp; handling:</div>
    <div class="payment-summary-money">$${moneyFormat(totalShippingCost)}</div>
  </div>

  <div class="payment-summary-row subtotal-row">
    <div>Total before tax:</div>
    <div class="payment-summary-money">$${moneyFormat(totalcostBreforeTax)}</div>
  </div>

  <div class="payment-summary-row">
    <div>Estimated tax (10%):</div>
    <div class="payment-summary-money">$${moneyFormat(tax)}</div>
  </div>

  <div class="payment-summary-row total-row">
    <div>Order total:</div>
    <div class="payment-summary-money">$${moneyFormat(totalcost)}</div>
  </div>

  <button class="place-order-button button-primary">
    Place your order
  </button>

`

document.querySelector('.js-payment-summery')
 .innerHTML=summaryhtml;
}