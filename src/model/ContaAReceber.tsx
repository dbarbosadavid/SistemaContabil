import Transacao from "./Transacao";

export class ContaAReceber extends Transacao{
    idCliente: number;
    descricao: String;
    valorDebito: number;
    status: String;

    constructor (
        cliente: number,
        id: number,
        descricao: String,
        valorDebito: number,
        status: String
    ){
        super(id, "Conta a Receber", "");
        this.idCliente = cliente;
        this.id = id;
        this.valorDebito = valorDebito;
        this.status = status;
        this.descricao = descricao;
    }

}