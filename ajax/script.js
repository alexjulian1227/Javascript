"use strict";

//1
const whereAmI = function (lat, long) {
  console.log(lat, long);
  //2
  fetch(`https://geocode.xyz/${lat},${long}?geoit=xml`).then((response) =>
    response.json()
  );
};

whereAmI(52.508, 13.381);
// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText(`beforeend`, msg);
// };

// const getJSON = function (url, errorMsg = "Something went wrong!") {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   //country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`)
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error("No neighbour for that specific country");
//       //country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         "Neighbour not found"
//       );
//     })

//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => renderError(`Something went wrong...${err}`))
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// // const getCountryData = function (country) {
// //   //country 1
// //   fetch(`https://restcountries.com/v2/name/${country}`)
// //     .then((response) => {
// //       console.log(response);
// //       if (!response.ok)
// //         throw new Error(`Country not found! (${response.status})`);
// //       return response.json(); //promise to promise
// //     })
// //     .then((data) => {
// //       renderCountry(data[0]);
// //       const neighbour = data[0].borders[0];

// //       if (!neighbour) return;
// //       //country 2
// //       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
// //     })
// //     .then((response) => response.json())
// //     .then((data) => renderCountry(data, "neighbour"))
// //     .catch((err) => renderError(`Something went wrong...${err}`))
// //     .finally(() => (countriesContainer.style.opacity = 1));
// // };
// ///////////////////////////////////////
// // const renderCountry = function (data, className = "") {
// // const html = `
// //           <article class="country ${className}">
// //           <img class="country__img" src="${data.flag}" />
// //           <div class="country__data">
// //               <h3 class="country__name">${data.name}</h3>
// //               <h4 class="country__region">${data.region}</h4>
// //               <p class="country__row"><span>👫</span>${(
// //                 +data.population / 1000000
// //               ).toFixed(1)} people</p>
// //               <p class="country__row"><span>🗣️</span>${
// //                 data.languages[0].name
// //               }</p>
// //               <p class="country__row"><span>💰</span>${
// //                 data.currencies[0].name
// //               }</p>
// //           </div>
// //           </article>
// //   `;

// //   countriesContainer.insertAdjacentHTML("beforeend", html);
// //   countriesContainer.style.opacity = 1;
// // };

// // const getCountryAndNeighbor = function (country) {
// //   const request = new XMLHttpRequest();
// //   request.open("GET", `https://restcountries.com/v2/name/${country}`);
// //   request.send();

// //   request.addEventListener("load", function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     renderCountry(data);

// //     //Get neighbor country
// //     const [neighbor] = data.borders;

// //     if (!neighbor) return;

// //     const request2 = new XMLHttpRequest();
// //     request2.open("GET", `https://restcountries.com/v2/alpha/${neighbor}`);
// //     request2.send();

// //     request2.addEventListener("load", function () {
// //       const data2 = JSON.parse(this.responseText);

// //       renderCountry(data2, "neighbour");
// //     });
// //   });
// // };

// // // getCountryAndNeighbor("Philippines");
// // getCountryAndNeighbor("usa");

// //MODERN WAY OF GETTING API

// const renderCountry = function (data, className = "") {
//   const html = `
//             <article class="country ${className}">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(
//                   +data.population / 1000000
//                 ).toFixed(1)} people</p>
//                 <p class="country__row"><span>🗣️</span>${
//                   data.languages[0].name
//                 }</p>
//                 <p class="country__row"><span>💰</span>${
//                   data.currencies[0].name
//                 }</p>
//             </div>
//             </article>
//     `;

//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// // getCountryData("Philippines");
// // getCountryData("Poland");
// btn.addEventListener("click", function () {
//   getCountryData("philippines");
// });
