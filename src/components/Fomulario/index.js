import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./formulario.css";

const Formulario = (props) => {


  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (e) => {
    e.preventDefault();

    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    })

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>{props.titulo}</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterar={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterar={valor => setCargo(valor)}
        />
        <CampoTexto 
        label="Imagem" 
        placeholder="Informe o endereço da imagem"
        valor = {imagem}
        aoAlterar = {valor => setImagem(valor)}
        />
        <ListaSuspensa 
        obrigatorio={true} 
        label="Time" 
        itens={props.times}
        valor={time}
        aoAlterar={valor => setTime(valor)} 
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
