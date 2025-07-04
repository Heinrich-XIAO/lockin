import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Home, User, UserPen } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar"

import { cn } from '~/lib/utils';
import { headers } from 'next/headers';

export async function AppSidebar() {
  const headersList = await headers();
  const referer = headersList.get('referer') || '';
  const url = new URL(referer);
  const pathname = url.pathname;

  console.log(pathname)

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMenu className="relative h-full text-xl">
          <SidebarMenuItem>
            <SidebarMenuButton
              className={cn('h-24', {
                'bg-blue-500 bg-opacity-20': pathname === '/',
              })}
            >
              <a href="/" className="w-full flex items-center gap-4">
                <Home size={64} />
                <span className="text-2xl">Home</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              className={cn('h-24', {
                'bg-blue-500 bg-opacity-20': pathname === '/signin',
              })}
            >
              <a href="/signin" className="w-full flex items-center gap-4">
                <User size={64} />
                <span className="text-2xl">Sign In</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              className={cn('h-24', {
                'bg-blue-500 bg-opacity-20': pathname === '/signup',
              })}
            >
              <a href="/signup" className="w-full flex items-center gap-4">
                <UserPen size={64} />
                <span className="text-2xl">Sign Up</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SignedIn>
            <SidebarMenuItem className="absolute bottom-1 right-2">
              <UserButton />
            </SidebarMenuItem>
          </SignedIn>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

