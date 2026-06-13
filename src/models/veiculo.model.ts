export interface Veiculo {
    id: string | number;
    usuarioId: string | number;
    nome: string;
    marca: string;
    modelo: string;
    ano: number;
    tanqueCapacidade: number;
    tipoCombustivel: string;
    CreatedAt: Date;
}