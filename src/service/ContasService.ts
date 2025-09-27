import { ContaDTO } from "../model/dto/ContaDTO";
import { getAllConta } from "../repository/ContasRepository";

export const getAllContaService = async () => {
    const response = await getAllConta();
    const listaContas = Array<ContaDTO>();

    response.forEach((conta: any) => {
            const contaObj = new ContaDTO(
                    conta.nome,
                    conta.grupo,
                    conta.subGrupo,
                    conta.elemento
                )
          
            listaContas.push(contaObj);
    })

    return listaContas;
};