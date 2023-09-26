import "./cardColaborador.css";

import React from "react";

const Card = ({background,imagem, nome, cargo}) => {
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
    </div>
  );
};

export default Card;
