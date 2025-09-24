export class Conta {
    private nome: string
    private grupo: number
    private subGrupo: number 
    private elemento: number

    constructor(
        nome: string,
        grupo: number,
        subGrupo: number,
        elemento: number
    ) {
        this.nome = nome
        this.grupo = grupo
        this.subGrupo = subGrupo
        this.elemento = elemento
    }

    public jsonToObject() {
        
    }

}