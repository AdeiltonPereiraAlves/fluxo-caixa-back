import { Prisma, PrismaClient } from "@prisma/client";
import ProdutoPorta from "../../../core/model/produto/ProdutoPorta";
import {prisma}from "../prismaDb/prisma";

export default class ProdutoService implements ProdutoPorta{
   
    async criar(produto: any) {
        console.log(produto, "produto")
        try {
           const p =  await prisma.produto.create({data:{
              id: produto.id,
              nome:produto.nome,
              descricao:produto.descricao,
              preco: produto.preco,
              quantidade: produto.quantidade,
              criadoEm: produto.criado,
              



           }})
           console.log(p, "p")
           return p
        } catch (error) {
            console.log(error, "erro")
            throw new Error("erro ao criar produto")
        }
    }
    async listarProdutos(){
        try {
            const produtos = await prisma.produto.findMany()
            return produtos
        } catch (error) {
             console.log(error, "erro")
            throw new Error("erro ao criar produto")
        }
    }
}