"use client"
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { type Streak } from "~/lib/types";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "~/components/ui/dialog"

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";


export default function StreakList() {
  const [streaks, setStreaks] = useState<Streak[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setStreaks(JSON.parse(localStorage.getItem("streaks") || "[]"))
  }, [])

  const addStreak = () => {
    const newStreak: Streak = {
      id: Date.now().toString(),
      name: inputValue,
      createdAt: new Date(),
      updatedAt: new Date(),
      dates: [],
    };
    setStreaks([...streaks, newStreak]);
    localStorage.setItem("streaks", JSON.stringify([...streaks, newStreak]));
    setInputValue("");
  };

  return (
    <main className="flex min-h-screen flex-col bg-green-500 text-white">
      <ul>
        {streaks.map((streak, index) => (
          <li key={index}>{streak.name}</li>
        ))}
      </ul>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-6 w-min">
              Create new Streak
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Streak</DialogTitle>
            <DialogDescription>
              Create a new streak for you to complete regularly. Click Create once you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Homework"
                className="col-span-3"
                required
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" onClick={addStreak}>Create</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
