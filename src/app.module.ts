import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User}  from './users/model/users.model'
import { SequelizeModule } from '@nestjs/sequelize';
import { PicturesModule } from './pictures/pictures.module';
import { Picture } from './pictures/model/pictures.model';
import { VisibilitiesController } from './visibilities/visibilities.controller';
import { VisibilitiesService } from './visibilities/visibilities.service';
import { VisibilitiesModule } from './visibilities/visibilities.module';
import { Visibility } from './visibilities/model/visibilities.model';

@Module({
  imports: [UsersModule,PicturesModule, VisibilitiesModule, SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'blog',
    password: 'blog-app',
    database: 'blog',
    models: [User, Picture, Visibility,],
    synchronize: true,
    autoLoadModels: true,
  }), ],
  controllers: [AppController, VisibilitiesController],
  providers: [AppService, VisibilitiesService],

})
export class AppModule {}
