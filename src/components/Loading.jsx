const Loading = () => {
  return (
    <>
      <div className="flex items-center my-10">
        <div className="flex flex-col bg-primary p-4 rounded-lg h-20 w-36"></div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
        <div className="flex flex-col bg-primary p-4 rounded-lg gap-4 h-96 w-full">
          <span className="h-5 w-full bg-slate-500 rounded-md animate-pulse my-2"></span>
          <span className="h-5 w-full bg-slate-500 rounded-md animate-pulse my-2"></span>
          <span className="h-8 w-full bg-slate-500 rounded-md animate-pulse my-2"></span>
          <span className="h-40 w-full bg-slate-500 rounded-md animate-pulse my-2"></span>
          <div className="flex justify-end">
            <div className="flex flex-col">
              <span className="h-5 w-56 bg-slate-500 rounded-md animate-pulse my-2"></span>
              <span className="h-5 w-44 bg-slate-500 rounded-md animate-pulse my-2"></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-primary p-4 rounded-lg gap-4 h-96 w-full">
          <span className="h-5 w-full bg-slate-500 rounded-md animate-pulse my-2"></span>
          <span className="h-5 w-full bg-slate-500 rounded-md animate-pulse my-2"></span>
          <span className="h-8 w-full bg-slate-500 rounded-md animate-pulse my-2"></span>
          <span className="h-40 w-full bg-slate-500 rounded-md animate-pulse my-2"></span>
          <div className="flex justify-end">
            <div className="flex flex-col">
              <span className="h-5 w-56 bg-slate-500 rounded-md animate-pulse my-2"></span>
              <span className="h-5 w-44 bg-slate-500 rounded-md animate-pulse my-2"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
