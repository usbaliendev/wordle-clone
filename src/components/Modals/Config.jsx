import React from "react";

function Config() {
  return (
    <div className='mini_modal active' id='modal_settings'>
      <div className='top'>Configurações</div>
      <div className='data'>
        <div className='cont'>
          <div>
            <div className='main_title center'>Número de Letras</div>
            <div className='numbers flex'>
              <div className='number_checkbox'>
                <label className='label_check'>
                  <input
                    type='radio'
                    name='numbers'
                    autoComplete='off'
                    value='4'
                  />
                  <span className='check_text'>4</span>
                </label>
              </div>
              <div className='number_checkbox'>
                <label className='label_check'>
                  <input
                    type='radio'
                    name='numbers'
                    autoComplete='off'
                    value='5'
                    checked=''
                  />
                  <span className='check_text'>5</span>
                </label>
              </div>
              <div className='number_checkbox'>
                <label className='label_check'>
                  <input
                    type='radio'
                    name='numbers'
                    autoComplete='off'
                    value='6'
                  />
                  <span className='check_text'>6</span>
                </label>
              </div>
              <div className='number_checkbox'>
                <label className='label_check'>
                  <input
                    type='radio'
                    name='numbers'
                    autoComplete='off'
                    value='7'
                  />
                  <span className='check_text'>7</span>
                </label>
              </div>
              <div className='number_checkbox'>
                <label className='label_check'>
                  <input
                    type='radio'
                    name='numbers'
                    autoComplete='off'
                    value='8'
                  />
                  <span className='check_text'>8</span>
                </label>
              </div>
              <div className='number_checkbox'>
                <label className='label_check'>
                  <input
                    type='radio'
                    name='numbers'
                    autoComplete='off'
                    value='9'
                  />
                  <span className='check_text'>9</span>
                </label>
              </div>
              <div className='number_checkbox'>
                <label className='label_check'>
                  <input
                    type='radio'
                    name='numbers'
                    autoComplete='off'
                    value='10'
                  />
                  <span className='check_text'>10</span>
                </label>
              </div>
              <div className='number_checkbox'>
                <label className='label_check'>
                  <input
                    type='radio'
                    name='numbers'
                    autoComplete='off'
                    value='11'
                  />
                  <span className='check_text'>11</span>
                </label>
              </div>
            </div>
            <hr />
          </div>
          <div className='main_title toggle'>Modo difícil</div>
          <div className='main_desc toggle'>
            Quaisquer dicas reveladas devem ser usadas em suposições
            subsequentes
          </div>
          <div className='checkbox'>
            <label className='label_check'>
              <input type='checkbox' autoComplete='off' />
              <span className='check_text'></span>
            </label>
          </div>
          <hr />
          <div className='main_title toggle'>Modo diário</div>
          <div className='main_desc toggle'>
            Adivinhe uma cadeia de palavras de 4 a 11 letras a cada 24 horas
          </div>
          <br />
          <div className='main_desc toggle'>
            Atualização da próxima palavra em{" "}
            <b className='countdown'>01:15:17</b>
          </div>
          <div className='checkbox'>
            <label className='label_check'>
              <input type='checkbox' autoComplete='off' />
              <span className='check_text'></span>
            </label>
          </div>
          <hr />
          <div className='main_title toggle'>Modo escuro</div>
          <div className='main_desc toggle'>Alterar o modo escuro e claro</div>
          <div className='checkbox'>
            <label className='label_check'>
              <input type='checkbox' name='dark_mode' autoComplete='off' />
              <span className='check_text'></span>
            </label>
          </div>
          <hr />
          <div className='main_title toggle'>Modo daltônico</div>
          <div className='main_desc toggle'>Cores de alto contraste</div>
          <div className='checkbox'>
            <label className='label_check'>
              <input
                type='checkbox'
                name='color_blind_mode'
                autoComplete='off'
              />
              <span className='check_text'></span>
            </label>
          </div>
          <hr />
          <div className='main_title toggle'>Dicas de letras</div>
          <div className='main_desc toggle'>
            Dica acima da letra que aparece duas vezes ou mais na palavra oculta
          </div>
          <div className='checkbox'>
            <label className='label_check'>
              <input type='checkbox' autoComplete='off' />
              <span className='check_text'></span>
            </label>
          </div>
          <hr />
          <div className='main_title toggle'>Animação de confete</div>
          <div className='main_desc toggle'>
            Animação de confete quando o jogo é ganho
          </div>
          <div className='checkbox'>
            <label className='label_check'>
              <input type='checkbox' name='confetti_mode' autoComplete='off' />
              <span className='check_text'></span>
            </label>
          </div>
          <hr />
          <div className='main_title toggle'>Trocar botões</div>
          <div className='main_desc toggle'>
            Troque os botões “Enter” e “Retrocesso”
          </div>
          <div className='checkbox'>
            <label className='label_check'>
              <input type='checkbox' autoComplete='off' />
              <span className='check_text'></span>
            </label>
          </div>
        </div>
      </div>
      <button type='button' className='close'></button>
    </div>
  );
}

export default Config;
