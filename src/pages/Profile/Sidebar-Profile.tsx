"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"


import { About } from "./About"
import { Contact } from "./Contact"
import { Education } from "./Education"
import { Work_Experience } from "./Work-Experience"
import { Skills_and_Tools } from './Skills-and-Tools';

const sidebarItems = {
  nav: [
    { name: "About" },
    { name: "Contact" },
    { name: "Work Experience" },
    { name: "Education" },
    { name: "Skills and Tools" },
  ],
}


export function Page() {
  return (
    <div className="flex h-svh items-center justify-center">
      <SettingsDialog />
    </div>
  )
}

function SettingsDialog() {
  const [open, setOpen] = React.useState(true)
  const [activeSection, setActiveSection] = React.useState("About")

  const renderForm = () => {
    switch (activeSection) {
      case "About":
        return <About />
      case "Contact":
        return <Contact />
      case "Education":
        return <Education />
      case "Work Experience":
        return <Work_Experience />
      case "Skills and Tools":
        return <Skills_and_Tools />
      default:
        return <h1>Error</h1>
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Open Profile</Button>
      </DialogTrigger>
      <DialogContent className="overflow-hidden p-0 h-[880px] w-[1200px]">
        <DialogTitle className="text-2xl font-medium m-5 mb-1 ">Profile</DialogTitle>
        <Separator className="h-[2px] bg-gray-300 " />
        <DialogDescription className="sr-only">
          Customize your profile here.
        </DialogDescription>
        <SidebarProvider className="items-start">
          <Sidebar collapsible="none" className="hidden w-[200px] md:flex">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {sidebarItems.nav.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          onClick={() => setActiveSection(item.name)}
                          isActive={item.name === activeSection}
                        >
                          <span>{item.name}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <Separator orientation="vertical" className="w-[2px] bg-gray-300" />
          <main className="flex h-[880px] w-[1000px] flex-1 flex-col overflow-hidden">
            <header className="m-2 w-full">
              <span className="text-xl">{activeSection}</span>
            </header>
            <Separator className="h-[2px] bg-gray-300" />
            <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4 pt-0">
              {renderForm()}
            </div>
          </main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  )
}
