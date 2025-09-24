import type { Conta } from "./Contas"

class Lancamento {
    private data: Date
    private descricao: string
    private conta: Conta
    private tipo: 'credito' | 'debito'
    private valor: number

    constructor(
        data: Date,
        descricao: string,
        valor: number,
        conta: Conta,
        tipo: 'credito' | 'debito',
    ) {
        this.data = data  
        this.descricao = descricao
        this.valor = valor
        this.conta = conta
        this.tipo = tipo
    }

    toJSON(){
        return {
            "data": this.data.toISOString(),
            "descricao": this.descricao,
            "valor": this.valor,
            "conta": {
                "nome": this.conta['nome'],
                "grupo": this.conta['grupo'],
                "subGrupo": this.conta['subGrupo'],
                "elemento": this.conta['elemento']
            },
            "tipo": this.tipo
        }
    }
}

export default Lancamento