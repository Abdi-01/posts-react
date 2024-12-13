import * as React from "react";
import { Metadata } from "next";
import AuthGuard from "@/guard/AuthGuard";

interface IProfileLayout {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Profile List | View Other Story",
  description: "Join to share your story",
};

const ProfileLayout: React.FunctionComponent<IProfileLayout> = async ({
  children,
}) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <AuthGuard>{children}</AuthGuard>;
};

export default ProfileLayout;
