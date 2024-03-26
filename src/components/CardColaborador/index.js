import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import "./cardColaborador.css";

const Card = ({colaborador, background, aoDeletar, aoFavoritar}) => {

  function favoritar(){
    aoFavoritar(colaborador.id)
    console.log(colaborador.id)
  }

  const propsFavoritos={
    className:'btn-favoritar',
    color: background,
    size: 21.5,
    onClick: favoritar,
  }

  return (
    <div className="card-colaborador">
      <div className="fundo" style={{backgroundColor: background}}></div>

      <div
        className="img"
        style={{
          background: `url('${colaborador.imagem}') lightgray 50% / cover no-repeat`,
        }}
        alt={"foto do colaborador " + colaborador.nome}
      ></div>

      <h4>{colaborador.nome}</h4>
      <p>{colaborador.cargo}</p>
      <AiFillCloseCircle 
        className="btn-fechar" 
        size={21}
        // style={{backgroundColor: background}}
        onClick={()=>aoDeletar(colaborador.id)}
      />

      <div>
          { colaborador.favorito 
              ? <AiFillHeart {...propsFavoritos}/>
              : <AiOutlineHeart {...propsFavoritos}/>
          }
      </div>
    </div>
  );
};

export default Card;
