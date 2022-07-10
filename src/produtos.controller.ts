import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model";

@Controller('produtos')
export class ProdutosController {

    produtos: Produto[] = [
        new Produto('LIV01', 'Livro de TDD e BDD na prática', 28.71),
        new Produto('LIV02', 'Livro iniciando com flutter', 31.92),
        new Produto('LIV03', 'Inteligência artificial como serviço', 49.90)
    ];

    @Get()
    public obterTodos(): Produto[] {
        return this.produtos;
    }

    @Get(':id')
    public obterUm(@Param() params): Produto {
        return this.produtos[0];
    }

    @Post()
    public criar(@Body() produto): void {
        produto.id = 100;
        this.produtos.push(produto);
    }

    @Put()
    public alterar(@Body() produto): Produto {
        return produto;
    }

    @Delete(':id')
    public apagar(@Param() params): void {
        this.produtos.pop();
    }
}