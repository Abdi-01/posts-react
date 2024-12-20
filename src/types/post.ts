import { User } from "./user";

export type Post = {
  id: number;
  title: string;
  body: string;
  imageUrl?: string;
  published: boolean;
  user: User;
};
