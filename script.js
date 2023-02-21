// 5:16:30
myLeads = ['darknesss', 'imprisioning me', 'all that i see','absolute horror']
const inputBtn = document.querySelector("#input-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
const divEx = document.querySelector("#container-exercicio")
const h3El= document.querySelector("#h3-el")

inputBtn.addEventListener("click", function(){
  console.log(inputEl.value)
  myLeads.push(inputEl.value)
  console.log(myLeads)
  ulEl.innerHTML += '<li>'+inputEl.value+'</li>'
})

for (let i = 0; i < myLeads.length; i++) {
  ulEl.innerHTML += '<li>'+myLeads[i]+'</li>'
}

divEx.innerHTML = '<button>Compre Já</button>'
h3El.innerHTML = '<p>Obrigado por comprar volte sempre</p>'