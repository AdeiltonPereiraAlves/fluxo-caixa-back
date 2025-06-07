import Venda from "../venda/Venda";

export default interface Produto {
    id?: string,
    nome: string,
    descricao:   string,
    preco: number,
    quantidade : number,
    criado:   Date,
    vendas?:  Venda[]
}