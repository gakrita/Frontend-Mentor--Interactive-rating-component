const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
      <div class="thank-you-container">
        <img src="images/illustration-thank-you.svg" class="image" />
        <p class="selected-rating-text">
          You selected
          ${selectedRating}
          out of 5
        </p>
          <article>
            <h1 class="thank-you-heading">Thank you!</h1>
            <p class="thank-you-paragraph">
              We appreciate you taking the time to give a rating. If you ever need
              more support, don’t hesitate to get in touch!
            </p>
          </article>
      </div>
      `;
  }
});

function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
