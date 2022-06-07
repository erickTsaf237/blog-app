import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Album } from './model/albums.model';
import { Message } from '../tools/message';
import { User } from '../users/model/users.model';
import { Visibility } from '../visibilities/model/visibilities.model';
import { Picture } from '../pictures/model/pictures.model';

@Injectable()
export class AlbumsService {

  constructor(
    @InjectModel(Album)
    private albumModel: typeof Album
  ) {}


  //@ts-ignore
  async findOneAlbum(id: string): Message {
    return this.albumModel.findOne({where:{id}, include:[Visibility, User] })
      .then(result=>{
        return new Message(`succefuly found the album of id ${id}`, result)
      })
      .catch(error=>{
        return new Message(error, undefined)
      })
    console.log('iiiiiiii')
  }

  //@ts-ignore
  async createAlbum(newAlbum: Album):Message {
    // @ts-ignore
    return await this.albumModel.create(newAlbum)
      .then((result)=>{
        return new Message("Succefuly created", result)
      })
      .catch(error=>{
        return new Message(error, undefined)
      })
  }

  //@ts-ignore
  async findAllAlbum(id_visibility: number= 1): Message {
    return await this.albumModel.findAll({include:[User, Picture], where:{id_visibility}})
      .then((result)=>{
        return new Message("List of all albums", result)
      })
      .catch(error=>{ return new Message(error, undefined)})
  }


  deleteAlbum(id: string) {
    return this.albumModel.findByPk(id)
      .then(result=>{
        if (result instanceof Album){
          return this.albumModel.destroy({where: { id }})
            .then(()=>{ return new Message("Succefuly deleted Album", result)})
        }
        return new Message(`The Album of id ${id} does'n exist`, undefined)
      })
      .catch(error=>{
        return new Message(error, undefined)
      })
  }

  updateAlbum(updatedAlbum: Album) {
    let id = updatedAlbum.id
    return this.albumModel.findByPk(id)
      .then(result=>{
        if (result instanceof Album){
          return this.albumModel.update(updatedAlbum, {where: { id }})
            .then(()=>{
              return this.albumModel.findByPk(id)
                .then(res=>{ return new  Message("Seccefuly updated", res)})
            })
        }
        return new Message(`The Album of id ${id} doesn't exist`, undefined)
      })
      .catch(error=>{
        return new Message(error, undefined)
      })
  }
}
