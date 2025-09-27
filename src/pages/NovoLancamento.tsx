import React, { useState } from "react";
import { listaContas } from "../repository/ListaContas";




const NovoLancamento: React.FC = () => {
    const [valor, setValor] = useState("");
    const [date, setDate] = useState("");


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        value = value.replace(/\D/g, "");

        const valorNumerico = (Number(value) / 100).toFixed(2);

        const formatado = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        }).format(Number(valorNumerico));

        setValor(formatado);
    };

    const dateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let date = e.target.valueAsDate?.toISOString()
        date = date?.slice(0, 10)

        if(!date)
            return;

        if(date > new Date().toISOString().slice(0, 10)){
            date = new Date().toISOString().slice(0, 10)
            setDate(date)
        }
        else{
            setDate(date)
        }
    }


    return (
        <>
            <form id="lancamento-form">
                <label>Lançamento de: </label>
                <input id="descricao" type="text" placeholder="Ex.: Compra de matéria-prima" className="input-descricao"/> 
              

                <label>Data do Lançamento</label>
                <input type="date" name="" id="date-input" onChange={dateChange} value={date}/>

                <label>Conta</label>
                <select id="conta">
                    {listaContas.map(conta => (
                        <option value={conta.nome}>{conta.grupo}.{conta.subGrupo}.{conta.elemento} {conta.nome}</option>
                    ))}
                </select>

                <label>Tipo</label>    
                <select id="tipo">
                    <option value="credito" selected>Crédito</option>
                    <option value="debito">Débito</option>
                </select>

                <label>Valor</label>
                <input type="Text" placeholder="R$ 0,00" className="input-descricao" id="valor" value={valor} onChange={handleChange}/>
                <hr />
            </form>
            <button type="submit">Criar Lançamento</button>

        </>
    );
}

export default NovoLancamento;

