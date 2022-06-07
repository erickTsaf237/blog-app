import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User}  from './users/model/users.model'
import { SequelizeModule } from '@nestjs/sequelize';
import { PicturesModule } from './pictures/pictures.module';
import { Picture } from './pictures/model/pictures.model';
import { VisibilitiesModule } from './visibilities/visibilities.module';
import { Visibility } from './visibilities/model/visibilities.model';
import { AlbumsModule } from './albums/albums.module';
import { Album } from './albums/model/albums.model';
import { PostsModule } from './posts/posts.module';
import { Poste } from './posts/model/posts.model';
import { CommentsModule } from './comments/comments.module';
import { PossessModule } from './possess/possess.module';
import { SharesModule } from './shares/shares.module';
import { Possess } from './possess/model/possess.model';
import { Share } from './shares/model/shares.model';
import { WorkOnsModule } from './work_ons/work_ons.module';
import { ContentsModule } from './contents/contents.module';
import {Comment} from './comments/model/comments.model';
import { Work_on } from './work_ons/model/work_ons';

// @ts-ignore
@Module({
  imports: [UsersModule,PicturesModule, Album, Poste, Possess, Share,
    VisibilitiesModule, SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'blog',
    password: 'blog-app',
    database: 'blog',
    models: [User, Picture, Visibility, Album, Comment, Poste, Possess, Share, Work_on ],
    synchronize: true,
    autoLoadModels: false,

  }), AlbumsModule, PostsModule, CommentsModule, PossessModule, SharesModule, WorkOnsModule, ContentsModule, ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
