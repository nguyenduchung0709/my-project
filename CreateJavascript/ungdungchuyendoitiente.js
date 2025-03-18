function convertCurrency() {
    let amount = parseFloat(document.getElementById("amount").value);
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let exchangeRate = {
        "VND": { "USD": 0.0000434, "VND": 1 },
        "USD": { "VND": 23000, "USD": 1 }
    };
    let result = amount * exchangeRate[fromCurrency][toCurrency];
    document.getElementById("result").innerHTML = `Result: ${result} ${toCurrency}`;
}