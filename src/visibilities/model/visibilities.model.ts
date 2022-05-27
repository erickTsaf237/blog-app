import { Model, Table, Column, HasMany } from 'sequelize-typescript';
import { User } from '../../users/model/users.model';

@Table
export class Visibility extends Model{
  @Column
  value:string

  // @HasMany(() => User)
  // user: User[]

}