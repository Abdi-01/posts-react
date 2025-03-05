"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { callAPI } from "@/config/axios";
import { IArticle } from "@/types/article";
import Image from "next/image";

const PostPage: React.FunctionComponent = () => {
  const router = useRouter();

  const [postsList, setPostsList] = React.useState<IArticle[]>([]);
  const [filterCategory, setFilterCategory] = React.useState<string>("All");

  const getArticlesList = async () => {
    try {
      const query = encodeURIComponent(`category='${filterCategory}'`);
      const { data } = await callAPI.get(
        filterCategory === "All"
          ? "/articles?loadRelations=accountData"
          : `/articles?where=${query}&loadRelations=accountData`
      );
      setPostsList(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getArticlesList();
  }, [filterCategory]);

  const printPostsList = () => {
    return postsList.map((val: any, idx: number) => {
      return (
        <div
          key={val.objectId}
          className="h-72 items-center bg-white rounded-xl cursor-pointer"
          onClick={() => router.push(`/article/${val.title}`)}
        >
          <div className="relative h-36 w-full">
            <Image
              src={
                val.thumbnail ||
                `https://dummyimage.com/600x400/000/fff&text=PWD`
              }
              alt={val.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-full p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h6 className="px-4 uppercase font-semibold text-sm text-gray-500">
                {val.accountData.username}
              </h6>
              <span className="border border-slate-500 rounded-full py-0.5 px-2 text-xs">
                {val.category}
              </span>
            </div>
            <p className="font-bold md:text-sm lg:text-lg px-4 py-2">
              {val.title.slice(0, 55)}
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <main>
      <section id="hero">
        <div className="relative h-[30rem] w-full">
          <Image
            src={
              postsList[0]?.thumbnail ||
              `https://dummyimage.com/600x400/000/fff&text=PWD`
            }
            alt={postsList[0]?.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-0 right-0 w-full p-4 text-right bg-slate-200 bg-opacity-55">
            <p className="text-2xl md:text-4xl lg:text-5xl italic">
              {postsList[0]?.title}
            </p>
          </div>
        </div>
      </section>
      <section id="article-list" className="space-y-8 mt-8">
        <div id="article-filter" className="w-full overflow-x-auto py-8">
          {/* filter */}
          <ul className="flex gap-4">
            {[
              "All",
              "Technology",
              "Economics",
              "Business",
              "Lifestyle",
              "Goverment",
            ].map((val: string) => (
              <li>
                <span
                  className={`border ${
                    filterCategory === val &&
                    "bg-slate-500 text-white font-semibold"
                  } border-slate-500 rounded-full py-1 px-4 cursor-pointer`}
                  onClick={() => setFilterCategory(val)}
                >
                  {val}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-screen md:grid md:grid-cols-3 xl:grid-cols-5 grid-rows-3 items-center gap-3 space-y-5 md:space-y-0">
          {printPostsList()}
        </div>
      </section>
    </main>
  );
};

export default PostPage;
