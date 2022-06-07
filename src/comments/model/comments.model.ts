
import { Model, Table, BelongsTo, Column, ForeignKey, HasMany } from 'sequelize-typescript';
import { Poste } from '../../posts/model/posts.model';
import { User } from '../../users/model/users.model';


@Table
export class Comment extends Model{
  @ForeignKey(()=>Poste)
  @Column
  id_post: number

  @ForeignKey(()=>User)
  @Column
  id_users: number

  @Column
  text:string

  @Column
  i_like: boolean

  @BelongsTo(()=>Poste)
  poste: Poste

  @BelongsTo(()=>User)
  user: User


}

export type COMMENT = Comment
