import { callAPI } from "@/config/axios";

type Article = {
  imgurl: string;
  created: number;
  ___class: string;
  id: number;
  published: boolean;
  ownerId: string | null;
  title: string;
  updated: number | null;
  objectId: string;
  content: string;
};

// Fetch articles data directly in the Server Component
const getArticles = async (): Promise<Article[]> => {
  try {
    const { data } = await callAPI.get<Article[]>(
      "https://astirhistory-us.backendless.app/api/data/articles"
    );
    return data;
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return []; // Return an empty array on failure
  }
};

// Server Component for TimelinePreview
const TimelinePreview = async () => {
  const articles = await getArticles();

  const printTimeline = () => {
    return articles.map((article) => (
      <div
        key={article.id}
        className="bg-white rounded-lg shadow-md cursor-pointer"
      >
        <div className="bg-slate-100 rounded-t-lg">
          <h4 className="p-2 px-4 font-semibold">{article.title}</h4>
        </div>
        <p className="font-thin px-4 py-2">{article.content}</p>
      </div>
    ));
  };

  return (
    <div className="md:w-3/4 m-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {printTimeline()}
    </div>
  );
};

export default TimelinePreview;
