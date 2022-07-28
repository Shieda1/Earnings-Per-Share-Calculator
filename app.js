// https://calculator.swiftutors.com/declining-balance-depreciation-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const earningsPerShareRadio = document.getElementById('earningsPerShareRadio');
const netEarningsRadio = document.getElementById('netEarningsRadio');
const outstandingSharesRadio = document.getElementById('outstandingSharesRadio');

let earningsPerShare;
let netEarnings = v1;
let outstandingShares = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

earningsPerShareRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Earnings';
  variable2.textContent = 'Outstanding Shares';
  netEarnings = v1;
  outstandingShares = v2;
  result.textContent = '';
});

netEarningsRadio.addEventListener('click', function() {
  variable1.textContent = 'Earnings Per Share (EPS)';
  variable2.textContent = 'Outstanding Shares';
  earningsPerShare = v1;
  outstandingShares = v2;
  result.textContent = '';
});

outstandingSharesRadio.addEventListener('click', function() {
  variable1.textContent = 'Earnings Per Share (EPS)';
  variable2.textContent = 'Net Earnings';
  earningsPerShare = v1;
  netEarnings = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(earningsPerShareRadio.checked)
    result.textContent = `Earnings Per Share = ${computeEarningsPerShare().toFixed(2)}`;

  else if(netEarningsRadio.checked)
    result.textContent = `Net Earnings = ${computeNetEarnings().toFixed(2)}`;

  else if(outstandingSharesRadio.checked)
    result.textContent = `Outstanding Shares = ${computeOutstandingShares().toFixed(2)}`;
})

// calculation

function computeEarningsPerShare() {
  return Number(netEarnings.value) / Number(outstandingShares.value);
}

function computeNetEarnings() {
  return Number(earningsPerShare.value) * Number(outstandingShares.value);
}

function computeOutstandingShares() {
  return Number(netEarnings.value) / Number(earningsPerShare.value);
}