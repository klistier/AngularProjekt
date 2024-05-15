import { BlogComment } from "./blogcomment.model";

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  email: string;
  date: string;
  comments?: BlogComment[];
}