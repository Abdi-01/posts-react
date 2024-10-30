import FormInput from "@/components/FormInput";
import * as React from "react";
import AccountImage from "../../../public/access_account.svg";
import Image from "next/image";

interface ISignInProps { }

const SignIn: React.FunctionComponent<ISignInProps> = (props) => {
  return (
    <div className="px-24 py-14 bg-slate-800 h-screen flex items-center gap-16">
      <div id="left" className="w-1/2 h-fit rounded-2xl px-10 py-8 bg-white">
        <h1 className="text-2xl">Sign in </h1>
        <div className="py-6 space-y-5">
          <FormInput type="text" label="Email" />
          <FormInput type="password" label="Password" />
          <FormInput type="password" label="Confirmation Password" />
          <div className="flex items-center gap-4">
            <button className="bg-gray-400 text-white px-4 py-2 rounded-full shadow">
              Sign Up
            </button>
            <p className="text-sm">Already have an account ?</p>
          </div>
        </div>
      </div>
      <div id="right" className="w-1/2 flex flex-col justify-center space-y-5">
        <h1 className="text-3xl text-white font-bold">Post your story</h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          ipsam, blanditiis omnis nulla vel alias accusantium placeat voluptates
          odit rem ab molestias maxime voluptatum, ipsa dicta modi est voluptas
          eos.
        </p>
        <Image src={AccountImage} alt="image" width={350} className="m-auto" />

      </div>
    </div>
  );
};

export default SignIn;
