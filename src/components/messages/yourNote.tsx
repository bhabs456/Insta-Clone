export default function YourNote() {
  return (
    <div className="flex min-w-[96px] flex-col items-center">
      {/* Bubble + Avatar */}
      <div className="flex flex-col items-center">
        {/* Note Bubble */}
        <div className="flex h-[44px] items-center justify-center mb-1 w-[88px] rounded-xl bg-white px-2 py-1 text-center text-[11px] leading-tight text-zinc-500 shadow-lg">
          First note in a while...
        </div>

        {/* Avatar */}
        <div className="">
          <img
            src="/images/stories/rdj.jpg"
            alt="Your note"
            className="h-[74px] w-[74px] rounded-full object-cover object-top"
          />
        </div>
      </div>

      {/* Username */}
      <p className="text-xs text-zinc-500">Your note</p>
    </div>
  );
}
