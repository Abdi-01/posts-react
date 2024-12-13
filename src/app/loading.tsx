const Loading = () => {
  return (
    <div className="w-fit flex justify-center gap-3 m-auto">
      <div className="w-10 h-10 m-auto rounded-full bg-slate-300 animate-pulse"></div>
      <div className="w-10 h-10 m-auto rounded-full bg-slate-300 animate-pulse"></div>
      <div className="w-10 h-10 m-auto rounded-full bg-slate-300 animate-pulse"></div>
    </div>
  );
};

export default Loading;
