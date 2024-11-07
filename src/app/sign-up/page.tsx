"use client";
import * as React from "react";
import FormInput from "@/components/FormInput";
import Image from "next/image";
import AccountImage from "../../../public/access_account.svg";
import { callAPI } from "@/config/axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
interface ISignUpPageProps {}

const SignUpPage: React.FunctionComponent<ISignUpPageProps> = (props) => {
  const onSignUp = async () => {
    try {
      // Lengkapi fungsi ini hingga bisa menambah data ke file db.json
      const res = await callAPI.post("/users", {
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="px-5 md:px-24 py-14 bg-slate-800 h-screen block md:flex items-center gap-16">
      <div
        id="left"
        className="hidden md:flex w-full md:w-1/2 flex-col justify-center space-y-5"
      >
        <h1 className="text-3xl text-white font-bold">Post your story</h1>
        <p className="text-white text-2xl font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Image src={AccountImage} alt="image" width={350} className="m-auto" />
      </div>
      <div id="right" className="w-full md:w-1/2 h-fit">
        <Card>
          <CardHeader>
            <h1 className="text-2xl">Sign up now</h1>
          </CardHeader>
          <CardContent>
            <div className="py-2 md:py-6 space-y-5">
              <div className="flex gap-8">
                <FormInput type="text" label="First name" />
                <FormInput type="text" label="Last name" />
              </div>
              <FormInput type="text" label="Email" />
              <FormInput type="password" label="Password" />
              <FormInput type="password" label="Confirmation Password" />
              <div className="flex items-center gap-4">
                <Button className="bg-gray-400 text-white px-2 md:px-4 py-1 md:py-2 text-sm md:text-base rounded-full shadow">
                  Sign Up
                </Button>
                <p className="text-sm">Already have an account ?</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUpPage;
