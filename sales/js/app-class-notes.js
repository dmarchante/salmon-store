'use strict';

const hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm'
];

let locationFirstPike = {
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  locationName: 'Pike Place Market',
  costumersEachHour: [],
  cookiesEachHour: [],
  totalCookiesPerDay: 0,
}

locationFirstPike.calcCustomersEachHour = function() {
  // genereate a random number between min and max
  for(let i = 0; i < hours.length; i++) {
    // let customersVisited = rand(this.minCustomerPerHour, this.maxCustomerPerHour);
    // customersEachHour.push(customersVisited);

    this.customersEachHour.push(rand(this.minCustomerPerHour, this.maxCustomerPerHour));
  }
};

locationFirstPike.calcCookiesEachHour = function() {
  for(let i; i < hours.length; i++) {
    let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);

    this.cookiesEachHour.push(oneHour);
    this.totalCookiesPerDay += oneHour;
  }
}

locationFirstPike.render = function() {
  let ulEl = document.getElementById('firstPike');

  for(let i = 0; i < hours.length; i++) {
    const liEl = document.createElement('li');
    
    liEl.textContent = `${hours[i]}: ${this.cookiesEachHour[i]}`;
    ulEl.appendChild(liEl);
  }
  // create, content, append for total
  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalCookiesPerDay}`;
  ulEl.appendChild(liEl);
}

function rand(min, max) {
  // following line MDN Math.random docs
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

locationFirstPike.render();