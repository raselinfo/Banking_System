// Event Handler for Login Button
const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function () {

    var email = ["example@gmail.com", "info@gmail.com"];
    var password = ["123456", "678910"];
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;
    for (var i = 0; i < email.length; i++) {
        if (emailInput === email[i] && passwordInput === password[i]) {
            const welcomeSection = document.getElementById("welcomeSection");
            welcomeSection.style.display = "none";

            const dashboard = document.querySelector(".dashboard");
            dashboard.style.display = "block";

        }
        if (emailInput != email[i] && passwordInput != password[i]) {
            alert("not match");

        }
    }


})

// Event handler for Deposit
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click", function () {

    const deposit = addValue("deposit__input", "depositAmmount");
    const balance = addValue("deposit__input", "balanceAmount");

    document.getElementById("deposit__input").value = "";

})

// Event handler for Withdraw
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function () {
    const withdraw = addValue("deposit__withdraw", "withdrawAmount")
    const balance = minusValue("deposit__withdraw", "balanceAmount")

    document.getElementById("deposit__withdraw").value = "";
})

// Get Input Value function
function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}
// Current Value Number
function currentValueNumber(id) {
    const currentValue = document.getElementById(id).innerText;
    const currentValueNumber = parseFloat(currentValue);
    return currentValueNumber;
}

// Add Value
function addValue(input, amount) {
    const totalAmount = getInputValue(input) + currentValueNumber(amount);
    return document.getElementById(amount).innerText = totalAmount;

}

// Minus value
function minusValue(input, amount) {
    const totalAmount = currentValueNumber(amount) - getInputValue(input);

    return document.getElementById(amount).innerText = totalAmount;
}











