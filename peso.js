//Cria referência ao form e elementos de reposta do programa

const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//cria um ouvinte

form.addEventListe("submit",(e) =>{
e.preventDefault()              //evita o envio do form

const nome = form.inNome.Value           //obtém o nome
const Sexo = Number(form.in.value) //obtém a primeira nota
const Altura = Number(form.inAltura.value) //obtém a segunda nota

const media = (nota1 + nota2)/2          //média das notas
resp1.innerText = `Média das Notas ${media.tofixed(2)}`

//Cria as condicionais
if(media >= 7){
    resp2.innerText= `Parabéns ${nome}! Você foi aprovado(a)`
    resp2.style.color= "blue"
}else if(media >=4){
    resp2.innerText= `Atenção ${nome}! Você está de exame`
    resp2.style.color= "green"
}else{
    resp2.innerText= `Ops ${nome}! Você foi reprovado(a)`
    resp2.style.color= "red"
}
})
