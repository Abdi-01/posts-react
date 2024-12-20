"use client";
import { useAppSelector } from "@/lib/redux/hooks";
import { redirect } from "next/navigation";
import * as React from "react";

interface IAuthGuardProps {
  children: React.ReactNode;
  page?: string;
}

const AuthGuard: React.FunctionComponent<IAuthGuardProps> = ({
  children,
  page,
}) => {
  const userData = useAppSelector((state) => state.userReducer);

  const protectedPage: string[] = ["sign-in", "sign-up"];
  React.useEffect(() => {
    if (Object.hasOwn(userData, "isAuth")) {
      if (userData?.isAuth && protectedPage.includes(page || "")) {
        console.log("CHECK AUTH GUARD A", userData, page);
        redirect("/");
      }
    }
  }, [userData]);

  return children;
};

export default AuthGuard;
