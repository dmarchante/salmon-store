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

let pike = {
  minCustomerPerHour: 23,
  maxCustomerPerHour: 44,
  avgCookiesPerCustomer: 3.14,
  locationName: 'Pike PLace Market',
  costumersEachHour: [],
  cookiesEachHour: [],
  totalCookiesForDay: 0,
  calcCustomersEachHour: function() {
    // genereate a random number between min and max
    rand(this.minCustomerPerHour, this.maxCustomerPerHour);
  },
  calcCookiesEachHour: function() {},
  render: function() {}
}

function rand(min, max) {
  // following line MDN Math.random docs
  return Math.floor(Math.random() * (max - min + 1)) + min;
}