import React, { useEffect, useState } from "react";
import { useAuth } from "../firebase/useAuth";
import type { ContaDTO } from "../model/dto/ContaDTO";
import { getAllContaService } from "../service/ContasService";
import { getLancamentoContaService } from "../service/LancamentoService";
import type LancamentoDTO from "../model/dto/LancamantoDTO";

const Contas: React.FC = () => {
    const { user } = useAuth();
        const [contas, setContas] = useState<any>([]);
        const [nomeConta, setNomeConta] = useState<any>([]);
        const [lancamentos, setLancamentos] = useState<any>([]);

        useEffect(() => {
            const fetchConta = async () => {
                if (user) {
                    const data = await getAllContaService();
                    setContas(data);
                }
            };
            fetchConta();

            const fetchLancamentos = async () => {
                if (user) {
                    const data = await getLancamentoContaService(nomeConta, user);
                    setLancamentos(data);
                }
            };
            fetchLancamentos();
        }, [user, nomeConta]);


    return (
        <>
            <h1>Listar Contas</h1>
            <select onChange={(e) => setNomeConta(e.target.value)}>
                {contas.map((conta : ContaDTO) => (
                                    <option value={conta.getNome()}>{conta.getGrupo()}.{conta.getSubGrupo()}.{conta.getElemento()} {conta.getNome()}</option>
                            ))}
            </select>
            
            <h2>{nomeConta}</h2>
            <button>Nova Conta</button>

            <table border={1}>
                <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Vencimento</th>
                    <th>Valor</th>
                    <th>Status</th>
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

    )
}

export default Contas;