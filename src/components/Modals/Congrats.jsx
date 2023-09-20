import React from "react";

function Congrats() {
  return (
    <div class='modal_finish poof active' style='height: auto !important;'>
      <div class='top '>Você Ganhou! 🏆</div>
      <div class='data'>
        <div class='cont' style='height: auto !important;'>
          <div class='desc' style='display: none;'>
            A resposta foi:
          </div>
          <div class='word' style='display: none;'>
            <span>certo</span>
          </div>
          <a
            class='definition'
            href='/dictionary?q=certo+definição'
            target='_blank'
            style='display: none;'>
            O que essa palavra significa?
          </a>
          <div class='restart_btn'>
            <button type='button'>Reiniciar</button>
          </div>
          <div class='or_text'>ou pressione Enter para jogar novamente</div>
          <div class='block_share'>
            <div>
              <div class='share_btn'>
                <button type='button'>
                  <svg class='icon'>
                    <use href='/assets/img/spritesvg.svg?v43.11#ic_share'></use>
                  </svg>
                  Compartilhe seu resultado!
                </button>
              </div>
              <div class='links flex'>
                <a
                  class='twitter_btn'
                  href='https://www.twitter.com/share?url=https://wordlegame.org/pt&amp;text=Adivinhei%20esta%20palavra%20portuguesa%20de%205%20letras%20em%204%2F6%20tentativas.%20%0A%0A%F0%9F%9F%A8%F0%9F%9F%A8%F0%9F%9F%A8%E2%AC%9B%E2%AC%9B%0A%F0%9F%9F%A8%F0%9F%9F%A9%F0%9F%9F%A8%E2%AC%9B%F0%9F%9F%A9%0A%F0%9F%9F%A9%F0%9F%9F%A9%F0%9F%9F%A8%F0%9F%9F%A8%F0%9F%9F%A9%0A%F0%9F%9F%A9%F0%9F%9F%A9%F0%9F%9F%A9%F0%9F%9F%A9%F0%9F%9F%A9%0A%0AVoc%C3%AA%20consegue%20adivinhar%20essa%20palavra%3F%20%0Ahttps%3A%2F%2Fwordlegame.org%2Fpt%3Fchallenge%3DY2VydG8'
                  target='blank'>
                  Twitter
                </a>
                <a
                  class='facebook_btn'
                  href='https://www.facebook.com/sharer/sharer.php?u=https://wordlegame.org/pt'
                  target='blank'>
                  Facebook
                </a>
                <a
                  class='whatsapp_btn'
                  href='https://api.whatsapp.com/send?text=Adivinhei%20esta%20palavra%20portuguesa%20de%205%20letras%20em%204%2F6%20tentativas.%20%0A%0A%F0%9F%9F%A8%F0%9F%9F%A8%F0%9F%9F%A8%E2%AC%9B%E2%AC%9B%0A%F0%9F%9F%A8%F0%9F%9F%A9%F0%9F%9F%A8%E2%AC%9B%F0%9F%9F%A9%0A%F0%9F%9F%A9%F0%9F%9F%A9%F0%9F%9F%A8%F0%9F%9F%A8%F0%9F%9F%A9%0A%F0%9F%9F%A9%F0%9F%9F%A9%F0%9F%9F%A9%F0%9F%9F%A9%F0%9F%9F%A9%0A%0AVoc%C3%AA%20consegue%20adivinhar%20essa%20palavra%3F%20%0Ahttps%3A%2F%2Fwordlegame.org%2Fpt%3Fchallenge%3DY2VydG8'
                  target='blank'>
                  WhatsApp
                </a>
                <a
                  class='reddit_btn'
                  href='https://www.reddit.com/submit?url=https://wordlegame.org/pt&amp;title=Adivinhei%20esta%20palavra%20portuguesa%20de%205%20letras%20em%204%2F6%20tentativas.%20%0A%0A%F0%9F%9F%A8%F0%9F%9F%A8%F0%9F%9F%A8%E2%AC%9B%E2%AC%9B%0A%F0%9F%9F%A8%F0%9F%9F%A9%F0%9F%9F%A8%E2%AC%9B%F0%9F%9F%A9%0A%F0%9F%9F%A9%F0%9F%9F%A9%F0%9F%9F%A8%F0%9F%9F%A8%F0%9F%9F%A9%0A%F0%9F%9F%A9%F0%9F%9F%A9%F0%9F%9F%A9%F0%9F%9F%A9%F0%9F%9F%A9%0A%0AVoc%C3%AA%20consegue%20adivinhar%20essa%20palavra%3F%20%0Ahttps%3A%2F%2Fwordlegame.org%2Fpt%3Fchallenge%3DY2VydG8'
                  target='blank'>
                  Reddit
                </a>
              </div>
            </div>
          </div>
          <div class='link'>
            <a href='javascript:void(0)'>
              <svg class='icon'>
                <use href='/assets/img/spritesvg.svg?v43.11#ic_puzzle'></use>
              </svg>
              Copie o quebra-cabeça com emojis
            </a>
          </div>
          <div class='link'>
            <a href='javascript:void(0)'>
              <svg class='icon'>
                <use href='/assets/img/spritesvg.svg?v43.11#ic_link'></use>
              </svg>
              Copiar link para esta palavra
            </a>
          </div>
          <div class='link'>
            <a href='javascript:void(0)' class='download-screenshot'>
              <svg class='icon icon-download'>
                <use href='/assets/img/spritesvg.svg?v43.11#ic_download'></use>
              </svg>
              Baixar imagem do quebra-cabeça
            </a>
          </div>
          <div class='desc ads'>Publicidade</div>
          {/* <ins
            class=' adsbygoogle'
            data-ad-client='ca-pub-7958472158675518'
            data-ad-slot='7226893253'
            data-ad-layout=''
            data-ad-layout-key=''
            data-ad-format='auto'
            data-full-width-responsive='false'
            style='width: 320px; height: 250px; display: inline-block;'
            data-adsbygoogle-status='done'
            data-ad-status='filled'>
            <div
              id='aswift_5_host'
              tabIndex='0'
              title='Advertisement'
              aria-label='Advertisement'
              style='border: none; height: 250px; width: 320px; margin: 0px; padding: 0px; position: relative; visibility: visible; background-color: transparent; display: inline-block; overflow: visible;'>
              <iframe
                id='aswift_5'
                name='aswift_5'
                style='left:0;position:absolute;top:0;border:0;width:320px;height:250px;'
                sandbox='allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation'
                width='320'
                height='250'
                frameBorder='0'
                marginWidth='0'
                marginHeight='0'
                vpace='0'
                hspace='0'
                allowtransparency='true'
                scrolling='no'
                src='https://googleads.g.doubleclick.net/pagead/ads?client=ca-pub-7958472158675518&amp;output=html&amp;h=250&amp;slotname=7226893253&amp;adk=1712747381&amp;adf=2548539772&amp;pi=t.ma~as.7226893253&amp;w=320&amp;fwrn=1&amp;fwrnh=100&amp;lmt=1695173873&amp;rafmt=1&amp;format=320x250&amp;url=https%3A%2F%2Fwordlegame.org%2Fpt&amp;fwr=0&amp;fwrattr=false&amp;rh=100&amp;rw=320&amp;rpe=1&amp;resp_fmts=3&amp;wgl=1&amp;uach=WyJXaW5kb3dzIiwiMTQuMC4wIiwieDg2IiwiIiwiMTAyLjAuNDg4MC41NSIsW10sMCxudWxsLCI2NCIsW1siQ2hyb21pdW0iLCIxMTYuMC41ODQ1LjE4MCJdLFsiTm90KUE7QnJhbmQiLCIyNC4wLjAuMCJdLFsiT3BlcmEgR1giLCIxMDIuMC40ODgwLjU1Il1dLDBd&amp;dt=1695173873624&amp;bpp=17&amp;bdt=M&amp;idt=20&amp;shv=r20230918&amp;mjsv=m202309140101&amp;ptt=9&amp;saldr=aa&amp;abxe=1&amp;cookie=ID%3D5c76460974bd2842-22ccc82cfbe30050%3AT%3D1695146667%3ART%3D1695164948%3AS%3DALNI_MZrprIT94aUUjjX7m-nJJG4VK0N9w&amp;gpic=UID%3D000009ca28359fa1%3AT%3D1695146667%3ART%3D1695164948%3AS%3DALNI_ManWZHd2ceidQMiZ4PBvb3bpaY90A&amp;prev_fmts=0x0%2C728x90%2C728x90%2C728x90%2C728x90&amp;nras=1&amp;correlator=8623384675953&amp;frm=20&amp;pv=1&amp;ga_vid=597629965.1695146666&amp;ga_sid=1695149473&amp;ga_hid=1315098908&amp;ga_fc=1&amp;u_tz=-180&amp;u_his=5&amp;u_h=1080&amp;u_w=1920&amp;u_ah=1048&amp;u_aw=1920&amp;u_cd=24&amp;u_sd=1&amp;dmc=8&amp;adx=451&amp;ady=307&amp;biw=902&amp;bih=935&amp;scr_x=0&amp;scr_y=0&amp;eid=44759876%2C44759837%2C44759927%2C31077703&amp;oid=2&amp;psts=AOrYGsnSI_iVdxtE1jExymLss0H4dyKxeHthZmQGvFHkcs5IoSwxGeIXHbA_komjzMj3qNcYJkOdRKR64tXesg%2CAOrYGskHa_IqYXo_-ZceL2euSSZUuzug7-XD4MDgNWtxRoE3uON_LYS5vehUXbpnMMK3CCeqR61qY6L8buuU3HE%2CAOrYGslXU8AS2fkRpqwpbmvHbzRNvQVpoEveTQleXbPfohqofaLjUqaqBH2XZcfV6X41y9mSi4fyCFYqsenHjg&amp;pvsid=4370128294034332&amp;tmod=592214044&amp;uas=3&amp;nvt=1&amp;ref=https%3A%2F%2Fwordlegame.org%2F&amp;fc=1920&amp;brdim=-7%2C0%2C-7%2C0%2C1920%2C0%2C974%2C1055%2C917%2C935&amp;vis=1&amp;rsz=%7C%7CaoevEr%7C&amp;abl=CA&amp;pfx=0&amp;fu=128&amp;bc=31&amp;ifi=9&amp;uci=a!9&amp;fsb=1&amp;xpc=xwPcRQqmkL&amp;p=https%3A//wordlegame.org&amp;dtd=35'
                data-google-container-id='a!9'
                data-google-query-id='CKPk3-WGuIEDFQBR3QIdb7gFdg'
                data-load-complete='true'></iframe>
            </div>
          </ins> */}
        </div>
      </div>
      <button type='button' class='close'>
        <svg width='12' height='12'>
          <use href='/assets/img/spritesvg.svg?v43.11#ic_close'></use>
        </svg>
      </button>
    </div>
  );
}

export default Congrats;
