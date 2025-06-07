import ProdutoPorta from "../../model/produto/ProdutoPorta"

export default class ListarProdutos{
    constructor(private produtoPorta: ProdutoPorta){}
        async executar(){
            const res = await this.produtoPorta.listarProdutos()
            return res
        }
}