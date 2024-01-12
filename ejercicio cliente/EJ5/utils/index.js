      // Calculator functions
      let display = document.getElementById('calculator-display');
      let historyList = document.getElementById('operation-history');
  
      function appendToDisplay(value) {
          display.value += value;
      }
  
      function calculateResult() {
          try {
              let result = eval(display.value);
              // Add the operation to the history list
              addToHistory(display.value + ' = ' + result);
              clearDisplay();
          } catch (error) {
              display.value = 'Error';
          }
      }
  
      function clearDisplay() {
          display.value = '';
      }
  
      function addToHistory(operation) {
          let listItem = document.createElement('li');
          listItem.textContent = operation;
          historyList.appendChild(listItem);
      }