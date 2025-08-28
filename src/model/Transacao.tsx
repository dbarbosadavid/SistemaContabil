class Transacao {
    id: number;
    tipoConta: String
    pedidos: String
    

    constructor(
        id: number,
        tipoConta: String,
        pedidos: String
    ) {
        this.id = id;
        this.tipoConta = tipoConta
        this.pedidos = pedidos
    }

}

export default Transacao