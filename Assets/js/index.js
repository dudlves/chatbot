document.getElementById("id");
function iniciar(){
    let passo1 = document.createElement("div")
    passo1.innerHTML= 'Olá Tudo Bem?'
    passo1.setAttribute("class", "passo")

    let passo2 = document.createElement("div")
    passo2.innerHTML= "Abaixo são as principais perguntas para selecionar uma digite o número que á corresponder:"
    passo2.setAttribute("class", "passo")
    

    let passo3 = document.createElement("div")
    passo3.innerHTML= '1- Qual e a primeira regra do verbo ING?:: 2-Qual a segunda regra do verbo ING?:: 3-Qual a terceira regra do verbo ING?:: 4-Qual a quarta regra do verbo ING?:: 5-Qual a quinta regra do verbo ING?' 
    passo3.setAttribute("class", "passo")

    document.getElementById('mensagem').appendChild(passo1)
    document.getElementById('mensagem').appendChild(passo2)
    document.getElementById('mensagem').appendChild(passo3)
}

   document.getElementById('replay').addEventListener("click", async(e)=>{
       e.preventDefault()

       let req = document.getElementById('msgenviar').value;
       for (key in database) {
        if (key == req) {
            let perguntas = document.createElement("div")
            perguntas.innerHTML = req;
            perguntas.setAttribute("class", "passo");
            document.getElementById('mensagem').appendChild(Perguntas);
    
            let resposta = document.createElement("div");
            resposta.innerHTML = database[key];
            resposta.setAttribute("class", "passo1");
            document.getElementById('mensagem').appendChild(Resposta); 

            document.getElementById('msgenviar').value = "";
        }  else {
            document.getElementById('msgenviar').value = "";
        }
    }
});
