import { Entity, Column } from "typeorm";
import { Publication } from "./Publication";

@Entity("articles")
export class Article extends Publication {

  @Column({ default: "GENERAL" })
  category!: string;
}
