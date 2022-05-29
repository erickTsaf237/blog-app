import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './model/comments.model';
import { Message } from '../tools/message';
import { Poste } from '../posts/model/posts.model';
import { User } from '../users/model/users.model';


@Injectable()
export class CommentsService {

  constructor(@InjectModel(Comment) private commentModel: typeof Comment) {
  }

//@ts-ignore
  async deleteComment(id: string) {
    return await this.commentModel.findByPk(id)
      .then(result=>{
        if (result instanceof Comment && result !== null)
          this.commentModel.destroy({where:{id}})
            .then(()=>{ return new Message(`Succefully delete the comment of Id ${id}`, result)})
          return new Message(`The comment of Id ${id} doesn't exist`, undefined)
      })
      .catch(error=> new Message(error, undefined))

  }

  //@ts-ignore
  async updateComment(updatedComment: Comment) {
    let id = updatedComment.id
    return await this.commentModel.update(updatedComment, {where:{id}})
      .then(()=>{
        return this.commentModel.findByPk(id)
          .then(result=>{
            return new Message(`Succefully updated the comment`, result)
          })
      })
      .catch(error=>{
        return new Message(error, undefined)
      })

  }

  //@ts-ignore
  async createComment(newComment: Comment) {
    // @ts-ignore
    return this.commentModel.create(newComment)
      .then(result=>{
        return new Message("Successfully create comment", result)
      })
      .catch(error => {
        return new Message(error, undefined)
      })
  }

  //@ts-ignore
  async findOneComment(id: string) {
    return this.commentModel.findByPk(id, {include: [Poste, User]})
      .then(result=>{
        if (result instanceof Comment && result !== undefined)
          return new Message("success", result)
        return new Message(`The comment of id ${id} doesn't exist`, undefined)
      })
      .catch(error=>{
        return new Message(error, undefined)
      })
  }

  //@ts-ignore
  async findAllComments() {
    return this.commentModel.findAll({include: [Poste, User]})
      .then(result=>{
        return new Message("List of All comment", result)
      })
      .catch(error=>{
        return new Message(error, undefined)
      })
  }
}
