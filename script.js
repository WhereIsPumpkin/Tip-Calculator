const billInput = document.querySelector("#bill");
const numPeople = document.querySelector("#people");
const tipAmount = document.querySelectorAll(".tipbtn");
const tipPerson = document.querySelector("#tipperson");
const totalPerson = document.querySelector("#totalperson");
const error = document.querySelector(".error");


tipAmount.forEach(button => {
    button.addEventListener("click", () => {
        let x = button.id/100;
        tipPerson.innerText = "$" + x*parseFloat(billInput.value) / parseFloat(numPeople.value);
        totalPerson.innerText = "$" + (x*parseFloat(billInput.value) + parseFloat(billInput.value)) / parseFloat(numPeople.value);
    })
})

