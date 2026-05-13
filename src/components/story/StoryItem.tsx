import { Plus } from "lucide-react";

type StoryItemProps = {
  username: string;
  image: string;
  isOwnStory?: boolean;
};

export default function StoryItem({
  username,
  image,
  isOwnStory = false,
}: StoryItemProps) {
  return (
    <div className="flex flex-col items-center px-[6px]">
      <div className="pt-1 pb-2">
        <div
          className={`relative rounded-full p-[3px] ${
            !isOwnStory &&
            "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
          }`}
        >
          <div className="rounded-full bg-white p-[3px]">
            {/* Avatar */}
            <div className="h-[74px] w-[74px] overflow-hidden rounded-full">
              <img src={image} alt={username} className="rounded-full" />
            </div>
          </div>

          {/* Plus Icon */}
          {isOwnStory && (
            <div className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-black">
              <Plus className="h-4 w-4 text-white" />
            </div>
          )}
        </div>
      </div>

      {/* Username */}
      <p
        className={`w-full truncate text-center text-xs ${
          isOwnStory ? "text-gray-500" : "text-black"
        }`}
      >
        {username}
      </p>
    </div>
  );
}
