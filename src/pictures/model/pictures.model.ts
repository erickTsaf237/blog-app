import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from '../../users/model/users.model';


@Table
export class Picture extends Model{

  @Column
    source: string;

  @HasMany(() => User)
  user: User[]
}