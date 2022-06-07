

import { Table, BelongsTo, HasMany, ForeignKey, Model, Column } from 'sequelize-typescript';
import { Album } from '../../albums/model/albums.model';
import { User } from '../../users/model/users.model';

@Table
export class Work_on extends Model{
  @ForeignKey(()=>Album)
  @Column
  id_album: number

  @ForeignKey(()=>User)
  @Column
  id_users: number

  @BelongsTo(()=>Album)
  album: Album

  @BelongsTo(()=>User)
  user: User

}
