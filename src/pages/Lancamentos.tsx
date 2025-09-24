import React from "react";
import { useAuth } from "../firebase/useAuth";
import { get, ref } from "firebase/database";
import { db } from "../firebase/firebase";
import { useState, useEffect } from "react";


const Lancamentos: React.FC = () => {
    const { user } = useAuth();
    
    const [lancamentos, setLancamentos] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLancamentos = async () => {
            if (!user) { // Ensure user is available before fetching
                setIsLoading(false);
                return;
            }
            try {
                const snapshot = await get(ref(db, '/user/' + user.uid + '/lancamentos')); // Correct way to use get()

                if (snapshot.exists()) {
                    setLancamentos([snapshot.val()]); // Assuming you want an array, even if snapshot.val() is an object
                } else {
                    console.log("No data available.");
                    setLancamentos([]);
                }
            } catch (err: any) {
                console.error("Error fetching lancamentos:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLancamentos();
    }, [user]); // Re-run effect if user changes

    if (isLoading) {
        return <p>Carregando lançamentos...</p>;
    }

    if (error) {
        return <p>Erro: {error}</p>;
    }

    const lancamento = lancamentos[0]
    console.log(lancamento)

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
                <tr>
                    <td>01/09/2025</td>
                    <td>Venda de produto</td>
                    <td>Receita</td>
                    <td>R$ 500,00</td>
                    <td>Crédito</td>
                    <td><button>Editar</button> <button>Excluir</button></td>
                </tr>
                </tbody>
            </table>

        </>
    )
}

export default Lancamentos;