import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm"

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "varchar", nullable: false})
  email: string;

  @Column({type: "varchar", nullable: false})
  password: string;
}