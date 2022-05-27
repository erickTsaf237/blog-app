import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Visibility } from './model/visibilities.model';
import { Message } from '../tools/message';

@Injectable()
export class VisibilitiesService {

  constructor(
    @InjectModel(Visibility)
    private visibilityModel: typeof Visibility,
  ) {}

  findOneVisibity(id: string) {
    return this.visibilityModel.findByPk(id)
      .catch(result =>{
        if (result instanceof Visibility){
          return new Message(`Succefully get visibility of id ${id}`, result)
        }
        return new Message(`The visibility of id ${id} doesn't exist`, undefined)
      })
      .catch(error =>{
        return new Message(error, undefined)
      })
  }
}
