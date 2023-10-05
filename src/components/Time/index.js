import CardColaborador from "../CardColaborador";
import "./time.css";

const Time = ({aoDeletar, aoMudarCor, aoFavoritarColaborador, colaboradores,nome, id, corPrimaria, corSecundaria}) => {

  return (
    colaboradores.length > 0 && //poderia ser um if ternario tb
    <section id={ nome } className="time" style={{ backgroundColor: corSecundaria }}
    >
      <input type="color" className="input-cor" value= { corPrimaria } onChange={e => aoMudarCor(e.target.value, id)}/>
      <h3>{ nome }</h3>
      <span style={{ background: corPrimaria }}></span>

      <div className="cardContainer">
        {colaboradores.map((colaborador, indice) =>
          <CardColaborador
            key={indice}
            id={colaborador.id}
            colaborador={colaborador}
            background={corPrimaria}
            aoDeletar={aoDeletar}
            aoFavoritar={aoFavoritarColaborador}
          />
          )
        }
      </div>

      
    </section>
  );
};

export default Time;
