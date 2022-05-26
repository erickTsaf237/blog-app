import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User}  from './users/model/users.model'
import { SequelizeModule } from '@nestjs/sequelize';
import { PicturesModule } from './pictures/pictures.module';

@Module({
  imports: [UsersModule, SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'blog',
    password: 'blog-app',
    database: 'blog',
    models: [User],
    synchronize: true,
    autoLoadModels: true,
  }), PicturesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
