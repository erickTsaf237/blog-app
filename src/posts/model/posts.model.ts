import { Table, Model, HasMany, ForeignKey, BelongsTo, Column} from 'sequelize-typescript';
import { Picture } from '../../pictures/model/pictures.model';
import { Visibility } from '../../visibilities/model/visibilities.model';



@Table
export class Poste extends Model{

  @ForeignKey(()=>Picture)
  @Column
  id_picture: number

  @ForeignKey(()=>Visibility)
  @Column
  id_visibility: number

  @Column
  text: string

  @BelongsTo(()=>Picture)
  picture: Picture

  @BelongsTo(()=>Visibility)
  visibility: Visibility
}

