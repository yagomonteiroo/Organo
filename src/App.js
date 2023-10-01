import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Fomulario';
import Time from './components/Time';
import Rodape from './components/Rodape';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [times, setTimes] = useState([
    {
      nome: "Programação",
      corPrimaria:"#57C278",
      corSecundaria:"#D9F7E9",
    },
    {
      nome: "Front-End", 
      corPrimaria:"#82CFFA",
      corSecundaria:"#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria:"#A6D157",
      corSecundaria:"#F0F8E2",
    },
    {
      nome: "DevOps", 
      corPrimaria:"#E06B69",
      corSecundaria:"#FDE7E8",
    },
    {
      nome: "UI/UX",
      corPrimaria:"#DB6EBF",
      corSecundaria:"#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria:"#FFBA05",
      corSecundaria:"#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria:"#FF8A29",
      corSecundaria:"#FFEEDF",
    },
  ]);

  const inicial = [{
    id: uuidv4(),
    nome:'Yago Monteiro',
    cargo: 'Estudandte de Desenvolvimento Web',
    imagem: 'https://github.com/yagomonteiroo.png',
    time: 'Front-End',
  }]

  const [colaboradores, setColaboradores]= useState(inicial);

  const acicionarColaborador = (colaborador) =>{
    setColaboradores( [...colaboradores, colaborador]);
  }

  const removerColaborador = (nome) =>{
    console.log(`clicou em ${nome}`)
    setColaboradores( colaboradores.filter(colaborador => colaborador.nome !== nome));
  }

  const mudarCorDoTime = (cor, nome) =>{
    setTimes(times.map(time => {
      if(time.nome === nome){
        time.corPrimaria = cor;
        time.corSecundaria = cor+11;
      }
      return time
    }))
  }
  return (
    <div className="App">
      <Banner />
      <Formulario 
        titulo= 'Preencha os dados para criar o card do colaborador.' 
        times= {times.map(time => time.nome)}
        aoColaboradorCadastrado={acicionarColaborador}
      />

      <section className="times">
        <h1>Minha Organização</h1>
      {
        times.map (time => 
          <Time
            key={time.nome} 
            nome = {time.nome} 
            corPrimaria = {time.corPrimaria} 
            corSecundaria  = {time.corSecundaria}
            colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar = {removerColaborador}
            aoMudarCor = {mudarCorDoTime}
          />
        )
      }
      </section>

      <Rodape/>
    </div>
  );
}

export default App;
