"use client"
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { type Streak } from "~/lib/types";

export default function StreakList() {
  const [streaks, setStreaks] = useState<Streak[]>([]);

  useEffect(() => {
    setStreaks(JSON.parse(localStorage.getItem("streaks") || "[]"))
  }, [])

  const addStreak = () => {
    console.log("something");
    const newStreak: Streak = {
      id: Date.now().toString(),
      name: `Streak ${streaks.length + 1}`,
      createdAt: new Date(),
      updatedAt: new Date(),
      dates: [],
    };
    setStreaks([...streaks, newStreak]);
    localStorage.setItem("streaks", JSON.stringify([...streaks, newStreak]));
  };

  return (
    <main className="flex min-h-screen flex-col bg-green-500 text-white">
      <ul>
        {streaks.map((streak, index) => (
          <li key={index}>{streak.name}</li>
        ))}
      </ul>
      <Button className="mt-6 w-min" asChild>
          <button onClick={addStreak}>Add new Streak</button>
      </Button>
    </main>
  );
}
