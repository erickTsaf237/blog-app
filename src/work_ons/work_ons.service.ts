import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Message } from '../tools/message';
import { Album } from '../albums/model/albums.model';
import { Poste } from '../posts/model/posts.model';
import { Work_on } from './model/work_ons';

@Injectable()
export class WorkOnsService {


  constructor(@InjectModel(Work_on) private workOnModel: typeof Work_on) {
  }

  //@ts-ignore
  async deleteWork_on(id: string):Message {
    return this.workOnModel.findByPk(id, { include: [Album, Poste] })
      .then((result) => {
        if (result instanceof Work_on) {
          return this.workOnModel.destroy({ where: { id } })
            .then(() => {
              return new Message(`Successfully deleted`, result);
            });
        }
        return new Message('The you whant to delete doesn\'t exist', undefined);
      })
      .catch(error => new Message(error, undefined));

  }

  //@ts-ignore
  async findOneWork_on(id: string):Message {
    return await this.workOnModel.findByPk(id, { include: [Album, Poste] })
      .then(result => {
        if (result instanceof Work_on && result !== null){
          return new Message(`Succefully get Work_on`, result)
        }
        return new Message(`The Work_on you search doesn't exist`, undefined)
      })
      .catch(error=>{
        return new Message(error, undefined)
      })
  }

  //@ts-ignore
  async findAllWork_ons():Message {
    return this.workOnModel.findAll()
      .then(result => {
        return new Message('List of All Work_on', result);
      })
      .catch(error => {
        return new Message(error, undefined);
      });

  }

  //@ts-ignore
  async updateWork_on(updatedWork_on: Work_on): Message {
    let id = updatedWork_on.id
    return await this.workOnModel.update(updatedWork_on,{where:{id}})
      .then(()=>{
        return this.workOnModel.findByPk<Work_on|undefined>(id)
          .then(result=>{
            if (result instanceof Work_on && result)
              return new Message('Succefully updated the Work_on', result)
            return new Message(`The Work_on of id ${id} doesn't exist`, undefined)
          })
      })
      .catch(error=> new Message(error, undefined))

  }

  //@ts-ignore
  async createWork_on(newWork_on: Work_on):Message {
    //@ts-ignore
    return this.workOnModel.create(newWork_on)
      .then(result=> new Message("Successfully create the Work_on", result))
      .catch(error=> new Message(error, undefined))

  }
  
}
