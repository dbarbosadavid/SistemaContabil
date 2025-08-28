export class Compra {
    id: number
    idFornecedor: number
    idProduto: number
    valor: number
    descricao: string

    constructor(
        id: number,
        idFornecedor: number,
        idProduto: number,
        valor: number,
        descricao: string
    ){
        this.id = id
        this.idFornecedor = idFornecedor
        this.idProduto = idProduto
        this.valor = valor
        this.descricao = descricao
    }
}