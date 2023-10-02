//Cria referência ao form e elementos de reposta do programa
const form = document.querySelector("form")
const resp = document.querySelector("h3")

//ouvinte
form.addEventListe("submit",(e) =>{
e.preventDefault()             

const nome = form.InNome.value
const masculino = form.InMasculino.checked
const altura = Number(form.inAltura.value)

//calculando o peso ideal
let peso
 if (masculino) {
    peso = 22 * Math.pow
 }
})
