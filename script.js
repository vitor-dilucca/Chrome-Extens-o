// 5:16:30
myLeads = []
const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
const divEx = document.querySelector("#container-exercicio")
const h3El = document.querySelector("#h3-el")

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  inputEl.value = ''
  renderLeads()
})

function renderLeads() {
  let listItems = ''
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
      <a target="blank" href="${myLeads[i]}">
        ${myLeads[i]}
      </a>
    </li>
    `
  }
  ulEl.innerHTML = listItems
}

// divEx.innerHTML = '<button>Compre Já</button>'
// h3El.innerHTML = '<p>Obrigado por comprar volte sempre</p>'