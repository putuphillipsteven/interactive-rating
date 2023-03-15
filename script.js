const rateStart = document.querySelector(".container");
const form = document.querySelector(".rating-input");
const submitButton = document.querySelector(".submit-button");
const thankyou = document.querySelector(".thankyou-container");

// Add event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const selector = "input[name=rating-button]:checked";
  const checkedInput = document.querySelector(selector);

  if (checkedInput != null) {
    const selectedRatings = document.querySelector(".selection-text");
    selectedRatings.textContent =
      "You selected " + checkedInput.getAttribute("value") + " out of 5";
    rateStart.classList.add("hidden");
    thankyou.classList.remove("hidden");
  }
});
