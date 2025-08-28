export class Produto {
    id: number
    nome: String
    descricao: String
    valor: number

    constructor (
        id: number,
        nome: String,
        descricao: String,
        valor: number
    ){
        this.id = id
        this.nome = nome
        this.descricao = descricao
        this.valor = valor
    }
}