import { messages } from "@/src/data/messages";
import MessageItem from "./MessageItem";
import NotesBar from "@/src/components/messages/NoteBar";

export default function MessagesList() {
  return (
    <section className="flex flex-1 flex-col overflow-hidden">

      {/* Fixed Header Row */}
      <div className="flex items-center justify-between px-4 py-3">

        <h2 className="text-lg font-semibold text-black">
          Messages
        </h2>

        <p className="text-sm font-medium text-zinc-500">
          Requests
        </p>

      </div>

      {/* Scrollable Messages */}
      <div className="flex-1 overflow-y-auto no-scrollbar">

        {messages.map((message) => (
          <MessageItem
            key={message.id}
            username={message.username}
            avatar={message.avatar}
            message={message.message}
            time={message.time}
            unread={message.unread}
          />
        ))}

      </div>

    </section>
  );
}
