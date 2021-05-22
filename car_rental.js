"use strict";
window.onload = function () {
    const totalCostBtn = document.getElementById("totalCostBtn");
    totalCostBtn.onclick = totalCostBtnClicked;
}
function totalCostBtnClicked() {
    // get value for number of days from <input> element
    const inputnumberDField = document.getElementById("inputnumberD");
    let inputnumberD = Number(inputnumberDField.value);

    let carRental = 29.99*inputnumberD;

    let options = 0;

    const electronicCheckbox = document.getElementById("electronic");
    if (electronicCheckbox.checked == true) {
        options += (3.95 * inputnumberD);
    }

    const gpsCheckbox = document.getElementById("gps");
    if (gpsCheckbox.checked == true) {
        options += (2.95 * inputnumberD);
    }
    const roadsideCheckbox = document.getElementById("roadside");
    if (roadsideCheckbox.checked == true) {
        options += (2.95 * inputnumberD);
    }

    let surcharge = 0;
    const yesUnderRadioBtn = document.getElementById("yesUnder")
    if (yesUnderRadioBtn.checked == true) {
        surcharge = carRental * .30;
    }

    let totalCost = carRental + options + surcharge;

    // 
    const carRentalPara = document.getElementById("carRental");
    carRentalPara.innerHTML = "Your car rental is $" + carRental.toFixed(2);

    // 
    const optionsPara = document.getElementById("options");
    optionsPara.innerHTML = "Your options cost is $" + options.toFixed(2);

     // 
     const surchargePara = document.getElementById("surcharge");
     surchargePara.innerHTML = "Your surcharge  is $" + surcharge.toFixed(2);
 
    //
    const totalCostPara = document.getElementById("totalCost");
    totalCostPara.innerHTML = "Your total cost is $" + totalCost.toFixed(2);

}
