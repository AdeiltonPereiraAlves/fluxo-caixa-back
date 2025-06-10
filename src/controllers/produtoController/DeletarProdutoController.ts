import CriarProduto from "../../core/casosDeUso/Produto/CriarProduto";
import { Express, Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import ListarProdutos from "../../core/casosDeUso/Produto/ListarProdutos";
import DeletarProdutos from "../../core/casosDeUso/Produto/DeletarProduto";
export default class DeletarProdutoController{
    constructor(
       private servidor: Express,
       private casoDeUso: DeletarProdutos,
       ...midleware: any[]
    ){
      const registar = async (req: Request, res: Response)=> {
           try {
          
              const id = +req.params.id
             const p = await this.casoDeUso.executar(id)
             res.status(200).json(p)
           } catch (error:any) {
               console.log(error)
              throw new Error("Erro ao deletar produto no controller")
           }
      }
      this.servidor.delete("/api/delete/:id",registar)
    }
}