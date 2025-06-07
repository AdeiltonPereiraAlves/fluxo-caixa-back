import express, { urlencoded } from "express";
import cors from "cors"
import ProdutoService from "./adapters/Service/db/ProdutoService";
import CriarProduto from "./core/casosDeUso/Produto/CriarProduto";
import ProdutoController from "./controllers/produtoController/ProdutoController";
import ListarProdutos from "./core/casosDeUso/Produto/ListarProdutos";
import ListarProdutosController from "./controllers/produtoController/ListarProdutosController";
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))





app.listen(3009,()=> {
    console.log("servidor rodando")
})

//criar produto
const produtoRepositorio = new ProdutoService()

const criarProduto = new CriarProduto(produtoRepositorio)

new ProdutoController(app, criarProduto)

// listar produtos

const listarProduto = new ListarProdutos(produtoRepositorio)

new ListarProdutosController(app, listarProduto)