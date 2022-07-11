import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Livro } from './livro.model';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '?',
      port: 5432,
      database: '?',
      username: '?',
      password:
        '?',
      entities: [Livro],
      synchronize: true, // never use TRUE in production!
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
  ],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
