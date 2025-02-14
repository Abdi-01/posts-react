"use client";
import FormInput from "@/components/core/FormInput";
import * as React from "react";
import AccountImage from "../../../public/access_account.svg";
import Image from "next/image";
import { callAPI } from "../../config/axios";
import { useAppDispatch } from "@/lib/redux/hooks";
import { setSignIn } from "@/lib/redux/features/userSlice";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import axios from "axios";

const SignInPage: React.FunctionComponent = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  // Define dispatch from useAppDispatch for execute function actions from redux
  const dispatch = useAppDispatch();

  const onSignIn = async () => {
    try {
      const response = await callAPI.post(`/user/signin`, {
        email,
        password,
      });
      console.log("CHECK SIGNIN RESPONSE : ", response.data);
      dispatch(setSignIn({ ...response.data, isAuth: true })); // store data to global store redux
      localStorage.setItem("tkn", response.data.token);
      router.replace("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  const nextAuthSignIn = async () => {
    try {
      const response = await axios.post(`/api/login`, {
        email,
        password,
        type: "credentials",
      });
      console.log("CHECK SIGNIN RESPONSE PAGE: ", response.data);
      if (response.data.success) {
        router.replace("/posts");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-slate-800 h-screen px-6 py-10 md:py-52">
      <div className="container m-auto flex flex-col md:flex-row items-center gap-5 md:gap-16">
        <div
          id="left"
          className="w-full md:w-1/2 h-fit order-2 md:order-1 rounded-2xl px-5 md:px-10 py-4 md:py-8 bg-white"
        >
          <h2 className="text-2xl">Sign in </h2>
          <form className="py-6 space-y-5">
            <FormInput
              name="email"
              type="text"
              label="Email"
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <FormInput
              name="password"
              type="password"
              label="Password"
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <div className="flex items-center justify-end gap-4">
              <Button
                type="button"
                className="bg-slate-700 text-white px-4 py-2 shadow"
                onClick={nextAuthSignIn}
              >
                Sign In
              </Button>
            </div>
          </form>
        </div>
        <div
          id="right"
          className="w-full md:w-1/2 flex flex-col order-1 md:order-2 justify-center md:space-y-5"
        >
          <h2 className="text-3xl text-white font-bold">Post your story</h2>
          <p className="text-white text-2xl font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="hidden md:block space-y-5">
            <Image
              src={AccountImage}
              alt="image"
              width={350}
              className="m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
