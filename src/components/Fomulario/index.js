import { useState } from "react";
import { flushSync } from "react-dom";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./formulario.css";

const Formulario = ({ aoColaboradorCadastrado, aoTimeCadastrado, times }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("#F8F8F8");

  const aoSalvar = (e) => {
    e.preventDefault();

    //Renderiza o componente imediatamente para que se tone possível acessa-lo no dom
    flushSync(() => {
      aoColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time,
        'favorito':false,
      });

      setNome("");
      setCargo("");
      setImagem("");
      setTime("");
    });

    //acesso ao dom requisitando o id do time
    const novaSectionTimeCriada = document.getElementById(time);
    //scroll
    if (novaSectionTimeCriada) {
      novaSectionTimeCriada.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="formulario container">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={times}
          valor={time}
          aoAlterar={(valor) => setTime(valor)}
        />
        <Botao>Criar card</Botao>
      </form>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          aoTimeCadastrado({
            nome: nomeTime,
            corPrimaria: corTime,
            corSecundaria: corTime + 33,
          });
          console.log(corTime)
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          obrigatorio
          label="Nome do Time"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterar={(valor) => setNomeTime(valor)}
        />
        <Campo
          obrigatorio
          label="Cor do time"
          valor={corTime}
          aoAlterar={(valor) => setCorTime(valor)}
          type = 'color'
        />
        <Botao>Criar time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
