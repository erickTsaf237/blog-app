import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Visibility } from './model/visibilities.model';
import { Message } from '../tools/message';
import { util } from 'prettier';
import hasNewline = util.hasNewline;

@Injectable()
export class VisibilitiesService {

  constructor(
    @InjectModel(Visibility)
    private visibilityModel: typeof Visibility,
  ) {}

  //@ts-ignore
  async findOneVisibity(id: string):Message {
    return await this.visibilityModel.findByPk(id)
      .then(result =>{
        if (result instanceof Visibility){
          return new Message(`Succefully get visibility of id ${id}`, result)
        }
        return new Message(`The visibility of id ${id} doesn't exist`, undefined)
      })
      .catch(error =>{
        return new Message(error, undefined)
      })
  }
  //@ts-ignore
  async createVisibility(newVisibility: Visibility):Message {
    // @ts-ignore
    return await this.visibilityModel.create(newVisibility)
      .then(result=>{
        return new Message('Seccefuly created', result)
      })
      .catch(error =>{
        return new Message(error, undefined)
      })
  }

  findAllVisibilities() {
    return this.visibilityModel.findAll()
  }
}
