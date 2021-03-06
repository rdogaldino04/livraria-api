import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Livro } from './livro.model';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Get()
  async obterTodos(): Promise<Livro[]> {
    return await this.livrosService.obterTodos();
  }

  @Get(':id')
  async obterUm(@Param() params): Promise<Livro> {
    const livro = await this.livrosService.obterUm(params.id);
    if (!livro) {
      throw new NotFoundException('Book not found.');
    }
    return livro;
  }

  @Post()
  async criar(@Body() livro: Livro): Promise<void> {
    this.livrosService.criar(livro);
  }

  @Put()
  async alterar(@Body() livro: Livro): Promise<Livro> {
    return await this.livrosService.alterar(livro);
  }

  @Delete(':id')
  async apagar(@Param() params): Promise<void> {
    const livroDeleted = await this.livrosService.apagar(params.id);
    if (!livroDeleted) {
      throw new NotFoundException('Livro not found');
    }
  }
}
