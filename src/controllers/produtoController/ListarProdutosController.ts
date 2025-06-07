import CriarProduto from "../../core/casosDeUso/Produto/CriarProduto";
import { Express, Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import ListarProdutos from "../../core/casosDeUso/Produto/ListarProdutos";
export default class ListarProdutosController{
    constructor(
       private servidor: Express,
       private casoDeUso: ListarProdutos,
       ...midleware: any[]
    ){
      const registar = async (req: Request, res: Response)=> {
           try {
          

             const p = await this.casoDeUso.executar()
             res.status(200).json(p)
           } catch (error:any) {
               console.log(error)
              throw new Error("Erro ao criar produto no controller")
           }
      }
      this.servidor.get("/api/produtos",registar)
    }
}