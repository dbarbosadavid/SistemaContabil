export class Cliente {
    id: number
    nome: String
    cpf: String
    telefone: number
    cep: number
    endereco: string

    constructor(
        id: number,
        nome: String,
        cpf: String,
        telefone: number,
        cep: number,
        endereco: string
    ){
        this.id = id
        this.nome = nome
        this.cpf = cpf
        this.telefone = telefone
        this.cep = cep
        this.endereco = endereco
    }

}