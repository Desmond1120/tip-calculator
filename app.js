const btnEl = document.getElementById('calculate');
const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const totalInput = document.getElementById('total');



const calculateTtotal = function(){
 const billValue = billInput.value;
 const tipValue = tipInput.value;
 const totalValue = billValue * (1 + tipValue / 100)
 totalInput.innerText = totalValue;
}

btnEl.addEventListener("click", calculateTtotal);