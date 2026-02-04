import { Entity, Column } from "typeorm";
import { AuthorBase } from "./AuthorBase";

@Entity()
export class Author extends AuthorBase {

  @Column({ nullable: true })
  biography?: string;
}
