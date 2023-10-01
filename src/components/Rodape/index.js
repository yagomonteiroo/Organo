import './rodape.css';
const Footer = ()=>{
  return(
    <footer className="footer container">
      <div className="redes">
        <img src="/img/fb.png" alt="Instagram" />
        <img src="/img/tw.png" alt="Facebook" />
        <img src="/img/ig.png" alt="Twitter" />
      </div>
      <img src="/img/logo.png" alt="Logotipo da Organo" />
      <div className='copyright'>
      <p> <span>Organo</span> | Powered<br/> by <a href='https://github.com/YagoMonteiro'>Yago Monteiro</a></p>
      </div>

    </footer>
  )
}

export default Footer