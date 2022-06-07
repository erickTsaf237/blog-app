import { Injectable } from '@nestjs/common';
import { User } from './model/users.model';
import { InjectModel } from '@nestjs/sequelize';
import { hash } from 'bcrypt';
import { Message } from '../tools/message';
import { Picture } from '../pictures/model/pictures.model';


@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {
  }

  //@ts-ignore
  async createUser(newUser: User): Message {
    const user = newUser;
    const saltOrRound = 10;
    user.password = await hash(newUser.password, saltOrRound);
    let message: Message;
    // @ts-ignore
    message = await this.userModel.create(user)
      .then(result => {
        if (result instanceof User)
          return new Message('successfully registered', result);
        return new Message('registration faille, ', undefined);
      })
      .catch(error => {
        return new Message(error, undefined);
      });
    return message;
  }

  //@ts-ignore
  async updateUser(updatedUser: User): Message {
    let id = updatedUser.id;
    return await this.userModel.findByPk(id)
      .then(result => {
        if (result instanceof User) {
          return this.userModel.update(updatedUser, { where: id })
            .then(() => {
              return new Message('successfully updated', result);
            })
        }
        return new Message("the user you want to update doesn't exists ", undefined)
      })
      .catch(error => new Message(error, undefined))
  }

  //@ts-ignore
  async deleteUser(id: string): Message {
    return  await this.userModel.findByPk(id)
      .then(result=>{
        if(result instanceof User){
          return this.userModel.destroy({ where: { id } }).then (() =>{
            return new Message("successfully deleted", result)
          })
        }
        return new Message("the user you want to delete doesn't exists", undefined)
      })
      .catch(error =>{
        return new Message(error, undefined)
      })
  }

  //@ts-ignore
  async findOneUser(id: string): Message {
    return  await this.userModel.findByPk(id, {include: Picture})
      .then(result=>{
        if(result instanceof User)
            return new Message(`The User of id ${id} successfully found`, result)
        return new Message(`The user of id ${id} doesn't exists`, undefined)
      })
      .catch(error =>{
        return new Message(error, undefined)
      })
  }

  //@ts-ignore
  async findAllUser(): Message {
    return  await this.userModel.findAll()
      .then(result=>{
      return new Message("List of all users", result)
    })
      .catch(error=>{
        return new Message({ message:"Error !!!!", error }.toString(), undefined)
      })
  }

  getAllUsersBy(limit: number, offset: number= 10) {
    return this.userModel.findAll({limit: limit, offset: offset})
  }
}
