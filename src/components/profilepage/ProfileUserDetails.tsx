export default function ProfileUserDetails() {
  return (
    <header className="mt-4 mb-2">
      {/* {Profile Avatar and Username } */}
      <div className="flex items-center ml-4 w-full">

        <div className="flex flex-col justify-center ">

          {/* Note Bubble */}
          <div className="p-2 mb-1 w-14 rounded-xl bg-white text-center text-[11px] leading-tight text-zinc-500 shadow-lg">
            Note...
          </div>

          {/* Avatar */}
          <div className="ml-2 mr-9">
            <img
              src="/images/stories/rdj.jpg"
              alt="Your note"
              className="h-[77px] w-[77px] rounded-full object-cover object-top"
            />
          </div>
        </div>

        {/* Username */}
        <div className="flex my-4 flex-col gap-1">

            <div className=" font-semibold">
                tony_stark
            </div>

            <div className="flex gap-8">
                <div className="flex flex-col text-sm font-semibold"><span>0</span><span>posts</span></div>
                <div className="flex flex-col text-sm font-semibold"><span>43.K</span><span>followers</span></div>
                <div className="flex flex-col text-sm font-semibold"><span>78</span><span>following</span></div>
            </div>

        </div>
      </div>

      <div className=""></div>

      <div className=""></div>
    </header>
  );
}
