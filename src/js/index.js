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
    imagemAtual = imagemAtual - 1;
});

setaAvancar.addEventListener("click", ()=> {        
    if(imagemAtual >= maxImagens - 1) {         
        setaAvancar.classList.add("esconder-setas");
        return
    }else{
        setaAvancar.classList.remove("esconder-setas");        
        moverImagensClientes();
    }
    imagemAtual = imagemAtual + 1;
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
        console.log(indice);
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        
        const itemAtivo = document.querySelector('.ativo');
        itemAtivo.classList.remove('ativo');

        const trajetoriaAtiva = document.querySelector('.ativa');
        trajetoriaAtiva.classList.remove('ativa');

        botaoBaixo[indice].classList.toggle('ativo');
        botao.classList.toggle('selecionado')
        textoTrajetoria[indice].classList.toggle('ativa');

    });

});

botaoBaixo.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        console.log(indice);
        const botaoSelecionado = document.querySelector('.ativo')
        botaoSelecionado.classList.remove('ativo');
        
        const itemAtivo = document.querySelector('.selecionado');
        itemAtivo.classList.remove('selecionado');

        const trajetoriaAtiva = document.querySelector('.ativa');
        trajetoriaAtiva.classList.remove('ativa');

        botaoAno[indice].classList.toggle('selecionado');
        botao.classList.toggle('ativo')

        textoTrajetoria[indice].classList.toggle('ativa');

    });

});