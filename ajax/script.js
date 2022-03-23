"use strict";

const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found."));
    });
  });
};
createImage("img/img-1.jpg").then((img) => {
  console.log(`Image 1 loaded.`);
});

const wait = function (seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

wait(2).then(() => {
  imgContainer.style.display = "none";
});
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`Lottery draw is now ongoing....`);

//   setTimeout(function () {
//     if (Math.random() <= 0.5) {
//       resolve(`You win`);
//     } else {
//       reject(new Error(`You lose`));
//     }
//   }, 3000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// const wait = function (seconds) {
//   return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
// };

// wait(5)
//   .then(() => {
//     console.log(`I waited for 5 seconds`);
//     return wait(1);
//   })
//   .then(() => console.log(`You know i waited for another 1 second.`));
// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// // getPosition()
// //   .then((pos) => console.log(pos))

// const whereAmI = function () {
//   getPosition().then((pos) => {
//     const { latitude: lat, longitude: long } = pos.coords;
//     return fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
//       .then((response) => response.json())
//       .then((data) => getCountry(data.country));
//   });
// };

// const getCountry = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => renderGetCountry(data[0]));
// };

// const renderGetCountry = function (data, className = "") {
//   const html = `
//           <article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//               <h3 class="country__name">${data.name}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(
//                 +data.population / 1000000
//               ).toFixed(1)} people</p>
//               <p class="country__row"><span>🗣️</span>${
//                 data.languages[0].name
//               }</p>
//               <p class="country__row"><span>💰</span>${
//                 data.currencies[0].name
//               }</p>
//           </div>
//           </article>
//   `;

//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// btn.addEventListener("click", whereAmI);

// Promise.resolve(`abc`).then((res) => console.log(res));
// Promise.reject(new Error(`Problem`)).catch((res) => console.log(res));

// //{"success": true, "deck_id": 57ibmr9r7og1 "remaining": 52, "shuffled": false}
// const formatNum = function (num) {
//   num = new Intl.NumberFormat().format(num);
//   return num;
// };
// const renderData = function (data) {
//   const html = `
//       <article class="country">
//           <img class="country__img" src="" />
//           <div class="country__data">
//             <h3 class="country__name">${data.rawData[510].Country_Region}</h3>
//             <h4 class="country__region">DATA</h4>
//             <p class="country__row"><span>👫</span>Confirmed Cases: ${formatNum(
//               +data.rawData[510].Confirmed
//             )}</p>
//             <p class="country__row"><span>🗣️</span>Deaths: ${formatNum(
//               +data.rawData[510].Deaths
//             )}</p>
//             <p class="country__row"><span>💰</span>Last Update: ${
//               data.rawData[510].Last_Update
//             }</p>
//           </div>
//         </article>
//   `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };
// const checkData = function () {
//   fetch(`https://coronavirus.m.pipedream.net/`)
//     .then((response) => response.json())
//     .then((data) => renderData(data));
// };

// checkData();

// const deckID = "57ibmr9r7og1";
// const drawCard = function (deck) {
//   fetch(`http://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
//     .then((response) => response.json())
//     .then((data) => {
//       shuffleCards(deckID);
//       console.log(data);
//       console.log(`${data.cards[0].value} of ${data.cards[0].suit}`);

//       displayCard(data);
//     });
// };

// const displayCard = function (data) {
//   const html = `
//   <article class="country">
//           <img class="country__img" src="${data.cards[0].image}" />

//         </article>
//   `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// const shuffleCards = function (deck) {
//   fetch(
//     `http://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/?remaining=true`
//   )
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };
// shuffleCards(deckID);
// drawCard(deckID);
// const whereAmI = function (lat, long) {
//   fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(`You are in ${data.city}, ${data.country}`);
//       console.log(data?.error?.message);
//       getCountry(data.country);
//     });
// };

// const getCountry = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => renderGetCountry(data[0]))
//     .catch((err) =>
//       countriesContainer.insertAdjacentText(
//         `beforeend`,
//         `Something went wrong! ${err}`
//       )
//     );
//   countriesContainer.style.opacity = 1;
// };

// const renderGetCountry = function (data, className = "") {
//   const html = `
//           <article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//               <h3 class="country__name">${data.name}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(
//                 +data.population / 1000000
//               ).toFixed(1)} people</p>
//               <p class="country__row"><span>🗣️</span>${
//                 data.languages[0].name
//               }</p>
//               <p class="country__row"><span>💰</span>${
//                 data.currencies[0].name
//               }</p>
//           </div>
//           </article>
//   `;

//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// whereAmI(52.508, 13.381);
// // //1
// // const whereAmI = function (lat, long) {
// //   const a =
// //     //2
// //     fetch(
// //       `http://api.positionstack.com/v1/reverse?access_key=608627bb36bbd75d1154cdc65e1cdd53&query=${lat},${long}`
// //     ) //52.508,13.381
// //       .then((response) => response.json())
// //       .then((data) => {
// //         const a = data;
// //         console.log(a.data[0].country);
// //         return a.data[0].country;
// //       })
// //       .catch((err) => console.log(`Something went wrong.. ${err}`));
// // };

