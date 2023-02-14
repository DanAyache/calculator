function calculateEquations() {
  let tableRows = document.getElementsByTagName('tr');
  let summaryRow = document.createElement('tr'); // create a new row for the summary

  let total = 0; // initialize the total to zero

  for (let index = 1; index < tableRows.length; index++) {
    let row = tableRows[index]
    let cells = row != null ? row.getElementsByTagName('td') : null;
    if (cells) {
      const operand1 = parseInt(cells[0].textContent);
      const operator = cells[1].textContent;
      const operand2 = parseInt(cells[2].textContent);
      let result;
      switch (operator) {
        case "+":
          row.style.backgroundColor = 'rg(0,0,255)';
          result = operand1 + operand2;
          break;
        case "-":
          row.style.backgroundColor = 'rgb(255,0,0)';
          result = operand1 - operand2;
          break;
        case "*":
          row.style.backgroundColor = 'rgb(255,255,0)';
          result = operand1 * operand2;
          break;
        case "/":
          row.style.backgroundColor = 'rgb(0,255,0)';
          result = operand1 / operand2;
          break;
        default:
          result = "Invalid operator";
      }
      console.log(result);
      if (result === 10) {
        setTimeout(() => {
          alert('The result is 10!');
        }, 2000);
      }
      cells[4].innerHTML = result;
      total += result; // add the result to the total
    }
  }

  // create a new cell for the summary and add it to the summary row
  let summaryCell = document.createElement('td');
  summaryCell.innerHTML = "Summary: " + total;
  summaryRow.appendChild(summaryCell);

  // add the summary row to the end of the table
  let table = document.getElementsByTagName('table')[0];
  table.appendChild(summaryRow);
}
