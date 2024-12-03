import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
export let deliveryOptions=[
  {
    id:'1',
    deliveryday:7,
    priceCents:0
  },
  {
    id:'2',
    deliveryday:3,
    priceCents: 499
  },
  {
    id:'3',
    deliveryday:1,
    priceCents:999
  }
]

export function matchingdeliveryoption(optionId){
  let matchingOption;
  deliveryOptions.forEach(element => {
    if (element.id===optionId) {
      matchingOption=element;
    }
    
    
  });
  return matchingOption;
}
export function calcdeliverydate(deliverydate){
    let date = dayjs();
    let deliveryDate = date.add(deliverydate.deliveryday, 'days');
    let deliveryDateString = deliveryDate.format('dddd MMMM D');
    return deliveryDateString;
}