import { Injectable } from '@nestjs/common';
import { Possess } from './model/possess.model';
import { InjectModel } from '@nestjs/sequelize';
import { Album } from '../albums/model/albums.model';
import { Poste } from '../posts/model/posts.model';
import { Message } from '../tools/message';

@Injectable()
export class PossessService {

  constructor(@InjectModel(Possess) private possessModel: typeof Possess) {}

  //@ts-ignore
  async deletePossess(id: string) {
    return this.possessModel.findByPk(id, {include:[Album, Poste]})
      .then((result)=>{
        if (result instanceof Possess){
          return this.possessModel.destroy({where:{id}})
            .then(()=>{
              return new Message(`Successfully deleted`, result)
            })
        }
        return new Message('The you whant to delete doesn\'t exist', undefined)
      })
      .catch(error=> new Message(error, undefined))

  }

  //@ts-ignore
  async findOnePossess(id: string) {
    return await this.possessModel.findByPk(id, {include:[Album, Poste]})
      .then(result=>{
        // if (result instanceof Possess && result !== null){
        //   return new Message(`Succefuly `)
        // }
      })
  }

  //@ts-ignore
  async findAllPossess() {

  }

  //@ts-ignore
  async updatePossess(updatedPossess: Possess) {

  }

  //@ts-ignore
  async createPossess(newPossess: Possess) {

  }
}
