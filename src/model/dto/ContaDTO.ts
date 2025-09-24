export class ContaDTO {
    private id?: string
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

    public getId(): string {
        return this.id?.toString() ?? '';
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getNome(): string {
        return this.nome.toString();
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getGrupo(): string {
        return this.grupo.toString();
    }

    public setGrupo(grupo: string): void {
        this.grupo = Number(grupo);
    }

    public getSubGrupo(): string {
        return this.subGrupo.toString();
    }

    public setSubGrupo(subGrupo: string): void {
        this.subGrupo = Number(subGrupo);
    }

    public getElemento(): string {
        return this.elemento.toString();
    }

    public setElemento(elemento: string): void {
        this.elemento = Number(elemento);
    }
   

    public jsonToObject() {
        
    }
}