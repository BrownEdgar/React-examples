import React from 'react'

export default function SocialLinks() {
  return (
    <div className="social">
      <a href="http://bit.ly/gloawebstart" target="_blank" className="icon webstart" rel="noreferrer">
        <div className="tooltip">ВебСтарт</div>
        <i className="fas fa-code"></i>
      </a>
      <a href="http://bit.ly/gloajavascript" target="_blank" className="icon js" rel="noreferrer">
        <div className="tooltip">JavaScript</div>
        <i className="fab fa-js"></i>
      </a>
      <a href="http://bit.ly/gloareact" target="_blank" className="icon react" rel="noreferrer">
        <div className="tooltip">React</div>
        <i className="fab fa-react"></i>
      </a>
      <a href="http://bit.ly/gloaphp" target="_blank" className="icon php" rel="noreferrer">
        <div className="tooltip">PHP</div>
        <i className="fab fa-php"></i>
      </a>
      <a href="http://bit.ly/gloawordpress" target="_blank" className="icon wp" rel="noreferrer">
        <div className="tooltip">WordPress</div>
        <i className="fab fa-wordpress"></i>
      </a>
      <a href="https://t.me/glo_academy" target="_blank" className="icon telegram" rel="noreferrer">
        <div className="tooltip">Telegram</div>
        <i className="fab fa-telegram-plane"></i>
      </a>
      <a href="https://vk.com/glo_academy" target="_blank" className="icon vk" rel="noreferrer">
        <div className="tooltip">VKontakte</div>
        <i className="fab fa-vk"></i>
      </a>
      <a href="https://www.instagram.com/glo.academy" target="_blank" className="icon instagram" rel="noreferrer">
        <div className="tooltip">Instagram</div>
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.youtube.com/c/GloAcademyChannel/featured" target="_blank" className="icon youtube" rel="noreferrer">
        <div className="tooltip">Youtube</div>
        <i className="fab fa-youtube"></i>
      </a>
    </div>
  )
}
