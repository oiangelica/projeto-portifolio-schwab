const setaAvancar = document.getElementById("seta-avancar");
const setaVoltar = document.getElementById("seta-voltar");
const imagensMarcas = document.querySelectorAll(".marca-cliente");
const maxImagens = imagensMarcas.length;
const botaoAno = document.querySelectorAll(".botao-ano");
const botaoBaixo = document.querySelectorAll(".botao");
const textoTrajetoria = document.getElementsByClassName('trajetoria-texto');
let imagemAtual = 0;
let indiceTextoAtivo = 0;

//  Carrossel de marcas clientes
setaVoltar.addEventListener("click", ()=>{       
    if (imagemAtual <= 0) {
        setaVoltar.classList.add("esconder-setas");
        return        
    }        
    else {
        setaVoltar.classList.remove("esconder-setas");
        moverImagensClientes();
    }
    imagemAtual = imagemAtual - 2;
});

setaAvancar.addEventListener("click", ()=> {        
    if(imagemAtual >= maxImagens -1) {         
        setaAvancar.classList.add("esconder-setas");
        return
    }else{
        setaAvancar.classList.remove("esconder-setas");        
        moverImagensClientes();
    }
    imagemAtual = imagemAtual + 2;
});

function moverImagensClientes(){
    imagensMarcas.forEach((imagem) => imagem.classList.remove("imagem-atual"));
    imagensMarcas[imagemAtual].scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest"
    }); 
}

//          ----> CARROSSEL TRAGETÓRIA <-----
botaoAno.forEach((botao, indice) => {
    botao.addEventListener('click', () => {         
        PercorrerOsAnos(indice);
    });
});

botaoBaixo.forEach((botao, indice) => {
    botao.addEventListener('click', () => {    
        PercorrerOsAnos(indice);
    });
});

function mostrarTextoTragetória(indice) {
    textoTrajetoria[indice].classList.add('ativa');
 }

function selecionarBotaoAno (botao) {
    botao.classList.add('selecionado');
}

function selecionarBotaoBaixo(botao) {
    botao.classList.add('selecionado');
}

function esconderTextoTragetória (){
    const textoAtivo = document.querySelector('.ativa')
    textoAtivo.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
 }

 function PercorrerOsAnos(novoIndice) {  
    desativarBotaoSelecionado();  
    selecionarBotaoAno(botaoAno[novoIndice]);
    selecionarBotaoBaixo(botaoBaixo[novoIndice]);
    esconderTextoTragetória();
    mostrarTextoTragetória(novoIndice);
    indiceTextoAtivo = novoIndice;
 }