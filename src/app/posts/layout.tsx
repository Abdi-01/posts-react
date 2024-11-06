import * as React from "react";
import Posts from "./page";

interface ILayoutProps {
  params: { slug: string };
}

const Layout: React.FunctionComponent<ILayoutProps> = (props) => {
  return (
    <div className="container container-lg m-auto">
      {/* <AuthGuard> */}
      {/* <React.Suspense fallback={<Loading />}> */}
      <Posts {...props} />
      {/* </React.Suspense> */}
      {/* </AuthGuard> */}
    </div>
  );
};

export default Layout;
