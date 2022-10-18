import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn } from "typeorm"

@Entity()
export class Tasks extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({type: "varchar", nullable: false})
  email: string;

  @Column({type: "varchar", nullable: false})
  task: string;

  @Column({type: "varchar", nullable: false})
  name: string;

  @Column({type: "boolean", nullable: false, default: false})
  status: boolean;

  @Column({type: "boolean", nullable: false, default: false})
  changed: boolean;

  @CreateDateColumn({nullable: false, default: new Date().toISOString()})
  createdAt: Date;
}