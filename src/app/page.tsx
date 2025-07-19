import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-green-500 text-white">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        LockIn
      </h1>
      <p className="mt-4 text-lg">
        A web app that gets you to finally lock in with streaks.
      </p>
      <Button className="mt-6">
        <Link href="/streaks">Get Started</Link>
      </Button>
    </main>
  );
}
