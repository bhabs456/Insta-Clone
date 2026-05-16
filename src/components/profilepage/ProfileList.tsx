import ProfileUserDetails from "@/src/components/profilepage/ProfileUserDetails";
import GridPosts from "./ProfilePostGrid";
import { posts } from "@/src/data/posts";
import Link from "next/link";

export default function ProfileList() {
  return (
    <main>
      {/* Username and Header part */}
      <ProfileUserDetails />

      {/* Grid Posts Icons */}
      <div className="GridIcons flex justify-center items-center gap-2 border-b-2">
        {/* Grid */}
        <div className="flex items-center w-full justify-center">
          <Link href="" className="h-11 border-b-2 border-black px-5">
            <svg
              aria-label="Posts"
              className="x1lliihq x1n2onr6 xyb1xck"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Posts</title>
              <rect height="6" rx="1" ry="1" width="4.667" x="3" y="1"></rect>
              <rect
                height="6"
                rx="1"
                ry="1"
                width="4.667"
                x="16.333"
                y="1"
              ></rect>
              <rect
                height="6"
                rx="1"
                ry="1"
                width="4.667"
                x="9.667"
                y="1"
              ></rect>
              <rect height="6" rx="1" ry="1" width="4.667" x="3" y="9"></rect>
              <rect
                height="6"
                rx="1"
                ry="1"
                width="4.667"
                x="16.333"
                y="9"
              ></rect>
              <rect
                height="6"
                rx="1"
                ry="1"
                width="4.667"
                x="9.667"
                y="9"
              ></rect>
              <rect height="6" rx="1" ry="1" width="4.667" x="3" y="17"></rect>
              <rect
                height="6"
                rx="1"
                ry="1"
                width="4.667"
                x="16.333"
                y="17"
              ></rect>
              <rect
                height="6"
                rx="1"
                ry="1"
                width="4.667"
                x="9.667"
                y="17"
              ></rect>
            </svg>
          </Link>
        </div>

        {/* Saved */}
        <div className="flex items-center w-full justify-center">
          <Link href="" className="h-11  px-5">
            <svg
              aria-label="Save"
              fill="white"
              className=""
              viewBox="0 0 24 24"
              height="24px"
              width="24px"
            >
              <polygon
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </Link>
        </div>

        {/* Tagged Posts  */}
        <div className="flex items-center w-full justify-center">
          <Link href="" className="h-11  px-5">
            <svg
              aria-label="Tagged"
              className="x1lliihq x1n2onr6 x1cp0k07"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Tagged</title>
              <path
                d="M21 7.48a2 2 0 0 0-2-2h-3.046a2.002 2.002 0 0 1-1.506-.683l-1.695-1.939a1 1 0 0 0-1.506 0L9.552 4.797c-.38.434-.93.682-1.506.682H5a2 2 0 0 0-2 2V19l.01.206A2 2 0 0 0 5 21h14a2 2 0 0 0 2-2V7.48ZM23 19a4 4 0 0 1-4 4H5a4 4 0 0 1-3.995-3.794L1 19V7.48a4 4 0 0 1 4-4h3.046l1.696-1.94a3 3 0 0 1 4.516 0l1.696 1.94H19a4 4 0 0 1 4 4V19Z"
                fill="currentColor"
              ></path>
              <path
                d="M14.5 10.419a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm2 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM12 16.003c3.511 0 6.555 1.99 8.13 4.906a1 1 0 0 1-1.76.95c-1.248-2.31-3.64-3.857-6.37-3.857S6.878 19.55 5.63 21.86a1 1 0 0 1-1.76-.951c1.575-2.915 4.618-4.906 8.13-4.906Z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-[1px] pb-12 md:pb-0">
        {posts.map((post) => (
          <GridPosts
            key={post.id}
            username={post.username}
            postImage={post.postImage}
          />
        ))}
      </div>
    </main>
  );
}
