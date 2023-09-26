import CardColaborador from "../CardColaborador";
import "./time.css";

import React from "react";

const Time = (props) => {
  return (

    props.colaboradores.length > 0 && //poderia ser um if ternario tb

    <section className="time" style={{ background: props.corSecundaria }}>
      <h3>{props.nome}</h3>
      <span style={{ background: props.corPrimaria }}></span>

      <div className="container">
        {props.colaboradores.map(colaborador =>
          <CardColaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            background={props.corPrimaria}
          />
          )
        }
      </div>

      
    </section>
  );
};

export default Time;
