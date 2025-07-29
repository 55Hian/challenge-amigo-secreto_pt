//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

var nomes = [];
var listAmigos = document.getElementById("listaAmigos");
var resultado = document.getElementById("resultado");


function adicionarAmigo(){
    nomeAmigo = document.getElementById("amigo").value;

    if(!nomeAmigo){
        alert("Digite um nome valido");
        return
    }

    nomes.push(nomeAmigo)

    console.log(`tamanho array: ${nomes.length}, conteudo: ${nomes}`)
    limparCampoNome()
    mostrarNomeAmigos()
    return
}

function sortearAmigo(){

    amigoSorteadoIndex = parseInt(Math.random() * nomes.length)   
    resultado.innerHTML = `<li> O amigo sorteado foi: ${nomes[amigoSorteadoIndex]} </li>`

}

function mostrarNomeAmigos(){
    limparCampoAmigos()

    for (let nome of nomes){
        let elementoAmigo = document.createElement("li");
        elementoAmigo.textContent = nome;
        elementoAmigo.classList.add("nomeAmigo")
        listAmigos.appendChild(elementoAmigo)
    }
}

function limparCampoNome(){
    document.getElementById("amigo").value = ""
}

function limparCampoAmigos(){
    let amigos = Array.from(document.getElementsByClassName("nomeAmigo"));

    for(let amigo of amigos){
        listAmigos.removeChild(amigo)
    }

}