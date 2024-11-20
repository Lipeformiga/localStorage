const nomeSalvo = localStorage.getItem("nome");
const bemvindo = document.getElementById("bemvindo")
const botao = document.getElementById("btn")
const escuro = document.getElementById("escuro")

let p

if(nomeSalvo){

    p = document.createElement("p")

    let contagem = parseInt(localStorage.getItem("contador"));
    if (isNaN(contagem) || contagem == null) {
        contagem = 0
    }
    contagem++
    localStorage.setItem("contador", contagem)

    p.innerText = `Bem vindo ${nomeSalvo} você visitou a página ${contagem} vezes`
    p.className = "text-black text-4xl flex h-screen justify-center items-center"
    bemvindo.appendChild(p)
    
} else {
    let nomePessoa = prompt("digite seu nome: ")

    localStorage.setItem("nome", nomePessoa)
}





botao.addEventListener("click", () => {
    localStorage.clear()
})
if(localStorage.getItem("tema") == null){
    localStorage.setItem("tema","branco")

}

verificaTema()
escuro.addEventListener("click", () => {
    

    if(localStorage.getItem("tema") == "branco"){
        console.log("teste")
        
        document.body.className = "bg-black"
        if (p){
            document.body.className = "bg-black"
            p.className = "text-white text-4xl flex h-screen justify-center items-center";
        }
        localStorage.setItem("tema","preto")
        
    } else{
        
        document.body.className = "bg-white"
        if(p){
            document.body.className = "bg-white"
            p.className = "text-black text-4xl flex h-screen justify-center items-center";
        }
        localStorage.setItem("tema","branco")
    }
    
})

function verificaTema(){
    if(localStorage.getItem("tema") == "branco"){
        document.body.className = "bg-white"
        p.className = "text-black text-4xl flex h-screen justify-center items-center";
    } else{
        document.body.className = "bg-black"
        p.className = "text-white text-4xl flex h-screen justify-center items-center";
    }
}