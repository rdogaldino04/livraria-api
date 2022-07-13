import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  private readonly livros: Livro[] = [];

  constructor(
    @InjectRepository(Livro)
    private readonly livroRepository: Repository<Livro>,
  ) {}

  async obterTodos(): Promise<Livro[]> {
    return this.livroRepository.find();
  }

  async obterUm(id: number): Promise<Livro> {
    const where = new Livro();
    where.id = id;
    return this.livroRepository.findOne({ where });
  }

  async criar(livro: Livro): Promise<void> {
    this.livroRepository.save(livro);
  }

  async alterar(livro: Livro): Promise<Livro> {
    if (!livro.id) livro.id = 0;
    return await this.livroRepository.save(livro);
  }

  async apagar(id: number): Promise<Livro> {
    const livroFindById = await this.obterUm(id);
    if (livroFindById) {
      this.livroRepository.delete(livroFindById.id);
      return livroFindById;
    }
    return null;
  }
}
