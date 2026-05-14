// import BottomNav from "@/src/components/bottom-nav/bottomnav";
import MessagesNav from "@/src/components/messages/MessageNav"
import MessagesList from "@/src/components/messages/MessageList";
import SearchBar from "@/src/components/messages/MessageSearchBar";
import NotesBar from "@/src/components/messages/NoteBar";

export default function MessagesPage() {
  return (
    <main className="h-screen overflow-hidden bg-white">

      <div className="mx-auto flex h-full max-w-md flex-col">

     
        <MessagesNav />

   
        <SearchBar />

  
        <NotesBar />

        {/* Messages Section */}
        <MessagesList />


      </div>

    </main>
  );
}