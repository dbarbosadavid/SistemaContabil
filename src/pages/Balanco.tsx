import React, { useEffect, useState } from "react";
import { TipoAtivo } from "../components/TipoAtivo";
import { useAuth } from "../firebase/useAuth";
import { getAllLancamento } from "../service/LancamentoService";
import type LancamentoDTO from "../model/dto/LancamantoDTO";



const Balanco: React.FC = () => {
  const { user } = useAuth();
  const [lancamentos, setLancamentos] = useState<any>([]);
  
  useEffect(() => {
    const fetchLancamentos = async () => {
      if (user) {
        const data = await getAllLancamento(user);
                  setLancamentos(data);
      }
    };
    fetchLancamentos();
  }, [user]);

  var saldoAC = 0
  var saldoANC = 0
  var saldoPC = 0
  var saldoPNC = 0
  var patrimonio = 0

  lancamentos.forEach((lancamento: LancamentoDTO) => {
    switch(lancamento.getConta().getGrupo()){
      case '1':
        saldoAC += lancamento.getValor()
        break
      case '2':
        saldoAC += lancamento.getValor()
        break
      case '3':
        saldoAC += lancamento.getValor()
        break
      case '4':
        saldoAC += lancamento.getValor()
        break
      case '5':
        saldoAC += lancamento.getValor()
        break
      default:
        break
    }
  });

  var arrayStrings: string[] = []

  arrayStrings.push(saldoAC.toFixed(2))
  arrayStrings.push(saldoANC.toFixed(2))
  arrayStrings.push(saldoPC.toFixed(2))
  arrayStrings.push(saldoPNC.toFixed(2))
  arrayStrings.push(patrimonio.toFixed(2))


  function inserirCaractere(stringOriginal: string, caractereParaInserir: string, posicao: number): string {
    // Divida a string em duas partes: antes e depois da posição de inserção
    const parteInicio = stringOriginal.slice(0, posicao);
    const parteFim = stringOriginal.slice(posicao);

    // Concatene as partes com o caractere a ser inserido
    return parteInicio + caractereParaInserir + parteFim;
  }

  for(var i=0; i<5; i++){
    var split: string[] = arrayStrings[i].split('.')
    var nPontos = Math.trunc(split[0].length / 3)
    console.log(i, nPontos)

    if(nPontos >= 0){
      for(var j=0; j<nPontos; j++){
        var posicao = split[0].length - (j+1) * 3 - j

        if(posicao != 0)
          split[0] = inserirCaractere(split[0], '.', posicao)
      }
    }

    arrayStrings[i] = split.join(",")
  }

  return (
    <>
    <div id="ativos">
        <TipoAtivo 
          grupo="Ativo Circulante"
          saldo= {`R$ ${arrayStrings[0]}`}
        />
        <TipoAtivo 
          grupo="Ativo Não Circulante"
          saldo= {`R$ ${arrayStrings[1]}`}
        />
    </div>

    <div id="passivos">
        <TipoAtivo 
          grupo="Passivo circulante"
          saldo= {`R$ ${arrayStrings[2]}`}
        />
        <TipoAtivo 
          grupo="Passivo não circulante"
          saldo= {`R$ ${arrayStrings[3]}`}
        />
    </div>
    
        <TipoAtivo 
          grupo="Patrimônio"
          saldo= {`R$ ${arrayStrings[4]}`}
        />
    </>
  )
  
};

export default Balanco;
