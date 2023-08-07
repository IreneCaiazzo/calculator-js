let numBtn = document.querySelectorAll('[data-number]');
let opBtn = document.querySelectorAll('[data-operation]');
let eqBtn = document.querySelector('[data-equals]');
let delBtn = document.querySelector('[data-delete]');
let acBtn = document.querySelector('[data-all-clear]');
let prevOp = document.querySelector('[data-previous-operand]');
let currOp = document.querySelector('[data-current-operand]');



numBtn.forEach(button => {
    button.addEventListener("click", function () {
        currOp.innerHTML += button.textContent
    })
})

acBtn.addEventListener("click", function () {
    currOp.innerHTML = "";
    prevOp.innerHTML = "";
})


delBtn.addEventListener("click", function () {
    currOp.innerHTML = currOp.textContent.slice(0, -1)
})

opBtn.forEach(button => {
    button.addEventListener("click", function () {
        if ((button.textContent == "*" && currOp.innerHTML == "") || (button.textContent == "+" && currOp.innerHTML == "") || (button.textContent == "/" && currOp.innerHTML == "")) {

        } else if (button.textContent == "-" && currOp.innerHTML == "") {
            currOp.innerHTML = "- "
        }
        else if (prevOp.innerHTML == "") {
            currOp.innerHTML += " " + button.textContent + " "
            prevOp.innerHTML = currOp.innerHTML
            currOp.innerHTML = ""

        } else {
            currOp.innerHTML += " " + button.textContent + " "
            prevOp.innerHTML += currOp.innerHTML
            currOp.innerHTML = ""

        }

    })
})

eqBtn.addEventListener("click", function () {

    if (prevOp.innerHTML != "") {

        prevOp.innerHTML += currOp.innerHTML
        currOp.innerHTML = eval(prevOp.textContent)

    } else {
        prevOp.innerHTML = currOp.innerHTML
        currOp.innerHTML = eval(prevOp.textContent)
    }

    prevOp.innerHTML = ""

})

