import ProdutoPorta from "../../model/produto/ProdutoPorta";

export default class CriarProduto{
    constructor(private produtoPorta: ProdutoPorta){}
    async executar(produto:any){
        const res = await this.produtoPorta.criar(produto)
        return res
    }
}