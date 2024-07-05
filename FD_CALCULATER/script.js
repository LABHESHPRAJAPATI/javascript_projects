function fdcalc(){

const pricipal= parseFloat(document.getElementById("pricipal").value);
const interest= parseFloat(document.getElementById("interestrate").value);
const years= parseFloat(document.getElementById("tenure").value);


const maturityAmount = pricipal + (pricipal * interest * years)/100;

const result = document.getElementById("result");
result.innerText=`Maturity ammount:${maturityAmount.toFixed(2)}`;
}
 
document.getElementById("submit").addEventListener('click',fdcalc);
