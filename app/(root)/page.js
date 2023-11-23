import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      Threads
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
