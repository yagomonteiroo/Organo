import "./formulario.css";
import { useState } from "react";
import { flushSync } from "react-dom";
import BotaoComum from "../BotaoComum";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import BotaoModal from "../BotaoModal";
import BasicModal from "../BotaoModal";

const Formulario = ({ aoColaboradorCadastrado, aoTimeCadastrado, times }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("#F8F8F8");
  const [Modal, setModal] = useState(false);

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

  const aoCadastrarTime =(e)=>{
    e.preventDefault();
    
    aoTimeCadastrado({
      nome: nomeTime,
      corPrimaria: corTime,
      corSecundaria: corTime + 33,
    });

    setNomeTime("");
    
    aoFecharModal()
  }

  const aoAbrirModal = () => setModal(true);
  const aoFecharModal = () => setModal(false);

  return (
    <section className="formulario container-page">
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

        <BotaoModal abrir= {aoAbrirModal} fechar={aoFecharModal} estadoAtual={Modal}>
          <form
            onSubmit={aoCadastrarTime}
          >
            <h2>Preencha os dados abaixo para criar um novo time.</h2>
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
            <BotaoComum >Criar time</BotaoComum>
          </form>
        </BotaoModal> 
        
        <BotaoComum>Criar card</BotaoComum>
      </form>


    </section>
  );
};

export default Formulario;
