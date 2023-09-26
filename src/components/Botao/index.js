import './botao.css'
const Botao = (props) =>{
  return(
    <div className='botao'>
      <button type="submit">{props.children}</button>
    </div>
  )
}

// const button= document.querySelector('.botao button')
// button.addEventListener('click', (e)=>{
//   e.preventDefault();
// })

export default Botao