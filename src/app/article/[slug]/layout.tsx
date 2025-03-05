import * as React from "react";
import { Metadata } from "next";
import { callAPI } from "@/config/axios";
import { Suspense } from "react";
import Loading from "@/app/loading";

interface IPostDetailLayout {
  children: React.ReactNode;
}

type PropsParam = {
  params: Promise<{ slug: string }>;
};
// Dynamic Metadata
export const generateMetadata = async ({
  params,
}: PropsParam): Promise<Metadata> => {
  const slug = (await params).slug;
  const query = encodeURIComponent(`title=`);
  const res = await callAPI.get(
    `/articles?where=${query}'${slug}'&loadRelations=accountData`
  );
  console.log("check", res.data);

  return {
    title: res.data[0].title,
  };
};

const PostDetailLayout: React.FunctionComponent<IPostDetailLayout> = ({
  children,
}) => {
  return (
    <div className="px-24 py-14 bg-slate-100 min-h-screen w-full gap-8">
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
};

export default PostDetailLayout;
