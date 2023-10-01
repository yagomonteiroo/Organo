import "./cardColaborador.css";
import { AiFillCloseCircle } from 'react-icons/ai';

const Card = ({background,imagem, nome, cargo, aoDeletar}) => {
  return (
    <div className="card">
      <div className="fundo" style={{backgroundColor: background}}></div>

      <div
        className="img"
        style={{
          background: `url('${imagem}') lightgray 50% / cover no-repeat`,
        }}
        alt={"foto do colaborador " + nome}
      ></div>

      <h4>{nome}</h4>
      <p>{cargo}</p>
      <AiFillCloseCircle 
        className="btn-close" 
        size={21}
        style={{backgroundColor: background}}
        onClick={()=>aoDeletar(nome)}/>
    </div>
  );
};

export default Card;
