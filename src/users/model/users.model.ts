import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Picture } from '../../pictures/model/pictures.model';

@Table
export class User extends Model {

  @ForeignKey(() => Picture)
  @Column
  id_picture: number

  @Column
  firstName: string;

  @Column
  lastName: string

  @Column
  username: string

  @Column
  email: string

  @Column
  password: string

}