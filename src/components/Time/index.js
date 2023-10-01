import CardColaborador from "../CardColaborador";
import "./time.css";

const Time = (props) => {

  return (
    props.colaboradores.length > 0 && //poderia ser um if ternario tb
    <section id={ props.nome } className="time" style={{ backgroundColor: props.corSecundaria }}
    >
      <input type="color" className="input-cor" value= { props.corPrimaria } onChange={e => props.aoMudarCor(e.target.value, props.nome)}/>
      <h3>{ props.nome }</h3>
      <span style={{ background: props.corPrimaria }}></span>

      <div className="cardContainer">
        {props.colaboradores.map(colaborador =>
          <CardColaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            background={props.corPrimaria}
            aoDeletar={props.aoDeletar}
          />
          )
        }
      </div>

      
    </section>
  );
};

export default Time;
