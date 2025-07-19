import StreakList from "~/components/streak-list";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-green-500 text-white pl-5">
      <StreakList />
    </main>
  );
}
