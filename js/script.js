// Mario (Elemento classe mario)
const mario = document.querySelector('.mario');
//Obstáculo (Pipe)
const pipe = document.querySelector('.pipe');

// Função
const marioJump = () => {
    // Adiciona a classe mario-jump ao elemento mario
    mario.classList.add('mario-jump');

    // Após o tempo da animação (500ms), remove a classe mario-jump (Para permitir reacionamento)
    setTimeout( 
        // Função anônima
        () => {
            mario.classList.remove('mario-jump')
        }
        , 500
    )
}
// Loop para verificar se o jogo foi perdido
const loop = setInterval(
    // Função anônima
    () => {
        // Armazenamento da posição (deslocamento esquerdo) do obstáculo
        const pipePosition = pipe.offsetLeft;
        // Armazenamento da posição vertical (deslocamento inferior) mario | obtém o atributo bottom do elemento mario, retira a parte textual e o converte (+) em número
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

        // Quando o obstáculo tocar no Mario pela horizontal ou pela vertical (distância esquerda > 0 e <= 120px E altura do Mario < 90px)
        if (pipePosition <= 120 && marioPosition < 90) {
            // Para a animação do obstáculo
            pipe.style.animation = 'none';
            // Mantém o objeto na posição de colisão
            pipe.style.left = `${pipePosition}px`;
            // Para a animação do Mario
            mario.style.animation = 'none';
            // Mantém o Mario na posição de colisão
            mario.style.bottom = `${marioPosition}px`;
            // Muda a imagem do Mario (acessando o atributo src) para a imagem de Game Over com tamanho menor (adequado) e margem menor
            mario.src = './images/mario-game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '40px';

            clearInterval(loop); //Para o loop
        }
    }
    , 10
)

//Ao pressionar qualquer tecla, executa a função marioJump
document.addEventListener('keydown', marioJump); 