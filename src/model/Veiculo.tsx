export class Veiculo {
    id?: number
    placa: String
    modelo: String

    constructor(
        placa: String, 
        modelo: String,
        id?: number
    ) 
    {
        this.id = id;
        this.placa = placa;
        this.modelo = modelo;
    }
}