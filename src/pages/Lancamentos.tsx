import { useAuth } from "../firebase/useAuth";
import { getAllLancamentoService } from "../service/LancamentoService";
import React, { useEffect, useState } from "react";
import type LancamentoDTO from "../model/dto/LancamantoDTO";

const Lancamentos: React.FC = () => {
    const { user } = useAuth();
    const [lancamentos, setLancamentos] = useState<any>([]);

    useEffect(() => {
        const fetchLancamentos = async () => {
            if (user) {
                const data = await getAllLancamentoService(user);
                setLancamentos(data);
            }
        };
        fetchLancamentos();
    }, [user]);


    return (
        <>
            <h1>Lançamentos</h1>
            <button>Novo Lançamento</button>
            <table border={1}>
                <thead>
                <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    <th>Valor</th>
                    <th>Tipo</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                    {lancamentos.map((lancamento : LancamentoDTO, idx: any) => (
                                <tr key={idx}>
                                    <td>{lancamento.getData().toLocaleDateString()}</td>
                                    <td>{lancamento.getDescricao()}</td>
                                    <td>{lancamento.getConta().getNome()}</td>
                                    <td>R$ {lancamento.getValor().toFixed(2)}</td>
                                    <td>{lancamento.getTipo()}</td>
                                    <td><button>Editar</button> <button>Excluir</button></td>
                                </tr>
                        ))}
                    
                </tbody>
            </table>

        </>
    );
}

export default Lancamentos;

