import { Home, User, UserPen } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '~/components/ui/sidebar'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { cn } from '~/lib/utils'
import { headers } from 'next/headers'

export async function AppSidebar() {
  const headersList = await headers()
  const referer = headersList.get('referer') || ''
  const pathname = referer == '' ? '/' : (new URL(referer)).pathname;

  const activeLinkClass = (path: string) =>
    cn(
      'w-full flex items-center gap-4 px-4 rounded-[12px]',
      pathname === path && 'bg-sky-600/20 border-sky-600 border-2'
    )

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMenu className="relative h-full text-2xl">
          <SidebarMenuItem>
            <SidebarMenuButton className="h-24">
              <a href="/" className={activeLinkClass('/')}>
                <Home size={64} />
                <span className="text-2xl">Home</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SignedOut>
            <SidebarMenuItem>
              <SignInButton mode="redirect">
                <div className={cn(activeLinkClass('/signin'), 'px-6 py-2 flex items-center gap-4')}>
                  <User size={64} />
                  <span className="text-2xl">Sign In</span>
                </div>
              </SignInButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SignUpButton mode="redirect">
                <div className={cn(activeLinkClass('/signup'), 'px-[28.5px] py-2 flex items-center gap-4')}>
                  <UserPen size={64} />
                  <span className="text-2xl">Sign Up</span>
                </div>
              </SignUpButton>
            </SidebarMenuItem>
          </SignedOut>

          <SignedIn>
            <SidebarMenuItem className="absolute bottom-1 right-2">
              <UserButton />
            </SidebarMenuItem>
          </SignedIn>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
