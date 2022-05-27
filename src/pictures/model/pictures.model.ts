import { Column, CreatedAt, DefaultScope, HasMany, Model, Table, UpdatedAt } from 'sequelize-typescript';
import { User } from '../../users/model/users.model';
import { exists, fchmod } from 'fs';
import disableAutomock = jest.disableAutomock;


// @ts-ignore
// @ts-ignore
// @ts-ignore
@Table
export class Picture extends Model{

  @Column
    source: string;

  @HasMany(() => User)
  user: User[]

  @CreatedAt
  createdAt:false

}