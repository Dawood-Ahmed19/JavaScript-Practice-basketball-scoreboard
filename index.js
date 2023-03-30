let myLeads = [];
const inputEl = document.getElementById("input-el");
const myBtn = document.getElementById("btn");
const ulEl = document.getElementById("ul-el");
let linksFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn");

if (linksFromLocalStorage) {
    myLeads = linksFromLocalStorage
    renderLead()
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    renderLead()
})

myBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    renderLead();
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
})

function renderLead() {

    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li>${myLeads[i]}</li>`
    }
    ulEl.innerHTML = listItems
}