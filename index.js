let count = 0
let totall = 0
let countEl = document.getElementById("counter-el")
let saveEl = document.getElementById("save-el")
let totalCash = document.getElementById("pare")

function increment(){
    count += 1
    countEl.textContent=count
    total()
}

function total(){
    totall += 3

}

function save(){
    let message = count + " - "
    saveEl.textContent+=message
    count=0
    countEl.textContent=count
    totalCash.textContent="Total: "+ totall+ " $"
}

