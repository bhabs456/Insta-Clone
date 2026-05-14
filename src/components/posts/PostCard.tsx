"use client";

import { useState } from "react";
import { Heart, MoreHorizontal } from "lucide-react";

type PostCardProps = {
  username: string;
  profileImage: string;
  postImage: string;
  likes: number;
  comments: number;
  caption: string;
  time: number;
};

export default function PostCard({
  username,
  profileImage,
  postImage,
  likes,
  comments,
  caption,
  time,
}: PostCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <article className="pb-2">
      {/* Header */}
      <div className="flex items-center justify-between px-3 min-h-[56px]">
        <div className="flex items-center gap-3">
          <img
            src={profileImage}
            alt={username}
            className="h-9 w-9 rounded-full object-top object-cover"
          />

          <p className="text-sm font-semibold text-black">{username}</p>
        </div>

        <MoreHorizontal className="h-5 w-5 text-black" />
      </div>

      {/* Post Image */}
      <div className="w-full h-[520px] overflow-hidden">
        <img
          src={postImage}
          alt="post"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="px-2">
        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Like */}
            <div
              className="p-2 cursor-pointer"
              onClick={() => setLiked(!liked)}
            >
              <Heart
                className={`w-6 h-6 transition-all ${
                  liked ? "fill-red-500 text-red-500" : "text-black"
                }`}
              />
            </div>

            <div className="me-1">
              <p className="text-sm font-semibold text-black">
                {likes.toLocaleString()}K
              </p>
            </div>

            {/* Comment */}
            <div className="p-2">
              <svg
                aria-label="Comment"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Comment</title>

                <path
                  d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </div>

            <div className="me-1">
              <p className="text-sm font-semibold text-black">
                {comments.toLocaleString()}K
              </p>
            </div>

            {/* Send */}
            <div className="p-2">
              <svg
                aria-label="Messages"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Messages</title>

                <path
                  d="M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>

                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="7.488"
                  x2="15.515"
                  y1="12.208"
                  y2="7.641"
                ></line>
              </svg>
            </div>
          </div>

          {/* Bookmark */}
          <div className="p-2 cursor-pointer" onClick={() => setSaved(!saved)}>
            <svg
              aria-label="Save"
              fill={saved ? "currentColor" : "none"}
              className={`w-6 h-6 ${saved ? "text-black" : "text-black"}`}
              viewBox="0 0 24 24"
            >
              <polygon
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Caption */}
        <div className="px-2">
          <p className="text-sm text-black">
            <span className="font-semibold mr-2">{username}</span>

            {expanded ? caption : caption.slice(0, 80)}

            {caption.length > 80 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="ml-1 text-zinc-500 font-semibold"
              >
                {expanded ? "less" : "... more"}
              </button>
            )}
          </p>
        </div>

        {/* Time */}
        <div className="px-2 ">
          <p className="text-xs text-zinc-500">{time} hours ago</p>
        </div>
      </div>
    </article>
  );
}
