export default function ProfileUserDetails() {
  return (
    <header className="mt-4 mb-2">
      {/* {Profile Avatar and Username } */}
      <div className="flex items-center mx-4 w-full">

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

      {/* Name and Bio */}
      <div className="flex mx-4 flex-col">
        {/* Name */}
        <div className="Name text-sm font-bold">
          Tony Stark 
        </div>

        {/* Bio */}
        <div className="Bio text-sm">
          You can take away my house,<br /> all my tricks and toys,<br /> but one thing you can't take away: <br /> I am Iron Man.
        </div>
      </div>

      {/* Profile and Archive Button */}
      <div className="Button p-3 w-full flex gap-2">
        <a className="h-8 cursor-pointer flex justify-center items-center text-sm bg-gray-100 w-full text-center text-black rounded-md">Edit Profile</a>
        <a className="h-8 cursor-pointer flex justify-center items-center text-sm bg-gray-100 w-full text-center text-black rounded-md">View Archive</a>
      </div>
    </header>
  );
}
