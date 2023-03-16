myLeads = []
const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
const divEx = document.querySelector("#container-exercicio")
const h3El = document.querySelector("#h3-el")
const clearBtn = document.querySelector("#clear-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.querySelector("#tab-btn")

oldLeads = []

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

tabBtn.addEventListener("click", () => {
  chrome.tabs.query({active:true, currentWindow:true}, tabs=>{
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })
})

inputBtn.addEventListener("click", function () {
  //insere o q for escrito no input dentro do array myLeads
  myLeads.push(inputEl.value)
  inputEl.value = ''
  //transforma o array myLeads em uma string "myLeads" e insere dentro do localStorage
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  //printa o conteudo do array myLeads
  render(myLeads)
  //da console.log da string "myLeads"
  console.log(localStorage.getItem("myLeads"))
})

clearBtn.addEventListener("dblclick", () => {
  localStorage.clear()
  myLeads = []
  ulEl.innerHTML = ''
})

function render(leads) {
  let listItems = ''
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
      <a target="blank" href="${leads[i]}">
        ${leads[i]}
      </a>
    </li>
    `
  }
  ulEl.innerHTML = listItems
}