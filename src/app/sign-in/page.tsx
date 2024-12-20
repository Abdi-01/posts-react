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

  return (
    <div className="px-12 md:px-24 py-14 bg-slate-800 h-screen flex flex-col md:flex-row items-center gap-16">
      <div
        id="left"
        className="w-full md:w-1/2 h-fit order-2 md:order-1 rounded-2xl px-5 md:px-10 py-4 md:py-8 bg-white"
      >
        <h1 className="text-2xl">Sign in </h1>
        <div className="py-6 space-y-5">
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
              onClick={onSignIn}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
      <div
        id="right"
        className="w-full md:w-1/2 flex flex-col order-1 md:order-2 justify-center space-y-5"
      >
        <h1 className="text-3xl text-white font-bold">Post your story</h1>
        <p className="text-white">
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
  );
};

export default SignInPage;
