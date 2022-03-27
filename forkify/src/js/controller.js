import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

import "core-js/stable"; //poliffy everything else
import "regenerator-runtime/runtime"; //polyfilling async await to work for old browser

const recipeContainer = document.querySelector(".recipe");

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

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

const init = function () {
  //PUBLISHER SUBSCIBER PATTER
  recipeView.addHandlerRender(controlRecipes);
};
init();
