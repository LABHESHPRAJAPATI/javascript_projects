
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";


const passwordEl=document.getElementById("password");
const submitEl=document.getElementById("submit");
const lengthEl=document.getElementById("length");
const uppercaseEl=document.getElementById("uppercase");
const lowercaseEl=document.getElementById("lowercase");
const numbersEl=document.getElementById("number");
const symbolsEl=document.getElementById("symbols");



submitEl.addEventListener('click',function(){
    

const length=lengthEl.value;
let characters= "";
let password= "";

if (lowercaseEl.checked) {
    characters+=lowercaseLetters;
    
}
if (uppercaseEl.checked) {
    characters+=uppercaseLetters;
    
}
if (numbersEl.checked) {
    characters+=numbers;
    
}
if (symbolsEl.checked) {
    characters+=symbols;
    
}
for (let i = 0; i < length; i++) {

    password += characters.charAt(Math.floor(Math.random() * characters.length));
    
}
passwordEl.value=password;


})