import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../users/model/users.model';
import { Picture } from './model/pictures.model';
import { Message } from '../tools/message';

@Injectable()
export class PicturesService {

  constructor(
    @InjectModel(Picture)
    private pictureModel: typeof Picture,
  ) {}


  getAllPictures() {
    return this.pictureModel.findAll()
      .then(result => {return new Message("list Of All pictures", result)})
      .catch(error =>{
        return new Message(error, undefined)
      })
  }

  getOnePicture(id: string) {
  return this.pictureModel.findByPk(id)
      .then(result => {return new Message("successfully get the user ", result)})
      .catch(error =>{
        return new Message(error, undefined)
      })
  }

  //@ts-ignore
  async updatePicture(updatedPicture: Picture):Message {
     let id = updatedPicture.id;
     return await this.pictureModel.findByPk(id)
       .then(result =>{
         if(result instanceof Picture){
           return this.pictureModel.update(updatedPicture, {where: {id}})
             .then(()=>{
               return this.pictureModel.findByPk(id)
             })
             .then((r)=>{ return new Message("successfully updated", r)})
         }
         return new Message("The picture you search doesn't exist", undefined)
       })
       .catch(error =>{ return new Message(error, undefined)})
  }


  createPicture(newPicture: Picture) {
    // @ts-ignore
    return this.pictureModel.create(newPicture)
      .then(result=>{return new Message("successfully created", Message)})
      .catch(error =>{ return new Message(error, undefined)})
  }

  deletePicture(id: string) {
    return this.pictureModel.findByPk(id)
      .then(result=>{
        if(result instanceof Picture)
          return this.pictureModel.destroy({where: {id}})
            .then(()=>{
              return new Message("successfully deleted", result)
        })
      return new Message("The picture you search doesn't exist", undefined)
    })
      .catch(error =>{
        return new Message(error, undefined)
      })

  }
}
