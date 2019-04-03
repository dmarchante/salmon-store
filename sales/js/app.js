'use strict';

const siteTable = document.getElementById('sites');
const hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let allSites = [];

function Site(name, minCustomer, maxCustomer, avgCookie) { 
  this.siteName = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.customerVisitsHourly = [];
  this.cookiesSoldHourly = [];
  this.totalCookiesDaily = 0;
  allSites.push(this);
}

new Site('First and Pike', 23, 65, 6.3);
new Site('SeaTac Airport', 23, 65, 6.3);
new Site('Seattle Center', 23, 65, 6.3);
new Site('Capitol Hill', 23, 65, 6.3);
new Site('Alki', 23, 65, 6.3);

Site.prototype.customerVisitsHourlyCalc = function() {
  for(let i = 0; i < hoursOpen.length; i++) {
    this.customerVisitsHourly.push(randomize(this.minCustomer, this.maxCustomer));
  }
};

Site.prototype.cookiesSoldHourlyCalc = function() {
  for(let i = 0; i < hoursOpen.length; i ++) {
    const hour = Math.ceil(this.customerVisitsHourly[i] * this.avgCookie);
    this.cookiesSoldHourly.push(hour);
    this.totalCookiesDaily += hour;
  }
};

Site.prototype.render = function() {
  let trEl = document.createElement('tr');
  let tdEl = document.createElement('td');

  tdEl.textContent = this.siteName;
  trEl.appendChild(tdEl);

  for (let i = 0; i < this.cookiesSoldHourly.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldHourly[i];
    trEl.appendChild(tdEl);
  }

  siteTable.appendChild(trEl);
};

function randomize(min, max) {
  // following line line MDN Math.random docs
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderHeader() {
  let trEl = document.createElement('tr');
  let thEl = document.createElement('th');

  thEl.textContent = 'Site';
  trEl.appendChild(thEl);

  for(let i = 0; i < hoursOpen.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hoursOpen[i];
    trEl.appendChild(thEl);
  }

  siteTable.appendChild(trEl);
}


function renderallSites() {
  for(let i = 0; i < allSites.length; i++){
    allSites[i].customerVisitsHourlyCalc();
    allSites[i].cookiesSoldHourlyCalc();
    allSites[i].render();
  }
}

function renderFooter() {
  let trEl = document.createElement('tr');
  let tdEl = document.createElement('th');

  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);

  // for(let i = 0; i < this.totalCookiesDaily.length; i++) {
  //   tdEl = document.createElement('th');
  //   tdEl.textContent = this.totalCookiesDaily[i];
  //   trEl.appendChild(tdEl);
  // }

  // tdEl = document.createElement('th');
  // tdEl.textContent = this.totalCookiesDaily;
  // trEl.appendChild(tdEl);

  siteTable.appendChild(trEl);
}

renderHeader();
renderallSites();
renderFooter();
