import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";

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
    resultsView.render(model.getSearchResultsPage());

    //render pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  //render new results
  resultsView.render(model.getSearchResultsPage(goToPage));

  //render new pagination buttons
  paginationView.render(model.state.search);
};

const init = function () {
  //PUBLISHER SUBSCIBER PATTER
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();
