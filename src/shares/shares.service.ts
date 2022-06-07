import { Injectable } from '@nestjs/common';
import { Share } from './model/shares.model';
import { InjectModel } from '@nestjs/sequelize';
import { Poste } from '../posts/model/posts.model';
import { Message } from '../tools/message';
import { User } from '../users/model/users.model';

@Injectable()
export class SharesService {

  constructor(@InjectModel(Share) private shareModel: typeof Share) {}

  //@ts-ignore
  async findOneShare(id: string): Message {
    return await this.shareModel.findByPk(id, { include: [User, Poste] })
      .then(result => {
        if (result instanceof Share && result !== null){
          return new Message(`Succefully get share`, result)
        }
        return new Message(`The share you search doesn't exist`, undefined)
      })
      .catch(error=>{
        return new Message(error, undefined)
      })

  }

  deleteShare(id: string) {
    return this.shareModel.findByPk(id, { include: [User, Poste] })
      .then((result) => {
        if (result instanceof Share) {
          return this.shareModel.destroy({ where: { id } })
            .then(() => {
              return new Message(`Successfully deleted`, result);
            });
        }
        return new Message('The you whant to delete doesn\'t exist', undefined);
      })
      .catch(error => new Message(error, undefined));


  }

  findAllShares() {
    return this.shareModel.findAll()
      .then(result => {
        return new Message('List of All share', result);
      })
      .catch(error => {
        return new Message(error, undefined);
      });

  }

  //@ts-ignore
  async updateShare(updatedShare: Share): Message {
    let id = updatedShare.id
    return await this.shareModel.update(updatedShare,{where:{id}})
      .then(()=>{
        return this.shareModel.findByPk<Share|undefined>(id)
          .then(result=>{
            if (result instanceof Share && result)
              return new Message('Succefully updated the share', result)
            return new Message(`The share of id ${id} doesn't exist`, undefined)
          })
      })
      .catch(error=> new Message(error, undefined))

  }

  createShare(newShare: Share) {
    //@ts-ignore
    return this.shareModel.create(newShare)
      .then(result=> new Message("Successfully create the share", result))
      .catch(error=> new Message(error, undefined))

  }

}
