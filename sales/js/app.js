'use strict';

const hoursOpen = [
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

const siteFirstPike = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  customerVisitsHourly: [],
  cookiesSoldHourly: [],
  totalCookiesDaily: 0,
};

siteFirstPike.customerVisitsHourlyCalc = function() {
  for(let i = 0; i < hoursOpen.length; i++) {
    this.customerVisitsHourly.push(randomize(this.minCustomer, this.maxCustomer));
  }
};

siteFirstPike.cookiesSoldHourlyCalc = function() {
  for(let i = 0; i < hoursOpen.length; i ++) {
    const hour = Math.ceil(this.customerVisitsHourly[i] * this.avgCookie);
    this.cookiesSoldHourly.push(hour);
    this.totalCookiesDaily += hour;
  }
};

siteFirstPike.render = function() {
  const ulEl= document.getElementById('firstPike');
  let liEl = document.createElement('li');

  for (let i = 0; i < hoursOpen.length; i++) {
    liEl = document.createElement('li');

    liEl.textContent = `${hoursOpen[i]} ${this.cookiesSoldHourly[i]}`;
    ulEl.appendChild(liEl);
  }

  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalCookiesDaily}`;
  ulEl.appendChild(liEl);
};

const siteSeaTac = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  customerVisitsHourly: [],
  cookiesSoldHourly: [],
  totalCookiesDaily: 0,
};

siteSeaTac.customerVisitsHourlyCalc = function() {
  for(let i = 0; i < hoursOpen.length; i++) {
    this.customerVisitsHourly.push(randomize(this.minCustomer, this.maxCustomer));
  }
};

siteSeaTac.cookiesSoldHourlyCalc = function() {
  for(let i = 0; i < hoursOpen.length; i ++) {
    const hour = Math.ceil(this.customerVisitsHourly[i] * this.avgCookie);
    this.cookiesSoldHourly.push(hour);
    this.totalCookiesDaily += hour;
  }
};

siteSeaTac.render = function() {
  const ulEl= document.getElementById('firstPike');
  let liEl = document.createElement('li');

  for (let i = 0; i < hoursOpen.length; i++) {
    liEl = document.createElement('li');

    liEl.textContent = `${hoursOpen[i]} ${this.cookiesSoldHourly[i]}`;
    ulEl.appendChild(liEl);
  }

  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalCookiesDaily}`;
  ulEl.appendChild(liEl);
};

const siteSeattleCenter = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7,
  customerVisitsHourly: [],
  cookiesSoldHourly: [],
  totalCookiesDaily: 0,
};

siteSeattleCenter.customerVisitsHourlyCalc = function() {
  for(let i = 0; i < hoursOpen.length; i++) {
    this.customerVisitsHourly.push(randomize(this.minCustomer, this.maxCustomer));
  }
};

siteSeattleCenter.cookiesSoldHourlyCalc = function() {
  for(let i = 0; i < hoursOpen.length; i ++) {
    const hour = Math.ceil(this.customerVisitsHourly[i] * this.avgCookie);
    this.cookiesSoldHourly.push(hour);
    this.totalCookiesDaily += hour;
  }
};

siteSeattleCenter.render = function() {
  const ulEl= document.getElementById('firstPike');
  let liEl = document.createElement('li');

  for (let i = 0; i < hoursOpen.length; i++) {
    liEl = document.createElement('li');

    liEl.textContent = `${hoursOpen[i]} ${this.cookiesSoldHourly[i]}`;
    ulEl.appendChild(liEl);
  }

  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalCookiesDaily}`;
  ulEl.appendChild(liEl);
};

const siteCapitolHill = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  customerVisitsHourly: [],
  cookiesSoldHourly: [],
  totalCookiesDaily: 0,
};

siteCapitolHill.customerVisitsHourlyCalc = function() {
  for(let i = 0; i < hoursOpen.length; i++) {
    this.customerVisitsHourly.push(randomize(this.minCustomer, this.maxCustomer));
  }
};

siteCapitolHill.cookiesSoldHourlyCalc = function() {
  for(let i = 0; i < hoursOpen.length; i ++) {
    const hour = Math.ceil(this.customerVisitsHourly[i] * this.avgCookie);
    this.cookiesSoldHourly.push(hour);
    this.totalCookiesDaily += hour;
  }
};

siteCapitolHill.render = function() {
  const ulEl= document.getElementById('firstPike');
  let liEl = document.createElement('li');

  for (let i = 0; i < hoursOpen.length; i++) {
    liEl = document.createElement('li');

    liEl.textContent = `${hoursOpen[i]} ${this.cookiesSoldHourly[i]}`;
    ulEl.appendChild(liEl);
  }

  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalCookiesDaily}`;
  ulEl.appendChild(liEl);
};

const siteAlki = {
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6,
  customerVisitsHourly: [],
  cookiesSoldHourly: [],
  totalCookiesDaily: 0,
};

siteAlki.customerVisitsHourlyCalc = function() {
  for(let i = 0; i < hoursOpen.length; i++) {
    this.customerVisitsHourly.push(randomize(this.minCustomer, this.maxCustomer));
  }
};

siteAlki.cookiesSoldHourlyCalc = function() {
  for(let i = 0; i < hoursOpen.length; i ++) {
    const hour = Math.ceil(this.customerVisitsHourly[i] * this.avgCookie);
    this.cookiesSoldHourly.push(hour);
    this.totalCookiesDaily += hour;
  }
};

siteAlki.render = function() {
  const ulEl= document.getElementById('firstPike');
  let liEl = document.createElement('li');

  for (let i = 0; i < hoursOpen.length; i++) {
    liEl = document.createElement('li');

    liEl.textContent = `${hoursOpen[i]} ${this.cookiesSoldHourly[i]}`;
    ulEl.appendChild(liEl);
  }

  liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalCookiesDaily}`;
  ulEl.appendChild(liEl);
};

function randomize(min, max) {
  // following line line MDN Math.random docs
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

siteFirstPike.customerVisitsHourlyCalc();
siteFirstPike.cookiesSoldHourlyCalc();
siteFirstPike.render();
siteSeaTac.customerVisitsHourlyCalc();
siteSeaTac.cookiesSoldHourlyCalc();
siteSeaTac.render();
siteSeattleCenter.customerVisitsHourlyCalc();
siteSeattleCenter.cookiesSoldHourlyCalc();
siteSeattleCenter.render();
siteCapitolHill.customerVisitsHourlyCalc();
siteCapitolHill.cookiesSoldHourlyCalc();
siteCapitolHill.render();
siteAlki.customerVisitsHourlyCalc();
siteAlki.cookiesSoldHourlyCalc();
siteAlki.render();
