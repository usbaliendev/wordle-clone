import React from "react";

function Perguntas() {
  return (
    <section className='section section--grey'>
      <div className='container'>
        <div className='faq'>
          <h2>Perguntas Frequentes</h2>
          <ol>
            <li>
              <h3>Quais são as regras do jogo 5Wordly?</h3>
              <p>
                O objetivo principal do jogo é adivinhar a palavra escondida em
                6 tentativas. Em cada linha, você precisa digitar qualquer
                palavra de 4 a 11 letras para descobrir quais letras estão na
                palavra-alvo. Dependendo de qual palavra você digitou, as letras
                serão destacadas em três cores.
                <br />
                <b>Marcação de cor:</b>
                <br />
                <span className='blank'></span>A letra não está na palavra alvo.
                <br />
                <span className='yellow'></span> A letra está na palavra, mas no
                lugar errado.
                <br />
                <span className='green'></span> A letra está na palavra e no
                local correto.
              </p>
              <p>
                Para ganhar, você precisa adivinhar completamente a palavra
                oculta (todas as letras são <span className='green'></span>{" "}
                verdes).
              </p>
            </li>
            <li>
              <h3>Qual é a melhor palavra para começar o jogo?</h3>
              <p>
                No início do jogo, tente usar uma palavra sem repetir letras e
                com o maior número de vogais possível, como a palavra "RADIO".
                Ao inserir as palavras subsequentes, Tente usar novas letras
                para encontrar o maior número possível de pistas.
              </p>
            </li>
            <li>
              <h3>Qual dicionário você está usando?</h3>
              <p>
                Para o Inglês estou utilizando uma biblioteca de palavras de 5
                letras geradas com um script python bem rápido, que inclui uma
                lista de ~10.422 palavras.
              </p>
            </li>
            <li>
              <h3>Como alterar a letra inserida?</h3>
              <p>
                Se você quiser alterar uma letra digitada incorretamente, basta
                pressionar o botão "Backspace", mas lembre-se de que você não
                pode alterar a palavra digitada.
              </p>
            </li>
            <li>
              <h3>Posso jogar em diferentes idiomas?</h3>
              <p>
                Estarei desenvolvendo mais versões do jogo para diferentes
                idiomas e dicionários. Por agora você pode jogar em inglês.
              </p>
            </li>
            <li>
              <h3>O jogo me parece fácil. Posso dificultar?</h3>
              <p>
                Em breve adicionarei um modo hard(difícil) para tornar o jogo
                mais difícil nas configurações.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Perguntas;
