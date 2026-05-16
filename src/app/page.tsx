import Mnavbar from "@/src/components/navbar/Mnavbar";
import BottomNav from "@/src/components/bottom-nav/bottomnav";
import StoryBar from "../components/story/StoryBar";
import PostCard from "@/src/components/posts/PostCard";
import { posts } from "@/src/data/posts";

export default function HomePage() {
  return (
    <main className="min-h-screen  text-black">
      {/* Mobile Container */}

      {/* Navbar */}
      <div className="">  
        <Mnavbar />
      </div>
    
      <div className="mx-auto max-w-md">
        {/* Stories */}
        <StoryBar />
      </div>

      <section className="pb-12 md:pb-0 no-scrollbar mx-auto max-w-md">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            username={post.username}
            profileImage={post.profileImage}
            postImage={post.postImage}
            likes={post.likes}
            comments={post.comments}
            caption={post.caption}
            time={post.time}
          />
        ))}
      </section>

      {/* Bottom Navigation */}
      <div className=""><BottomNav /></div>
    </main>
  );
}