// // const getCountry = function (country) {
// //   fetch(`https://restcountries.com/v2/name/${country}`, "Country not found")
// //     .then((response) => response.json())
// //     .then((data) => {
// //       console.log(data);
// //     });
// // };
// // const data = whereAmI(52.508, 13.381);
// // console.log(data);
// // getCountry(whereAmI(52.508, 13.381));

// // whereAmI(52.508, 13.381);
// // const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// // const renderError = function (msg) {
// //   countriesContainer.insertAdjacentText(`beforeend`, msg);
// // };

// // const getJSON = function (url, errorMsg = "Something went wrong!") {
// //   return fetch(url).then((response) => {
// //     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

// //     return response.json();
// //   });
// // };

// // const getCountryData = function (country) {
// //   //country 1
// //   getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`)
// //     .then((data) => {
// //       renderCountry(data[0]);
// //       const neighbour = data[0].borders[0];

// //       if (!neighbour) throw new Error("No neighbour for that specific country");
// //       //country 2
// //       return getJSON(
// //         `https://restcountries.com/v2/alpha/${neighbour}`,
// //         "Neighbour not found"
// //       );
// //     })

// //     .then((data) => renderCountry(data, "neighbour"))
// //     .catch((err) => renderError(`Something went wrong...${err}`))
// //     .finally(() => (countriesContainer.style.opacity = 1));
// // };

// // // const getCountryData = function (country) {
// // //   //country 1
// // //   fetch(`https://restcountries.com/v2/name/${country}`)
// // //     .then((response) => {
// // //       console.log(response);
// // //       if (!response.ok)
// // //         throw new Error(`Country not found! (${response.status})`);
// // //       return response.json(); //promise to promise
// // //     })
// // //     .then((data) => {
// // //       renderCountry(data[0]);
// // //       const neighbour = data[0].borders[0];

// // //       if (!neighbour) return;
// // //       //country 2
// // //       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
// // //     })
// // //     .then((response) => response.json())
// // //     .then((data) => renderCountry(data, "neighbour"))
// // //     .catch((err) => renderError(`Something went wrong...${err}`))
// // //     .finally(() => (countriesContainer.style.opacity = 1));
// // // };
// // ///////////////////////////////////////
// // // const renderCountry = function (data, className = "") {
// // // const html = `
// // //           <article class="country ${className}">
// // //           <img class="country__img" src="${data.flag}" />
// // //           <div class="country__data">
// // //               <h3 class="country__name">${data.name}</h3>
// // //               <h4 class="country__region">${data.region}</h4>
// // //               <p class="country__row"><span>👫</span>${(
// // //                 +data.population / 1000000
// // //               ).toFixed(1)} people</p>
// // //               <p class="country__row"><span>🗣️</span>${
// // //                 data.languages[0].name
// // //               }</p>
// // //               <p class="country__row"><span>💰</span>${
// // //                 data.currencies[0].name
// // //               }</p>
// // //           </div>
// // //           </article>
// // //   `;

// // //   countriesContainer.insertAdjacentHTML("beforeend", html);
// // //   countriesContainer.style.opacity = 1;
// // // };

// // // const getCountryAndNeighbor = function (country) {
// // //   const request = new XMLHttpRequest();
// // //   request.open("GET", `https://restcountries.com/v2/name/${country}`);
// // //   request.send();

// // //   request.addEventListener("load", function () {
// // //     const [data] = JSON.parse(this.responseText);
// // //     console.log(data);

// // //     renderCountry(data);

// // //     //Get neighbor country
// // //     const [neighbor] = data.borders;

// // //     if (!neighbor) return;

// // //     const request2 = new XMLHttpRequest();
// // //     request2.open("GET", `https://restcountries.com/v2/alpha/${neighbor}`);
// // //     request2.send();

// // //     request2.addEventListener("load", function () {
// // //       const data2 = JSON.parse(this.responseText);

// // //       renderCountry(data2, "neighbour");
// // //     });
// // //   });
// // // };

// // // // getCountryAndNeighbor("Philippines");
// // // getCountryAndNeighbor("usa");

// // //MODERN WAY OF GETTING API

// // const renderCountry = function (data, className = "") {
// //   const html = `
// //             <article class="country ${className}">
// //             <img class="country__img" src="${data.flag}" />
// //             <div class="country__data">
// //                 <h3 class="country__name">${data.name}</h3>
// //                 <h4 class="country__region">${data.region}</h4>
// //                 <p class="country__row"><span>👫</span>${(
// //                   +data.population / 1000000
// //                 ).toFixed(1)} people</p>
// //                 <p class="country__row"><span>🗣️</span>${
// //                   data.languages[0].name
// //                 }</p>
// //                 <p class="country__row"><span>💰</span>${
// //                   data.currencies[0].name
// //                 }</p>
// //             </div>
// //             </article>
// //     `;

// //   countriesContainer.insertAdjacentHTML("beforeend", html);
// //   countriesContainer.style.opacity = 1;
// // };

// // // getCountryData("Philippines");
// // // getCountryData("Poland");
// // btn.addEventListener("click", function () {
// //   getCountryData("philippines");
// // });
