import React from "react";

function HTPModals() {
  return (
    <div class='modal_info-wrapper'>
      <div class='mini_modal active' id='modal_info'>
        <div class='top'>Como jogar</div>

        <div class='data'>
          <div class='cont'>
            <div class='info'>
              <div class='text'>
                Você tem que adivinhar a palavra escondida em 6 tentativas e a
                cor das letras muda para mostrar o quão perto você está.
                <br />
              </div>

              <div class='text'>
                Para iniciar o jogo, basta digitar qualquer palavra, por
                exemplo:
              </div>

              <div class='word flex'>
                <div class='letter green_letter'>J</div>
                <div class='letter'>U</div>
                <div class='letter yellow_letter'>R</div>
                <div class='letter yellow_letter'>O</div>
                <div class='letter'>S</div>
              </div>

              <div class='text text-tiles'>
                <b class='grey_text'>U</b> , <b class='grey_text'>S</b> não está
                na palavra alvo.
                <br />
                <b class='yellow_text'>R</b> , <b class='yellow_text'>O</b> está
                na palavra, mas no lugar errado.
                <br />
                <b class='green_text'>J</b> está na palavra e no lugar correto.
                <br />
              </div>
              <div class='text'>
                Outra tentativa de encontrar letras correspondentes na palavra
                alvo.
              </div>

              <div class='word flex'>
                <div class='letter'>L</div>
                <div class='letter'>U</div>
                <div class='letter green_letter'>G</div>
                <div class='letter green_letter'>A</div>
                <div class='letter green_letter'>R</div>
              </div>

              <div class='text'>Tão perto!</div>

              <div class='word flex'>
                <div class='letter green_letter'>J</div>
                <div class='letter green_letter'>O</div>
                <div class='letter green_letter'>G</div>
                <div class='letter green_letter'>A</div>
                <div class='letter green_letter'>R</div>
              </div>

              <div class='text'>
                <b>Palavra adivinhada! 🏆</b>
              </div>
            </div>
          </div>
        </div>

        <button type='button' class='close'></button>
      </div>
    </div>
  );
}

export default HTPModals;
