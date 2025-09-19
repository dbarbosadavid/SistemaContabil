import React from "react";
import { TipoAtivo } from "../components/TipoAtivo";

const Balanco: React.FC = () => {
  return (
    <>
    <div id="ativos">
        <TipoAtivo 
          grupo="Ativo Circulante"
          saldo="R$ 40.000,00"
        />
        <TipoAtivo 
          grupo="Ativo Não Circulante"
          saldo="R$ 40.000,00"
        />
    </div>

    <div id="passivos">
        <TipoAtivo 
          grupo="Passivo circulante"
          saldo="R$ 40.000,00"
        />
        <TipoAtivo 
          grupo="Passivo não circulante"
          saldo="R$ 40.000,00"
        />
    </div>
    
        <TipoAtivo 
          grupo="Patrimônio"
          saldo="R$ 40.000,00"
        />
    </>
  )
  
};

export default Balanco;
