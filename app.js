let display = document.getElementById('display');
let temp = document.getElementById('input-temp');
let inputUnit = document.getElementById('input-unit');
let convertedTemp = document.getElementById('converted-temp');
let unit = document.getElementById('unit');

let convertButton = document.getElementById('convert-btn');
convertButton.addEventListener('click', tempConverter);

function tempConverter() {
  if (inputUnit.value=='c' || inputUnit.value=='C') {
    convertedTemp.textContent = Math.round(Number(temp.value)*9/5+32).toFixed(2);
    unit.textContent = ' F';
    console.log(convertedTemp.textContent);
    console.log(unit.textContent);

  } else if (inputUnit.value=='f' || inputUnit.value=='F') {
    convertedTemp.textContent = Math.round(Number((temp.value)-32)*5/9).toFixed(2);
    unit.textContent = ' C'
    console.log(convertedTemp.textContent);
    console.log(unit.textContent);
  }
}


// function tempConverter(temp, unit) {
//   if (unit=='c') {
//     return (temp*9/5)+32;
//   } else if (unit=='f') {
//     return (temp-32)*5/9;
//   }  
// }
// console.log(tempConverter(86, 'f'));
// console.log(tempConverter(24, 'c'));

