export default interface ProdutoPorta{
    criar(produto:any):any
    listarProdutos(): any
    deletar(id:string):any
}