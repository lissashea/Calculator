let result = '';

function handleClick(value) {
  result += value;
  document.querySelector('.result').value = result;
}

function clearResult() {
  result = '';
  document.querySelector('.result').value = result;
}

function calculateResult() {
  try {
    result = eval(result);
    document.querySelector('.result').value = result;
  } catch (e) {
    alert('Invalid calculation');
  }
}
