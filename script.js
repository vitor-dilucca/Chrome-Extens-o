// 5:16:30

const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
const divEx = document.querySelector("#container-exercicio")
const h3El = document.querySelector("#h3-el")

myLeads = []
// myLeads=JSON.parse(myLeads)
// myLeads.push("www.imprisoningme.com")
// myLeads=JSON.stringify(myLeads)
// console.log(myLeads)

// localStorage.setItem("myLeads","www.darkness.com")
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear()
// console.log(localStorage.getItem("myLeads"))

inputBtn.addEventListener("click", function () {
  //insere o q for escrito no input dentro do array myLeads
  myLeads.push(inputEl.value)
  inputEl.value = ''
  //transforma o array myLeads em uma string "myLeads" e insere dentro do localStorage
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  //printa o conteudo do array myLeads
  renderLeads()
  //da console.log da string "myLeads"
  console.log(localStorage.getItem("myLeads"))
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