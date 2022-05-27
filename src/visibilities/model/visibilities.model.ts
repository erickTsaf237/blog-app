import { Model, Table, Column, HasMany } from 'sequelize-typescript';

@Table
export class Visibility extends Model{
  @Column
  value:string

  // @HasMany(() => User)
  // user: User[]

}