const body = document.body;
const submitButton = document.querySelector("#submit");

const thankYou = () => {
  return body.textContent("Thank you!");
}

submitButton.addEventListener('click', thankYou);