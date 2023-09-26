import './listaSuspensa.css';
const ListaSuspensa = (props) =>{

  const aoDigitar = (e) => {
    props.aoAlterar(e.target.value)
  }

  return(
    <div className='lista-suspensa'>
      <label>{props.label}</label>
      <select required value={props.valor} onChange={aoDigitar}>
      <option value="" disabled>Escolha uma opção</option>
        {props.itens.map(item => <option required={props.obrigatorio} key={item} >{item}</option>)}
      </select>
    </div>
  )  
}

export default ListaSuspensa