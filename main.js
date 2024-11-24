import { generateReturnsArray } from "./src/investmentGoals";

const form = document.getElementById("investment-form");

// const calculateButton = document.getElementById("calculate-results");

function renderProgression(evt) {
  evt.preventDefault();
  // const startingAmount = Number(form["starting-Amount"].value);
  const startingAmount = Number(
    document.getElementById("starting-amount").value
  );
  const additionalContribution = Number(
    document.getElementById("additional-contribution").value
  );
  const timeAmount = Number(document.getElementById("time-amount").value);
  const timeAmountPeriod = document.getElementById("time-amount-period").value;
  const returnRate = document.getElementById("return-rate").value;
  const returnRatePeriod = document.getElementById("evaluation-rate");
  const taxRate = document.getElementById("tax-rate").value;

  const returnsArray = generateReturnsArray(
    startingAmount,
    timeAmount,
    timeAmountPeriod,
    additionalContribution,
    returnRate,
    returnRatePeriod
  );

  console.log(returnsArray);
}

form.addEventListener("submit", renderProgression);
// calculateButton.addEventListener("click", renderProgression);
