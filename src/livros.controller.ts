import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}

  @Get()
  public obterTodos(): Livro[] {
    return this.livrosService.obterTodos();
  }

  @Get(':id')
  public obterUm(@Param() params): Livro {
    return this.livrosService.obterUm(params.id);
  }

  @Post()
  public criar(@Body() livro: Livro): void {
    livro.id = 100;
    this.livrosService.criar(livro);
  }

  @Put()
  public alterar(@Body() livro: Livro): Livro {
    return this.livrosService.alterar(livro);
  }

  @Delete(':id')
  public apagar(@Param() params): void {
    this.livrosService.apagar(params.id);
  }
}
