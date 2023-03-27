let myLeads = [];
const inputEl = document.getElementById("input-el");
const myBtn = document.getElementById("btn");
const ulEl = document.getElementById("ul-el");
let linksFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (linksFromLocalStorage) {
    myLeads = linksFromLocalStorage
    renderLead()
}

myBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    renderLead();
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
})

function renderLead() {

    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a target='_blank' href='${myLeads[i]}'> ${myLeads[i]}</a></li>`
    }
    ulEl.innerHTML = listItems
}

