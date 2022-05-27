import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Picture } from '../../pictures/model/pictures.model';

@Table
export class User extends Model {

  @ForeignKey(() => Picture)
  @Column
  id_picture: number

  @Column
  firstname: string;

  @Column
  lastname: string

  @Column
  username: string

  @Column
  email: string

  @Column
  password: string


  @BelongsTo(()=>Picture)
  picture: Picture

}