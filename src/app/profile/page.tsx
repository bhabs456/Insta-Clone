import BottomNav from "@/src/components/bottom-nav/bottomnav";
import ProfileNav from "@/src/components/profilepage/ProfileNav";
import ProfileList from "@/src/components/profilepage/ProfileList";



export default function ProfilePage() {
  return (
    <main className="h-screen overflow-hidden bg-white">

      <div className="mx-auto flex h-full max-w-md flex-col">

     
        <ProfileNav />

        <ProfileList />

      </div>

      <BottomNav />

    </main>
  );
}