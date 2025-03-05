import { User } from "./user";

export interface IArticle {
  objectId: string;
  title: string;
  thumbnail: string;
  category: string;
  content: string;
  published: boolean;
  ___class: string;
  ownerId: string | null;
  created: number;
  updated: number | null;
  accountData: any;
}
