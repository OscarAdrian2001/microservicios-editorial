import { PrimaryGeneratedColumn, Column } from "typeorm";

export abstract class AuthorBase {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  name!: string;

  @Column({ unique: true, nullable: false })
  email!: string;
}
