// export type User = {
//   id: number;
//   username: string;
//   firstname: string;
//   lastname: string;
//   email: string;
//   imgprofile: string;
//   isVerified: boolean;
//   phone?: string | null;
//   website?: string | null;
// };

interface UserType {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  imgprofile: string;
  isVerified: boolean;
  phone?: string | null;
  website?: string | null;
  token?: string | null;
}

type UserResponseType = {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  imgprofile: string;
  isVerified: boolean;
  phone?: string | null;
  website?: string | null;
  token?: string | null;
};

export type { UserType, UserResponseType };
