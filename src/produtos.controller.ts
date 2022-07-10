import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController {

    @Get()
    public obterTodos(): string {
        return 'Lista todos os produtos';
    }

    @Get(':id')
    public obterUm(@Param() params): string {
        return `Retorna os dados do produto ${params.id}`;
    }

    @Post()
    public criar(@Body() produto): string {
        console.log(produto);
        return 'Produto criado';
    }

    @Put()
    public alterar(@Body() produto): string {
        console.log(produto);
        return 'Produto atualizado';
    }

    @Delete(':id')
    public apagar(@Param() params): string {
        return `Apaga o produto ${params.id}`;
    }
}