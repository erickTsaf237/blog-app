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
import { AlbumsModule } from './albums/albums.module';
import { Album } from './albums/model/albums.model';
import { PostsModule } from './posts/posts.module';
import { Poste } from './posts/model/posts.model';

// @ts-ignore
@Module({
  imports: [UsersModule,PicturesModule,
    VisibilitiesModule, SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'blog',
    password: 'blog-app',
    database: 'blog',
    models: [User, Picture, Visibility, Album, Poste],
    synchronize: true,
    autoLoadModels: false,
  }), AlbumsModule, PostsModule, ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
