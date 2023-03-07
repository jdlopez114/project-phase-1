const counterButton = document.querySelector("#counter-button");
let counterDisplay = document.querySelector("#display-counter")
let counterNum = 0;
counterDisplay.innerText = counterNum;



counterButton.addEventListener('click', () => {
    
    counterDisplay.innerText = counterNum++;
})