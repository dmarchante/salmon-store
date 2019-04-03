'use strict';

const siteTable = document.getElementById('sites');
const hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let cookieSoldHourlySite = [];
let totalCookiesHourly = 0;

let allSites = [];

function Site(name, minCustomer, maxCustomer, avgCookie) {
  this.siteName = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie = avgCookie;
  this.customerVisitsHourly = [];
  this.cookiesSoldHourly = [];
  this.totalCookiesDaily = 0;
  this.totalCookieHourly = 0;
  allSites.push(this);
}

new Site('First and Pike', 23, 65, 6.3);
new Site('SeaTac Airport', 3, 24, 1.2);
new Site('Seattle Center', 11, 38, 3.7);
new Site('Capitol Hill', 20, 38, 2.3);
new Site('Alki', 2, 16, 4.6);

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

  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesDaily;
  trEl.appendChild(tdEl);

  siteTable.appendChild(trEl);
};

function randomize(min, max) {
  // following line line MDN Math.random docs
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Reviewed Cristian Restrepo's code to work for my arch
function totalCookiesHourlyCalc() {
  for (let i = 0; i < allSites.length; i++) {
    cookieSoldHourlySite.push(allSites[i].cookiesSoldHourly);
  }

  // The following line of code was from https://stackoverflow.com/questions/34458132/how-to-sum-elements-at-the-same-index-in-array-of-arrays-into-a-single-array
  cookieSoldHourlySite = cookieSoldHourlySite.reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), []);

  for (let i = 0; i < cookieSoldHourlySite.length; i++){
    totalCookiesHourly += cookieSoldHourlySite[i];
  }
}

function renderHeader() {
  let trEl = document.createElement('tr');
  let tdEl = document.createElement('td');

  tdEl.textContent = 'Site';
  trEl.appendChild(tdEl);

  for(let i = 0; i < hoursOpen.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = hoursOpen[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);

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
  totalCookiesHourlyCalc();

  let trEl = document.createElement('tr');
  let tdEl = document.createElement('td');

  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);

  for (let i = 0; i < cookieSoldHourlySite.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = cookieSoldHourlySite[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = totalCookiesHourly;
  trEl.appendChild(tdEl);

  siteTable.appendChild(trEl);
}

function renderTable() {
  renderHeader();
  renderallSites();
  renderFooter();
}

renderTable();


// some of the patterns for the constructor were inspired by Sam Hamm (201 - Instructor)
