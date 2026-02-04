export type Category = "NOVELA" | "POESIA" | "ENSAYO";

export interface Publication {
  id: number;
  title: string;
  content: string;
  authorId: number;
  category: Category | "";
}
