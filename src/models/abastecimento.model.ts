export interface Abastecimento {
    veiculoId: string | number;
    odometroKm: number;
    litros: number;
    precoTotal: number;
    precoCombustivel: number;
    isTanqueCompleto: boolean;
    anotacoes: string;
    createdAt: Date;
}