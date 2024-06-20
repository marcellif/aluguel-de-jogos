function alterarStatus(id){
    let jogoSelecionado = document.getElementById(`game-${id}`);
    
    let imagem = jogoSelecionado.querySelector('.dashboard__item__img');
    let botao = jogoSelecionado.querySelector('.dashboard__item__button');
    let textoJogo = jogoSelecionado.querySelector('.dashboard__item__name');
    alert (textoJogo.textContent);
    
    if (jogoSelecionado.classList.contains('dashboard__item__button')){
        selecionarBotao()
    }else{
        desselecionaBotao();
    }
}

function selecionarBotao (){
    botao.classList.remove('dashboard__item__button');
    botao.classList.add('dashboard__item__button dashboard__item__button--return')

}

function desselecionaBotao(){
    botao.classList.remove('dashboard__item__button dashboard__item__button--return');
    botao.classList.add('dashboard__item__button')
}