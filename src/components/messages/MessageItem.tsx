type MessageItemProps = {
  username: string;
  avatar: string;
  message: string;
  time: string;
  unread: boolean;
};

export default function MessageItem({
  username,
  avatar,
  message,
  time,
  unread,
}: MessageItemProps) {
  return (
    <div className="flex items-center justify-between px-6 py-2">
      {/* Left Section */}
      <div className="flex items-center ">
        {/* Avatar */}

        <div className="mr-3">
          <img
            src={avatar}
            alt={username}
            className="h-[56px] w-[56px] rounded-full object-cover object-top"
          />
        </div>

        {/* Message Info */}
        <div>
          <h2 className="text-sm font-medium text-black">{username}</h2>

          <div className="flex items-center gap-1">
            <p className="text-sm font-semibold text-black">{message}</p>

            <span className="text-zinc-500">·</span>

            <p className="text-sm text-zinc-500">{time}</p>
          </div>
        </div>
      </div>

      {/* Unread Dot */}
      {unread && <div className="h-2 w-2 ml-3 rounded-full bg-[#4a5df9]" />}
    </div>
  );
}
