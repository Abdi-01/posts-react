"use client";
import FormInput from "@/components/FormInput";
import * as React from "react";
import AccountImage from "../../../public/access_account.svg";
import Image from "next/image";
import { callAPI } from "../../config/axios";
import { useAppDispatch } from "@/lib/redux/hooks";
import { setSignIn } from "@/lib/redux/features/userSlice";
import { useRouter } from "next/navigation";
interface ISignInProps {}

const SignIn: React.FunctionComponent<ISignInProps> = (props) => {
  const router = useRouter();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  // Define dispatch from useAppDispatch for execute function actions from redux
  const dispatch = useAppDispatch();

  const onSignIn = async () => {
    try {
      const response = await callAPI.get(
        `/users?email=${email}&password=${password}`
      );
      console.log("CHECK SIGNIN RESPONSE : ", response.data);
      dispatch(setSignIn(response.data[0])); // store data to global store redux
      localStorage.setItem("dataUser", JSON.stringify(response.data[0]));
      router.replace("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-24 py-14 bg-slate-800 h-screen flex items-center gap-16">
      <div id="left" className="w-1/2 h-fit rounded-2xl px-10 py-8 bg-white">
        <h1 className="text-2xl">Sign in </h1>
        <div className="py-6 space-y-5">
          <FormInput
            type="text"
            label="Email"
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            label="Password"
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded-full shadow"
              onClick={onSignIn}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div id="right" className="w-1/2 flex flex-col justify-center space-y-5">
        <h1 className="text-3xl text-white font-bold">Post your story</h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Image src={AccountImage} alt="image" width={350} className="m-auto" />
      </div>
    </div>
  );
};

export default SignIn;
