

import { Table, BelongsTo, HasMany, ForeignKey, Model, Column } from 'sequelize-typescript';
import { Poste } from '../../posts/model/posts.model';
import { Album } from '../../albums/model/albums.model';

@Table
export class Possess extends Model{
  @ForeignKey(()=>Album)
  @Column
  id_album

  @ForeignKey(()=>Poste)
  @Column
  id_post

  @BelongsTo(()=>Album)
  album: Album

  @BelongsTo(()=>Poste)
  poste: Poste

}
