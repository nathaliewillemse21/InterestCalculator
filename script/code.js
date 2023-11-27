let form = document.getElementById("interestForm");

form.addEventListener("input", function() {
    calculateInterest();
});

function calculateInterest() {
    let principal = parseFloat(document.getElementById("principal").value) || 0;
    let rate = parseFloat(document.getElementById("rate").value) || 0;
    let time = parseFloat(document.getElementById("time").value) || 0;

    let simpleInterest = (principal * rate * time) / 100;
    let compoundInterest = principal * (Math.pow(1 + rate / 100, time)) - principal;

    document.getElementById("simpleInterestResult").innerHTML = "Simple Interest: " + simpleInterest.toFixed(2);
    document.getElementById("compoundInterestResult").innerHTML = "Compound Interest: " + compoundInterest.toFixed(2);
}
