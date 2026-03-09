// 1. Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// 2. Hours to Seconds
function hoursToSeconds(hours) {
  return hours * 3600;
}

// 3. Average of three numbers
function averageOfThree(a, b, c) {
  return (a + b + c) / 3;
}

// 4. ETH to Dollars
function ethToDollars(ethAmount, usdPerEth) {
  return ethAmount * usdPerEth;
}

// --- Wire up the UI ---

function getEl(id) {
  return document.getElementById(id);
}

function showResult(id, text, isEmpty = false) {
  const el = getEl(id);
  el.textContent = text;
  el.classList.toggle("empty", isEmpty);
}

// 1. Celsius
getEl("btn-celsius").addEventListener("click", () => {
  const input = getEl("celsius");
  const value = parseFloat(input.value);
  if (Number.isNaN(value)) {
    showResult("result-celsius", "Enter a number.", true);
    return;
  }
  const f = celsiusToFahrenheit(value);
  showResult("result-celsius", `${value}°C = ${f.toFixed(2)}°F`);
});

// 2. Hours
getEl("btn-hours").addEventListener("click", () => {
  const input = getEl("hours");
  const value = parseFloat(input.value);
  if (Number.isNaN(value) || value < 0) {
    showResult("result-hours", "Enter a valid number of hours.", true);
    return;
  }
  const sec = hoursToSeconds(value);
  showResult("result-hours", `${value} hour(s) = ${sec} seconds`);
});

// 3. Average
getEl("btn-avg").addEventListener("click", () => {
  const a = parseFloat(getEl("num-a").value);
  const b = parseFloat(getEl("num-b").value);
  const c = parseFloat(getEl("num-c").value);
  if ([a, b, c].some((n) => Number.isNaN(n))) {
    showResult("result-avg", "Enter three numbers.", true);
    return;
  }
  const avg = averageOfThree(a, b, c);
  showResult("result-avg", `Average of ${a}, ${b}, ${c} = ${avg}`);
});

// 4. ETH
getEl("btn-eth").addEventListener("click", () => {
  const eth = parseFloat(getEl("eth").value);
  const rate = parseFloat(getEl("rate").value);
  if (Number.isNaN(eth) || Number.isNaN(rate) || eth < 0 || rate < 0) {
    showResult("result-eth", "Enter valid ETH amount and USD rate.", true);
    return;
  }
  const usd = ethToDollars(eth, rate);
  showResult("result-eth", `${eth} ETH = $${usd.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
});
