//Cria referência ao form e elementos de reposta do programa
const form = document.querySelector("form")
const resp = document.querySelector("h3")

//ouvinte
form.addEventListe("submit",(e) =>{
e.preventDefault()             

const nome = form.inNome.value
const masculino = form.inMasculino.checked
const altura = Number(form.inAltura.value)
alert("lknlknlkn")

//calculando o peso ideal
let peso
 if (masculino) {
    peso = 22 * Math.pow(altura, 2)
 } else {
    peso = 21 * Math.pow(altura, 2)
 }
 //apreenta a resposta
 resp.innerText = `${nome} seu peso ideal é: ${peso.toFixed(3)}kg`
})
//segundo ouvinte. limpa o conteudo de h3

form.addEventListener("reset", (e) => {
   resp.innerText = " "     //limpa o conteudo de h3
})
