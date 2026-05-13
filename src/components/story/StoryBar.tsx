import StoryItem from "./StoryItem";
import { stories } from "@/src/data/stories";

export default function StoryBar() {
  return (
    <section className="py-2">
      <div className="flex overflow-x-auto no-scrollbar">
        {/* Left Padding */}
        <div className="w-[9px] shrink-0" />

        <div className="px-[4px]">
          <StoryItem
            username="Your story"
            image="/images/stories/rdj.jpg"
            isOwnStory
          />
        </div>

        <div className="flex">
          {stories.map((story) => (
            <StoryItem
              key={story.id}
              username={story.username}
              image={story.image}
            />
          ))}
        </div>

        {/* Right Padding */}
        <div className="w-[9px] shrink-0" />
      </div>
    </section>
  );
}
