export class Fornecedor {
    id: number
    nome: String
    cnpj: String
    telefone: number
    endereco: string

    constructor(
        id: number,
        nome: String,
        cnpj: String,
        telefone: number,
        endereco: string
    ){
        this.id = id
        this.nome = nome
        this.cnpj = cnpj
        this.telefone = telefone
        this.endereco = endereco
    }
}