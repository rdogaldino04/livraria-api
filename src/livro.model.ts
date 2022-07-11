import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Livro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  codigo: string;

  @Column({ length: 100, nullable: false })
  nome: string;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
    default: 0,
    nullable: false,
  })
  preco: number;
}
