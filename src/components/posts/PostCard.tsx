import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

type PostCardProps = {
  username: string;
  profileImage: string;
  postImage: string;
  likes: number;
  caption: string;
};

export default function PostCard({
  username,
  profileImage,
  postImage,
  likes,
  caption,
}: PostCardProps) {
  return (
    <article className="mb-6">

      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2">

        <div className="flex items-center gap-3">

          <img
            src={profileImage}
            alt={username}
            className="h-9 w-9 rounded-full object-cover"
          />

          <p className="text-sm font-semibold text-black">
            {username}
          </p>

        </div>

        <MoreHorizontal className="h-5 w-5 text-black" />

      </div>

      {/* Post Image */}
      <div className="w-full">
        <img
          src={postImage}
          alt="post"
          className="w-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-3 py-3">

        <div className="flex items-center gap-4">

          <Heart className="h-7 w-7 text-black" />

          <MessageCircle className="h-7 w-7 text-black" />

          <Send className="h-7 w-7 text-black" />

        </div>

        <Bookmark className="h-7 w-7 text-black" />

      </div>

      {/* Likes */}
      <div className="px-3">
        <p className="text-sm font-semibold text-black">
          {likes.toLocaleString()} likes
        </p>
      </div>

      {/* Caption */}
      <div className="px-3 pt-1">

        <p className="text-sm text-black">
          <span className="font-semibold mr-2">
            {username}
          </span>

          {caption}
        </p>

      </div>

      {/* Comments */}
      <div className="px-3 pt-1">
        <p className="text-sm text-zinc-500">
          View all comments
        </p>
      </div>

    </article>
  );
}