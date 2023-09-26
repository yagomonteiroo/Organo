import { useState } from 'react';
import './CampoTexto.css';
const CampoTexto = (props) =>{

  const aoDigitar = (e) =>{
    props.aoAlterar(e.target.value)
  }

  return(
    <div className='campo-texto'>

      <label htmlFor='nome'>{props.label}</label>
      <input value={props.valor} onChange={aoDigitar} type='text' id={props.label} placeholder={props.placeholder} required={props.obrigatorio}/>

    </div>
  )
}

export default CampoTexto