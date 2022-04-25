// Store the wallet amount to your local storage with key "amount"

document.getElementById("add_to_wallet").addEventListener("click", addtowallet);

function addtowallet() {
  let set = JSON.parse(localStorage.getItem("amount")) || null;

  console.log("hii");
  let amount1 = document.getElementById("amount").value;

  let h1=document.getElementById('wallet');
  let s1 = (h1.innerText = set + Number(amount1));

  document.getElementById("navbar").append(h1);
  localStorage.setItem("amount", JSON.stringify(Number(s1)));
}
