import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

import { TRPCReactProvider } from "~/trpc/react";
import { SidebarProvider } from "~/components/ui/sidebar";

import { AppSidebar } from "~/components/app-sidebar"

export const metadata: Metadata = {
  title: "lockin",
  description: "A webapp that uses possibly threatening notificaitons, streaks, leaderboards, friend quests, and more to get you to finally lock in on that one assignment. This is basically duolingo, but for locking in.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <SidebarProvider>
        <html lang="en" className={`${geist.variable}`}>
          <body className="w-full">
            <AppSidebar />
            <TRPCReactProvider>{children}</TRPCReactProvider>
          </body>
        </html>
      </SidebarProvider>
    </ClerkProvider>
  );
}
