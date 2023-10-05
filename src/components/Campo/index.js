import './Campo.css';
const Campo = ({ type = 'text', aoAlterar, valor, label, placeholder, obrigatorio}) =>{

  const aoDigitar = (e) =>{
    aoAlterar(e.target.value)
  }

  return(
    <div className="campo">

      <label htmlFor='nome'>{label}</label>
      <input type={type} value={valor} onChange={aoDigitar}  id={label} placeholder={placeholder} required={obrigatorio}/>

    </div>
  )
}

export default Campo