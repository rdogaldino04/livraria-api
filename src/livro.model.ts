import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Livro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  codigo: string;

  @Column({ length: 100 })
  nome: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  preco: number;

  constructor(codigo: string, nome: string, preco: number) {
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
  }
}
