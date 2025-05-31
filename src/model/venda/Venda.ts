import Produto from "../produto/Produto";

export default interface Venda {
  id?: string;
  produto: Produto;
  quantidade: number;
  valorTotal: number;
  dataVenda: Date;
}
