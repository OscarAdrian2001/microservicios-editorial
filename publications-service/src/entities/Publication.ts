import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { PublicationStatus } from "./PublicationStatus";

export abstract class Publication {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ type: "text" })
  content!: string;

  @Column()
  authorId!: number;

  @Column({
    type: "enum",
    enum: PublicationStatus,
    default: PublicationStatus.DRAFT
  })
  status!: PublicationStatus;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
