let fiveBtn = document.querySelector('.five')
let tenBtn = document.querySelector('.ten')
let fifteenBtn = document.querySelector('.fifteen')
let twentyFiveBtn = document.querySelector('.twenty-five')
let fiftyBtn = document.querySelector('.fifty')
let bill = document.querySelector('.bill')
let custom = document.querySelector('.custom')
let numOfPersons = document.querySelector('.num-of-persons')
let tipNum = document.querySelector('.tip-num')
let totalNum = document.querySelector('.total-num')
let resetBtn = document.querySelector('.resetBtn')

fiveBtn.addEventListener('click', fiveClick)
tenBtn.addEventListener('click', tenClick)
fifteenBtn.addEventListener('click', fifteenClick)
twentyFiveBtn.addEventListener('click', twentyFiveClick)
fiftyBtn.addEventListener('click', fiftyClick)
custom.addEventListener('input', customClick)
resetBtn.addEventListener('click', resetClick)

function fiveClick(){
    tenBtn.classList.remove("active")
    fifteenBtn.classList.remove("active")
    twentyFiveBtn.classList.remove("active")
    fiftyBtn.classList.remove("active")
    fiveBtn.classList.add("active")

    if(bill.value && numOfPersons.value === ""){
    }else{
        let tip = 5
        let result = (tip / 100) * bill.value / numOfPersons.value
        tipNum.innerHTML = `$${result.toFixed(2)}`

        let totalBillPP = (bill.value / numOfPersons.value) + result
        totalNum.innerHTML = `$${totalBillPP.toFixed(2)}`
    }
}

function tenClick(){
    fiveBtn.classList.remove("active")
    fifteenBtn.classList.remove("active")
    twentyFiveBtn.classList.remove("active")
    fiftyBtn.classList.remove("active")
    tenBtn.classList.add("active")

    if(bill.value && numOfPersons.value === ""){
    }else{
        let tip = 10
        let result = (tip / 100) * bill.value / numOfPersons.value
        tipNum.innerHTML = `$${result.toFixed(2)}`

        let totalBillPP = (bill.value / numOfPersons.value) + result
        totalNum.innerHTML = `$${totalBillPP.toFixed(2)}`
    }
}

function fifteenClick(){
    fiveBtn.classList.remove("active")
    twentyFiveBtn.classList.remove("active")
    fiftyBtn.classList.remove("active")
    tenBtn.classList.remove("active")
    fifteenBtn.classList.add("active")

    if(bill.value && numOfPersons.value === ""){
    }else{
        let tip = 15
        let result = (tip / 100) * bill.value / numOfPersons.value
        tipNum.innerHTML = `$${result.toFixed(2)}`

        let totalBillPP = (bill.value / numOfPersons.value) + result
        totalNum.innerHTML = `$${totalBillPP.toFixed(2)}`
    }
}

function twentyFiveClick(){
    fiveBtn.classList.remove("active")
    fiftyBtn.classList.remove("active")
    tenBtn.classList.remove("active")
    fifteenBtn.classList.remove("active")
    twentyFiveBtn.classList.add("active")

    if(bill.value && numOfPersons.value === ""){
    }else{
        let tip = 25
        let result = (tip / 100) * bill.value / numOfPersons.value
        tipNum.innerHTML = `$${result.toFixed(2)}`

        let totalBillPP = (bill.value / numOfPersons.value) + result
        totalNum.innerHTML = `$${totalBillPP.toFixed(2)}`
    }
}

function fiftyClick(){
    fiveBtn.classList.remove("active")
    tenBtn.classList.remove("active")
    fifteenBtn.classList.remove("active")
    twentyFiveBtn.classList.remove("active")
    fiftyBtn.classList.add("active")

    if(bill.value && numOfPersons.value === ""){
    }else{
        let tip = 50
        let result = (tip / 100) * bill.value / numOfPersons.value
        tipNum.innerHTML = `$${result.toFixed(2)}`

        let totalBillPP = (bill.value / numOfPersons.value) + result
        totalNum.innerHTML = `$${totalBillPP.toFixed(2)}`
    }
}

function customClick(e){
    tenBtn.classList.remove("active")
    fifteenBtn.classList.remove("active")
    twentyFiveBtn.classList.remove("active")
    fiftyBtn.classList.remove("active")
    fiveBtn.classList.remove("active")

    if(bill.value && numOfPersons.value === ""){

    }else{
        if(e.target.value.includes("%")){
            let tip = e.target.value.slice(0, -1)
            let result = (tip / 100) * bill.value / numOfPersons.value
            tipNum.innerHTML = `$${result.toFixed(2)}`
            let totalBillPP = (bill.value / numOfPersons.value) + result
            totalNum.innerHTML = `$${totalBillPP.toFixed(2)}`
        }else{
            let tip = e.target.value
            let result = (tip / 100) * bill.value / numOfPersons.value
            tipNum.innerHTML = `$${result.toFixed(2)}`

            let totalBillPP = (bill.value / numOfPersons.value) + result
            totalNum.innerHTML = `$${totalBillPP.toFixed(2)}`
        }
    }
}

function resetClick(){
    bill.value = ""
    tenBtn.classList.remove("active")
    fifteenBtn.classList.remove("active")
    twentyFiveBtn.classList.remove("active")
    fiftyBtn.classList.remove("active")
    fiveBtn.classList.remove("active")
    custom.value = ""
    numOfPersons.value = ""
    tipNum.innerHTML = "$0.00"
    totalNum.innerHTML = "$0.00"
}