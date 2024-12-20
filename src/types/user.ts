export type User = {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  imgprofile: string;
  isVerified: boolean;
  phone?: string | null;
  website?: string | null;
};
