import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";

import "core-js/stable"; //poliffy everything else
import "regenerator-runtime/runtime"; //polyfilling async await to work for old browser

if (module.hot) {
  //from parcel that will reload the page
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1); //getting the hash id when clicking the link
    if (!id) return; //guard clause
    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    recipeView._clear();
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    //render data to results view
    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  //PUBLISHER SUBSCIBER PATTER
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
