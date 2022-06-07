

import { Table, BelongsTo, HasMany, ForeignKey, Model, Column } from 'sequelize-typescript';
import { Poste } from '../../posts/model/posts.model';
import { User } from '../../users/model/users.model';

@Table
export class Share extends Model{
  @ForeignKey(()=>User)
  @Column
  id_users: number

  @ForeignKey(()=>Poste)
  @Column
  id_post: number

  @BelongsTo(()=>User)
  user: User

  @BelongsTo(()=>Poste)
  poste: Poste

}

