const setaAvancar = document.getElementById("seta-avancar");
const setaVoltar = document.getElementById("seta-voltar");
const imagensMarcas = document.querySelectorAll(".marca-cliente");
const maxImagens = imagensMarcas.length;

const botaoAno = document.querySelectorAll(".botao-ano");
const botaoBaixo = document.querySelectorAll(".botao");
const textoTrajetoria = document.getElementsByClassName('trajetoria-texto');
let imagemAtual = 0;
let indiceTextoAtivo = 0;

const carrosselClientes = document.querySelector('.imagens-carrossel');
var isMouseDown = false;
var startX;
var scrollLeft;

// ----> Carrossel de marcas clientes <-----
setaVoltar.addEventListener("click", ()=>{
    imagemAtual--;
    moverImagensClientes(); 

    if (imagemAtual === 0) {
        setaVoltar.classList.add("esconder-setas");
        return;            
    }
    if (imagemAtual < maxImagens){
        setaAvancar.classList.remove("esconder-setas");
    }   
});

setaAvancar.addEventListener("click", ()=> { 
    imagemAtual++;   
    moverImagensClientes();
    if(imagemAtual >= 0 ){
        setaVoltar.classList.remove("esconder-setas");
    }
    if (imagemAtual + 1 >= maxImagens) {
        setaAvancar.classList.add("esconder-setas"); 
    } 
    
});

function moverImagensClientes() {
    const actualImage = document.querySelector('.imagem-atual');
    actualImage.classList.remove("imagem-atual");
   
    imagensMarcas[imagemAtual].classList.toggle("imagem-atual");     
    imagensMarcas[imagemAtual].scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest"
    }); 
}

//  ----> scrollar arrastando o mouse <-----
carrosselClientes.addEventListener('mousedown', function (e) {
    isMouseDown = true;
    startX = e.pageX - carrosselClientes.offsetLeft;
    scrollLeft = carrosselClientes.scrollLeft;
  });
  
  carrosselClientes.addEventListener('mouseleave', function () {
    isMouseDown = false;
  });
  
  carrosselClientes.addEventListener('mouseup', function () {
    isMouseDown = false;
  });
  
  carrosselClientes.addEventListener('mousemove', function (e) {
    if (!isMouseDown) return;
    e.preventDefault();
    var x = e.pageX - carrosselClientes.offsetLeft;
    var walk = (x - startX) * 1;
  
    carrosselClientes.scrollLeft = scrollLeft - walk;
  });

//          ----> CARROSSEL TRAGETÓRIA <-----
botaoAno.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
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