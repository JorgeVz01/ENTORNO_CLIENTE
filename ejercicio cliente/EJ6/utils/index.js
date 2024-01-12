
  function convert() {
    // Get input values
    var amountInput = document.getElementById("amount");
    var amount = amountInput.value;
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;

    // Perform conversion (you can use an API or custom logic)
    var result = amount * conversionRate(fromCurrency, toCurrency);

    // Update result list
    var resultList = document.getElementById("resultList");
    var listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    resultList.appendChild(listItem);

    // Clear input and reset to the original 'From Currency' selection
    amountInput.value = "";
    document.getElementById("fromCurrency").selectedIndex = 0;
  }

  // Placeholder function for conversion rates (replace with actual rates or API call)
  function conversionRate(fromCurrency, toCurrency) {
    // Example rates (replace with real rates)
    var rates = {
        USD: { EUR: 0.85, GBP: 0.73, JPY: 110.21 },
        EUR: { USD: 1.18, GBP: 0.86, JPY: 129.94 },
        GBP: { USD: 1.37, EUR: 1.16, JPY: 152.05 },
        JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0066 },     
         // Add more rates as needed
    };

    return rates[fromCurrency][toCurrency] || 1;
  }

