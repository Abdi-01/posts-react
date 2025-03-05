import * as React from "react";
import { callAPI } from "@/config/axios";
import parse from "html-react-parser";
import { IArticle } from "@/types/article";

interface IDetailProps {
  params: { slug: string };
}

const getDetailPosts = async (slug: string) => {
  try {
    const query = encodeURIComponent(`title=`);
    const res = await callAPI.get(
      `/articles?where=${query}'${slug}'&loadRelations=accountData`
    );

    return res.data[0];
  } catch (error) {
    console.log(error);
  }
};
const Detail: React.FunctionComponent<IDetailProps> = async ({ params }) => {
  const detailPost: IArticle = await getDetailPosts(params.slug);
  return (
    <div className="m-auto space-y-4">
      <div className="w-full p-8 bg-white shadow-md rounded-lg cursor-pointer">
        <div className="flex items-center gap-4 mb-4">
          <img
            className="w-16 h-16 bg-slate-100 rounded-full shadow-md"
            src={`https://robohash.org/${detailPost?.accountData.username}.png`}
            alt="icon"
          />
          <div>
            <p className="font-bold">{detailPost?.accountData.username}</p>
            <p className="text-xs font-thin">
              {new Date(detailPost?.created).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="px-8 rounded-e-md">
          <h4 className="uppercase font-semibold">{detailPost?.title}</h4>
          <p className="font-thin italic">
            {" "}
            {detailPost?.content && parse(detailPost?.content)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
