import { addLancamento, getAllRepository } from "../repository/LancamentoRepository";
import LancamentoDTO from "../model/dto/LancamantoDTO";
import { ContaDTO } from "../model/dto/ContaDTO";
import Lancamento from "../model/Lancamento";
import { getConta } from "../repository/ContasRepository";
import { Conta } from "../model/Contas";

export const getAllLancamento = async (user: any) => {
    const response = await getAllRepository(user);
    const listaLancamentos = Array<LancamentoDTO>();

    response.forEach((snapshot) => {
            const lancamento = snapshot.val();
            const lancamentoObj = new LancamentoDTO(
                snapshot.key,
                new Date(lancamento.data),
                lancamento.descricao,
                lancamento.valor,
                new ContaDTO(
                    lancamento.conta.nome,
                    lancamento.conta.grupo,
                    lancamento.conta.subGrupo,
                    lancamento.conta.elemento
                ),
                lancamento.tipo
            );
            listaLancamentos.push(lancamentoObj);
    })


    return listaLancamentos;
};

export const addLancamentoService = async (data: Date, descricao:string, valor: number, nomeConta: string, tipo: 'credito' | 'debito', user: any) => {
    const response = await getConta('nome', nomeConta);
    const contas : any[] = response.val();

    var conta = contas[0]

    response.forEach(element => {
        conta = element.val()
    });

    if(!conta)
        return
   
    const contaTemporaria = new Conta(
        conta.nome,
        conta.grupo,
        conta.subGrupo,
        conta.elemento
    )

    console.log(contaTemporaria)

    const lancamento = new Lancamento(
        data,
        descricao,
        valor,
        contaTemporaria,
        tipo
    )

    addLancamento(lancamento, user)
}