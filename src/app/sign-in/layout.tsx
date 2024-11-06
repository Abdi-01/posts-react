import SignIn from "./page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Join to share your story",
};

const Layout = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default Layout;
