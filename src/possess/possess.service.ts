import { Injectable } from '@nestjs/common';
import { Possess } from './model/possess.model';
import { InjectModel } from '@nestjs/sequelize';
import { Album } from '../albums/model/albums.model';
import { Poste } from '../posts/model/posts.model';
import { Message } from '../tools/message';

@Injectable()
export class PossessService {

  constructor(@InjectModel(Possess) private possessModel: typeof Possess) {
  }

  //@ts-ignore
  async deletePossess(id: string):Message {
    return this.possessModel.findByPk(id, { include: [Album, Poste] })
      .then((result) => {
        if (result instanceof Possess) {
          return this.possessModel.destroy({ where: { id } })
            .then(() => {
              return new Message(`Successfully deleted`, result);
            });
        }
        return new Message('The you whant to delete doesn\'t exist', undefined);
      })
      .catch(error => new Message(error, undefined));

  }

  //@ts-ignore
  async findOnePossess(id: string):Message {
    return await this.possessModel.findByPk(id, { include: [Album, Poste] })
      .then(result => {
        if (result instanceof Possess && result !== null){
          return new Message(`Succefully get possess`, result)
        }
        return new Message(`The possess you search doesn't exist`, undefined)
      })
      .catch(error=>{
        return new Message(error, undefined)
      })
  }

  //@ts-ignore
  async findAllPossess(id_album: string = '-1'):Message {
    let maPromise;
    if (id_album === '-1')
      maPromise = this.possessModel.findAll()
    else
      maPromise = this.possessModel.findAll({where:{id_album}, include:[Poste]})
    return maPromise
      .then(result => {
        return new Message('List of All Possess', result);
      })
      .catch(error => {
        return new Message(error, undefined);
      });

  }

  //@ts-ignore
  async updatePossess(updatedPossess: Possess): Message {
    let id = updatedPossess.id
    return await this.possessModel.update(updatedPossess,{where:{id}})
      .then(()=>{
        return this.possessModel.findByPk<Possess|undefined>(id)
          .then(result=>{
            if (result instanceof Possess && result)
              return new Message('Succefully updated the Possess', result)
            return new Message(`The possess of id ${id} doesn't exist`, undefined)
          })
      })
      .catch(error=> new Message(error, undefined))

  }

  //@ts-ignore
  async createPossess(newPossess: Possess):Message {
    //@ts-ignore
    return this.possessModel.create(newPossess)
      .then(result=> new Message("Successfully create the possess", result))
      .catch(error=> new Message(error, undefined))

  }
}
