import ProdutoPorta from "../../model/produto/ProdutoPorta"

export default class DeletarProduto{
    constructor(private produtoPorta: ProdutoPorta){}
        async executar(id:any){
            const res = await this.produtoPorta.deletar(id)
            return res
        }
}