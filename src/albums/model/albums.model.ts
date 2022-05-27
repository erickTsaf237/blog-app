

import { Table, Model, Column, ForeignKey, BelongsTo, HasMany} from 'sequelize-typescript';
import { Visibility } from '../../visibilities/model/visibilities.model';
import { User } from '../../users/model/users.model';


@Table
export class Album extends Model{

  @ForeignKey(()=>Visibility)
  @Column
  id_visibility: number

  @ForeignKey(()=>User)
  @Column
  id_user: number

  @Column
  title: string

  @Column
  description: string

  @BelongsTo(()=>Visibility)
  visibility:Visibility

  @BelongsTo(()=>User)
  user:User

}