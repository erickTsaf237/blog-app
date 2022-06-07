

import { Table, BelongsTo, HasMany, ForeignKey, Model, Column } from 'sequelize-typescript';
import { Poste } from '../../posts/model/posts.model';
import { User } from '../../users/model/users.model';
import { Picture } from '../../pictures/model/pictures.model';

@Table
export class Content extends Model{
  @ForeignKey(()=>Picture)
  @Column
  id_Picture: number

  @ForeignKey(()=>Poste)
  @Column
  id_post: number

  @BelongsTo(()=>Picture)
  picture: Picture

  @BelongsTo(()=>Poste)
  poste: Poste

}
