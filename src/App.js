import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Fomulario';
import Time from './components/Time';
import Rodape from './components/Rodape';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      corPrimaria:"#57C278",
      corSecundaria:"#D9F7E9",
    },
    {
      id: uuidv4(),
      nome: "Front-End", 
      corPrimaria:"#82CFFA",
      corSecundaria:"#E8F8FF",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      corPrimaria:"#A6D157",
      corSecundaria:"#F0F8E2",
    },
    {
      id: uuidv4(),
      nome: "DevOps", 
      corPrimaria:"#E06B69",
      corSecundaria:"#FDE7E8",
    },
    {
      id: uuidv4(),
      nome: "UI/UX",
      corPrimaria:"#DB6EBF",
      corSecundaria:"#FAE9F5",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      corPrimaria:"#FFBA05",
      corSecundaria:"#FFF5D9",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      corPrimaria:"#FF8A29",
      corSecundaria:"#FFEEDF",
    },
  ]);

  const inicial = [{
    id: uuidv4(),
    nome:'Yago Monteiro',
    cargo: 'Estudante de Desenvolvimento Web',
    imagem: 'https://github.com/yagomonteiroo.png',
    time: 'Front-End',
    favorito: false,
  }]

  const [colaboradores, setColaboradores]= useState(inicial);

  const acicionarColaborador = (colaborador) =>{
    setColaboradores( [...colaboradores, colaborador]);
  }

  const removerColaborador = (id) =>{
    setColaboradores( colaboradores.filter(colaborador => colaborador.id !== id));
  }

  const mudarCorDoTime = (cor, id) =>{
    setTimes(times.map(time => {
      if(time.id === id){
        time.corPrimaria = cor;
        time.corSecundaria = cor+33;
      }
      return time
    }))
  }

  const adicionarTime = (novoTime) =>{
    setTimes([...times, {...novoTime, id: uuidv4()} ]);
  }

  const resolverFavorito = (id) =>{
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id){
        colaborador.favorito = !colaborador.favorito;
      }
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        times= {times.map(time => time.nome)}
        aoColaboradorCadastrado={acicionarColaborador}
        aoTimeCadastrado={adicionarTime}
      />

      <section className="times">
        <h1>Minha Organização</h1>
      {
        times.map (time => 
          <Time
            key={time.nome} 
            id={time.id}
            nome = {time.nome} 
            corPrimaria = {time.corPrimaria} 
            corSecundaria  = {time.corSecundaria}
            colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar = {removerColaborador}
            aoMudarCor = {mudarCorDoTime} 
            aoFavoritarColaborador = {resolverFavorito}
          />
        )
      }
      </section>

      <Rodape/>
    </div>
  );
}

export default App;
