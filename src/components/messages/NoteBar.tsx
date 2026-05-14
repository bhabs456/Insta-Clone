import { notes } from "@/src/data/notes";
import NoteItem from "@/src/components/messages/NoteItem";
import YourNote from "@/src/components/messages/yourNote";

export default function NotesBar() {
  return (
    <section className="flex overflow-x-auto no-scrollbar px-4">

      {/* Your Note */}
      <YourNote />

      {/* Other Notes */}
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          username={note.username}
          note={note.note}
          image={note.image}
        />
      ))}

    </section>
  );
}