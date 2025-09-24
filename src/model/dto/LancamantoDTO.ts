import type { ContaDTO } from "./ContaDTO"

class LancamentoDTO {
    private userId: string
    private data: Date
    private descricao: string
    private conta: ContaDTO
    private tipo: 'credito' | 'debito'
    private valor: number

    constructor(
        userId: string,
        data: Date,
        descricao: string,
        valor: number,
        conta: ContaDTO,
        tipo: 'credito' | 'debito'
    ) {
        this.userId = userId
        this.data = data
        this.descricao = descricao
        this.conta = conta
        this.tipo = tipo
        this.valor = valor
    }

    public getUserId(): string | undefined {
        return this.userId;
    }

    public setUserId(userId: string): void {
        this.userId = userId;
    }

    public getData(): Date {
        return this.data;
    }

    public setData(data: Date): void {
        this.data = data;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public getConta(): ContaDTO {
        return this.conta;
    }

    public setConta(conta: ContaDTO): void {
        this.conta = conta;
    }

    public getTipo(): 'credito' | 'debito' {
        return this.tipo;
    }

    public setTipo(tipo: 'credito' | 'debito'): void {
        this.tipo = tipo;
    }

    public getValor(): number {
        return this.valor;
    }

    public setValor(valor: number): void {
        this.valor = valor;
    }
}

export default LancamentoDTO