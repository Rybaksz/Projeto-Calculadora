
let valueNumber1, valueNumber2;
let operationSelected;
let NumberOfClicks = 0;


function updateDisplay(buttonNumber) {
    //const display = document.getElementByiD("display");
    //const display = document.getElementsByTagName("div")[0];

    const display = document.querySelector("div#display");
    
    if(NumberOfClicks === 0){

        display.innerHTML += buttonNumber;


    } else {
        display.innerHTML += buttonNumber;
    }

    NumberOfClicks++;

}

timesButton.addEventListner('click' , multiplication)

function multiplication () {

valueNumber1 = Number.parseInt(display.innerText);
display.innerHTML = 0;
NumberOfClicks = 0;
operationSelected = "multiplication";
}


plusButton.addEventListener('click', sum);

function sum() {

    valueNumber1 = Number.parseInt(display.innerText);
    display.innerHTML = 0;
    NumberOfClicks = 0;
    operationSelected = "sum";

}



minusButton.addEventListener("click" , subtraction);
function subtraction(){

    valueNumber1 = Number.parseInt(display.innerText);
    display.innerHTML = 0;
    NumberOfClicks = 0;
    operationSelected = "subtraction";
}

dividedButton.addEventListener("click" , division);
function division () {

    valueNumber1 = Number.parseInt(display.innerText);
    display.innerHTML = 0;
    NumberOfClicks = 0;
    operationSelected = "division";

}




resultButton.addEventListener("click", result);



function result() {

    valueNumber2 = Number.parseInt(display.innerText);

    if (operationSelected === "sum") {
        display.innerHTML = valueNumber1 + valueNumber2;


    }
     else if (operationSelected === "subtraction") {

        display.innerHTML = valueNumber1 - valueNumber2;
    } 
    
    else if(operationSelected === "multiplication") {

        display.innerHTML = valueNumber1 * valueNumber2;
    }
    else if(operationSelected === "division") {

        display.innerHTML = valueNumber1 / valueNumber2;
    } else {

        console.log("Operação Inválida");

    }
  clearButton.addEventListener("click" , deleteDisplay);

    function deleteDisplay() {

        display.innerHTML = "0";
        operationSelected = null;
        valueNumber1 = null;
        valueNumber2 = null;
    }

}
