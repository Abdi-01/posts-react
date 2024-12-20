import { callAPI } from "@/config/axios";
import * as React from "react";

interface ITimelinePreviewProps {}

const getArticles = async () => {
  try {
    const { data } = await callAPI.get(
      "https://astirhistory-us.backendless.app/api/data/articles"
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

const TimelinePreview: React.FunctionComponent<
  ITimelinePreviewProps
> = async () => {
  const articles = await getArticles();
  console.log(articles);

  const printTimline = () => {
    return articles.map((val: any) => {
      return (
        <div
          key={val.id}
          className="bg-white rounded-lg shadow-md cursor-pointer"
        >
          <div className="bg-slate-100 rounded-t-lg">
            <h4 className="p-2 px-4 font-semibold">{val.title}</h4>
          </div>
          <p className="font-thin px-4 py-2">{val.content}</p>
        </div>
      );
    });
  };

  return (
    <div className="md:w-3/4 m-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {printTimline()}
    </div>
  );
};

export default TimelinePreview;
