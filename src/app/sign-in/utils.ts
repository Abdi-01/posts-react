import { callAPI } from "@/config/axios";

export const onSignIn = async (email: string, password: string) => {
  try {
    const response = await callAPI.post(`/user/signin`, {
      email,
      password,
    });
    console.log("CHECK SIGNIN RESPONSE : ", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
