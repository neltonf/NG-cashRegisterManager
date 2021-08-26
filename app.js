let billAmt;
let cashAmt;
let balAmt;
let checkBtn = document.getElementById("check-btn");

let twoThousand = 0;
let fiveHundred = 0;
let oneHundred = 0;
let twenty = 0;
let ten = 0;
let five = 0;
let one = 0;

checkBtn.addEventListener("click", () => {
  billAmt = Number(document.getElementById("bill-amount").value);
  cashAmt = Number(document.getElementById("cash-amount").value);
  balAmt = cashAmt - billAmt;


  if (!Number.isInteger(billAmt) || !Number.isInteger(cashAmt)) {
    alert("Please enter a valid number!");
  } else if (cashAmt >= billAmt) {
    if (balAmt >= 2000) {
      twoThousand = ~~(balAmt / 2000);
      balAmt %= 2000;
    }
    if (2000 > balAmt && balAmt >= 500) {
      fiveHundred = ~~(balAmt / 500);
      balAmt %= 500;
    }
    if (500 > balAmt && balAmt >= 100) {
      oneHundred = ~~(balAmt / 100);
      balAmt %= 100;
    }
    if (100 > balAmt && balAmt >= 20) {
      twenty = ~~(balAmt / 20);
      balAmt %= 20;
    }
    if (20 > balAmt && balAmt >= 10) {
      ten = ~~(balAmt / 10);
      balAmt %= 10;
    }
    if (10 > balAmt && balAmt >= 5) {
      five = ~~(balAmt / 5);
      balAmt %= 5;
    }
    if (5 > balAmt && balAmt >= 1) {
      one = ~~(balAmt / 1);
      balAmt %= 1;
    }
  } else {
    alert("You need to pay ₹" + Math.abs(balAmt) + " more");
  }
  document.getElementById("2k").innerText = twoThousand;
  document.getElementById("500").innerText = fiveHundred;
  document.getElementById("100").innerText = oneHundred;
  document.getElementById("20").innerText = twenty;
  document.getElementById("10").innerText = ten;
  document.getElementById("5").innerText = five;
  document.getElementById("1").innerText = one;

  twoThousand = 0;
  fiveHundred = 0;
  oneHundred = 0;
  twenty = 0;
  ten = 0;
  five = 0;
  one = 0;
});
