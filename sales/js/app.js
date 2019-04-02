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
]

const locationFirstPike = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookie: 6.3,
  actualCustomer: function() {
      return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },
  cookiesSold: function() {
    let cookiesSoldHourlyList = [];
    let cookiesSoldArray = [];
    let cookiesSoldTotal = 0;

    for (let i = 0; i < hoursOpen.length; i++) {
      let cookiesSoldHourly = this.actualCustomer() * this.avgCookie;
      cookiesSoldHourly = Math.ceil(cookiesSoldHourly);
      let cookiesResult = `${hoursOpen[i]}: ${cookiesSoldHourly}`;

      cookiesSoldArray.push(cookiesSoldHourly);
      // result of all sales
      cookiesSoldHourlyList.push(cookiesResult);
    }

    for (let i = 0; i < cookiesSoldArray.length; i++) {
      cookiesSoldTotal += cookiesSoldArray[i];
    }
    
    cookiesSoldHourlyList.push(`Total: ${cookiesSoldTotal}`);

    return cookiesSoldHourlyList;
  },
  render: function() {
    const ulElFirstPike = document.getElementById('firstPike');
    const totalCookiesSold = this.cookiesSold();

    for (let i = 0; i < totalCookiesSold.length; i++){
      const liElFirstPike = document.createElement('li')

      liElFirstPike.textContent = totalCookiesSold[i];
      ulElFirstPike.appendChild(liElFirstPike);
    }
  },
}

const locationSeaTac = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 1.2,
  actualCustomer: function() {
      return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },
  cookiesSold: function() {
    let cookiesSoldHourlyList = [];
    let cookiesSoldArray = [];
    let cookiesSoldTotal = 0;

    for (let i = 0; i < hoursOpen.length; i++) {
      let cookiesSoldHourly = this.actualCustomer() * this.avgCookie;
      cookiesSoldHourly = Math.ceil(cookiesSoldHourly);
      let cookiesResult = `${hoursOpen[i]}: ${cookiesSoldHourly}`;

      cookiesSoldArray.push(cookiesSoldHourly);
      // result of all sales
      cookiesSoldHourlyList.push(cookiesResult);
    }

    for (let i = 0; i < cookiesSoldArray.length; i++) {
      cookiesSoldTotal += cookiesSoldArray[i];
    }
    
    cookiesSoldHourlyList.push(`Total: ${cookiesSoldTotal}`);

    return cookiesSoldHourlyList;
  },
  render: function() {
    const ulElSeaTac = document.getElementById('seaTac');
    const totalCookiesSold = this.cookiesSold();

    for (let i = 0; i < totalCookiesSold.length; i++){
      const liElSeaTac = document.createElement('li')

      liElSeaTac.textContent = totalCookiesSold[i];
      ulElSeaTac.appendChild(liElSeaTac);
    }
  },
}

const locationSeattleCenter = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7,
  actualCustomer: function() {
      return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },
  cookiesSold: function() {
    let cookiesSoldHourlyList = [];
    let cookiesSoldArray = [];
    let cookiesSoldTotal = 0;

    for (let i = 0; i < hoursOpen.length; i++) {
      let cookiesSoldHourly = this.actualCustomer() * this.avgCookie;
      cookiesSoldHourly = Math.ceil(cookiesSoldHourly);
      let cookiesResult = `${hoursOpen[i]}: ${cookiesSoldHourly}`;

      cookiesSoldArray.push(cookiesSoldHourly);
      // result of all sales
      cookiesSoldHourlyList.push(cookiesResult);
    }

    for (let i = 0; i < cookiesSoldArray.length; i++) {
      cookiesSoldTotal += cookiesSoldArray[i];
    }
    
    cookiesSoldHourlyList.push(`Total: ${cookiesSoldTotal}`);

    return cookiesSoldHourlyList;
  },
  render: function() {
    const ulElSeattleCenter = document.getElementById('seattleCenter');
    const totalCookiesSold = this.cookiesSold();

    for (let i = 0; i < totalCookiesSold.length; i++){
      const liElSeattleCenter = document.createElement('li')

      liElSeattleCenter.textContent = totalCookiesSold[i];
      ulElSeattleCenter.appendChild(liElSeattleCenter);
    }
  },
}

const locationCapitolHill = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  actualCustomer: function() {
      return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },
  cookiesSold: function() {
    let cookiesSoldHourlyList = [];
    let cookiesSoldArray = [];
    let cookiesSoldTotal = 0;

    for (let i = 0; i < hoursOpen.length; i++) {
      let cookiesSoldHourly = this.actualCustomer() * this.avgCookie;
      cookiesSoldHourly = Math.ceil(cookiesSoldHourly);
      let cookiesResult = `${hoursOpen[i]}: ${cookiesSoldHourly}`;

      cookiesSoldArray.push(cookiesSoldHourly);
      // result of all sales
      cookiesSoldHourlyList.push(cookiesResult);
    }

    for (let i = 0; i < cookiesSoldArray.length; i++) {
      cookiesSoldTotal += cookiesSoldArray[i];
    }
    
    cookiesSoldHourlyList.push(`Total: ${cookiesSoldTotal}`);

    return cookiesSoldHourlyList;
  },
  render: function() {
    const ulElCapitolHill = document.getElementById('capitolHill');
    const totalCookiesSold = this.cookiesSold();

    for (let i = 0; i < totalCookiesSold.length; i++){
      const liElCapitolHill = document.createElement('li')

      liElCapitolHill.textContent = totalCookiesSold[i];
      ulElCapitolHill.appendChild(liElCapitolHill);
    }
  },
}

const locationAlki = {
  minCustomer: 2,
  maxCustomer: 16,
  avgCookie: 4.6,
  actualCustomer: function() {
      return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },
  cookiesSold: function() {
    let cookiesSoldHourlyList = [];
    let cookiesSoldArray = [];
    let cookiesSoldTotal = 0;

    for (let i = 0; i < hoursOpen.length; i++) {
      let cookiesSoldHourly = this.actualCustomer() * this.avgCookie;
      cookiesSoldHourly = Math.ceil(cookiesSoldHourly);
      let cookiesResult = `${hoursOpen[i]}: ${cookiesSoldHourly}`;

      cookiesSoldArray.push(cookiesSoldHourly);
      // result of all sales
      cookiesSoldHourlyList.push(cookiesResult);
    }

    for (let i = 0; i < cookiesSoldArray.length; i++) {
      cookiesSoldTotal += cookiesSoldArray[i];
    }
    
    cookiesSoldHourlyList.push(`Total: ${cookiesSoldTotal}`);

    return cookiesSoldHourlyList;
  },
  render: function() {
    const ulElAlki = document.getElementById('alki');
    const totalCookiesSold = this.cookiesSold();

    for (let i = 0; i < totalCookiesSold.length; i++){
      const liElAlki = document.createElement('li')

      liElAlki.textContent = totalCookiesSold[i];
      ulElAlki.appendChild(liElAlki);
    }
  },
}

locationFirstPike.render();
locationSeaTac.render();
locationSeattleCenter.render();
locationCapitolHill.render();
locationAlki.render();

console.log(locationFirstPike.cookiesSold());
console.log(locationSeaTac.cookiesSold());
console.log(locationSeattleCenter.cookiesSold());
console.log(locationCapitolHill.cookiesSold());
console.log(locationAlki.cookiesSold());
