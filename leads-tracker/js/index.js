let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
let leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads",))
let tabBtn = document.getElementById("tab-btn")

if (leadFromLocalStorage) {
    myLeads = leadFromLocalStorage
    render(myLeads)
}


tabBtn.addEventListener("click", function() { 
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

})

function render(leads) {
    let listItem = ""
    for (let i = 0; i < leads.length; i++) {
        listItem +=
            `
    <li>
            <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
            </a>
        </li>
        `

    }
    ulEl.innerHTML = listItem
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})







// myLeads = JSON.stringify(myLeads)

// console.log(typeof myLeads)

// Creating an Element, set textcontent, append to ul
// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)