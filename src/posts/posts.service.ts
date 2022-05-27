import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Poste } from './model/posts.model';
import { Message } from '../tools/message';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Poste) private posteModel: typeof Poste) {}




//@ts-ignore
  async deletePost(id: string):Message {
    return await this.posteModel.findByPk(id)
      .then(result=>{
        if (result instanceof Poste && result !== null){
        return this.posteModel.destroy({where:{id}})
          .then(()=>{return new Message("Successfully deleted", result)})
          }
        return new Message(`The post of id ${id} doesn't exist`, undefined)
      })
      .catch(error=>{
        return new Message(error, undefined)
      })
  }

  //@ts-ignore
  async updatePoste(updatedPost: Poste):Message {
    let id = updatedPost.id
    return await this.posteModel.findByPk(id)
      .then(result=>{
        if (result instanceof Poste && result !== null){
          return this.posteModel.update(updatedPost, {where:{id}})
            .then(()=>{ return this.posteModel.findByPk(id)})
            .then(res=>{ return new Message(`succeluly found the Post of id ${id}`, res)})
        }
      })
      .catch(error=>{
        return new Message(error, undefined)
      })
  }

  //@ts-ignore
  async createPost(newPost: Poste):Message {
    // @ts-ignore
    return await this.posteModel.create(newPost)
      .then(result=>{
        return new Message("succefuly create Post", result)
      })
      .catch(error=>{
        return new Message(error, undefined)
      })

  }

  //@ts-ignore
  async findOnePost(id: string):Message {
    return await this.posteModel.findByPk(id)
      .then((result)=>{
        if (result instanceof Poste && result !== undefined)
          return new Message(`Succefuly found the Post of Id ${id}`, result)
        return new Message(`The Post of id ${id} doesn't exist`, undefined)
      })
      .catch(error=> {
        return new Message(error, undefined)
      })
  }

  //@ts-ignore
  async findAllPosts():Message {
    return await this.posteModel.findAll()
      .then(result=>{
        return new Message("List of All Posts", result)
      })
      .catch(error=>{
        return new Message(error, undefined)
      })
  }
}
