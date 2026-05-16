type GridPostsProps = {
    postImage: string;
    username: string;
};

export default function GridPosts({postImage, username}: GridPostsProps) {
  return (
    <main>

      {/* Posts */}
      <div className="">
        <div className="aspect-[3/4] w-full">
            <img className="w-full h-full object-cover object-top" src={postImage} alt={username} />
        </div>
      </div>

    </main>
  );
}
