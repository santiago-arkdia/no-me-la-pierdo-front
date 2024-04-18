export const LoaderCardHome = () => {
  return (
    <div className="bg-black grid select-none grid-cols-[1fr_2fr_1fr] flex-col gap-5 rounded-2xl p-2 shadow-lg sm:h-48 sm:flex-row sm:p-4 mb-4">
      <div className="h-20 animate-pulse rounded-xl bg-gray sm:h-full sm:w-44"></div>
      <div className="flex flex-1 flex-col gap-5 sm:p-2">
        <div className="flex flex-1 flex-col gap-3">
          <div className="h-14 w-full animate-pulse rounded-2xl bg-white"></div>
          <div className="h-3 w-full animate-pulse rounded-2xl bg-white"></div>
          <div className="h-3 w-full animate-pulse rounded-2xl bg-white"></div>
          <div className="h-3 w-full animate-pulse rounded-2xl bg-white"></div>
          <div className="h-3 w-full animate-pulse rounded-2xl bg-white"></div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-5 sm:p-2">
        <div className="flex flex-1 flex-col gap-3">
          <div className="h-14 w-full animate-pulse rounded-2xl bg-white"></div>
          <div className="h-3 w-full animate-pulse rounded-2xl bg-white"></div>
          <div className="h-3 w-full animate-pulse rounded-2xl bg-white"></div>
          <div className="h-3 w-full animate-pulse rounded-2xl bg-white"></div>
          <div className="h-3 w-full animate-pulse rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  );
};
