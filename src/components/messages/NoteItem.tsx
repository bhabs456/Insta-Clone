type NoteItemProps = {
  username: string;
  note: string;
  image: string;
};

export default function NoteItem({
  username,
  note,
  image,
}: NoteItemProps) {
  return (
    <div className="flex min-w-[96px] flex-col items-center">

      {/* Bubble + Avatar Container */}
      <div className="flex flex-col items-center">

        {/* Note Bubble */}
        <div className="flex h-[44px] items-center justify-center mb-1 w-[88px] rounded-xl bg-white px-2 py-1 text-center text-[11px] leading-tight text-black shadow-lg">

          <p className="line-clamp-2">
            {note}
          </p>

        </div>

        {/* Avatar */}
        <img
          src={image}
          alt={username}
          className="h-[74px] w-[74px] rounded-full object-cover object-top"
        />

      </div>

      {/* Username */}
      <p className="text-xs text-black truncate max-w-[80px]">
        {username}
      </p>

    </div>
  );
}