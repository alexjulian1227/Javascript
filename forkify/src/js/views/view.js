import icons from "url:../../img/icons.svg";

export default class View {
  _data;

  renderSpinner = function () {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div> 
      `;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  };

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError(); //checks if there's no data or there is data and its an array with empty

    this._data = data;

    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  update(data) {
    //create a new markup and will not render it for faster browser
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;

    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);

    const newElement = Array.from(newDOM.querySelectorAll("*"));
    const currentElement = Array.from(
      this._parentElement.querySelectorAll("*")
    );
    console.log(currentElement);
    console.log(newElement);

    newElement.forEach((el, i) => {
      const curEl = currentElement[i];
      console.log(currentElement, el.isEqualNode(curEl));

      if (
        !el.isEqualNode(currentElement) &&
        newElement.firstChild.nodeValue.trim() !== ""
      ) {
        curEl.textContent = el.textContent;
      }
    });
  }
}
