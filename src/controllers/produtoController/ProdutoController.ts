import CriarProduto from "../../core/casosDeUso/Produto/CriarProduto";
import { Express, Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
export default class ProdutoController{
    constructor(
       private servidor: Express,
       private casoDeUso: CriarProduto,
       ...midleware: any[]
    ){
      const registar = async (req: Request, res: Response)=> {
           try {
            console.log(req.body, "body")
            const {nome, descricao, preco, quantidade} = req.body
             const produto = {
               
                nome,
                descricao,
                preco: +preco,
                quantidade : +quantidade,
                criado: new Date,
                    
             }

             const p = await this.casoDeUso.executar(produto)
             res.status(200).json(p)
           } catch (error:any) {
               console.log(error)
              throw new Error("Erro ao criar produto no controller")
           }
      }
      this.servidor.post("/produto",registar)
    }
}