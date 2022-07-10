import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from './produto.model';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Get()
  public obterTodos(): Produto[] {
    return this.produtosService.obterTodos();
  }

  @Get(':id')
  public obterUm(@Param() params): Produto {
    return this.produtosService.obterUm(params.id);
  }

  @Post()
  public criar(@Body() produto: Produto): void {
    produto.id = 100;
    this.produtosService.criar(produto);
  }

  @Put()
  public alterar(@Body() produto: Produto): Produto {
    return this.produtosService.alterar(produto);
  }

  @Delete(':id')
  public apagar(@Param() params): void {
    this.produtosService.apagar(params.id);
  }
}
