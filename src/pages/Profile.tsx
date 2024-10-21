import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import { Profile_about } from './Profile-about';
import { Profile_contact } from "./Profile-contact";
import { Profile_education } from "./Profile-education";
import { Profile_skills_and_tools } from "./Profile-skills-and-tools";
import { Profile_work_experience } from './Profile-work-experience';

export function TabsDemo() {
    return (
        <Tabs defaultValue="about" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
                <TabsTrigger value="work-experience">Work Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills-and-tools">Skills and Tools</TabsTrigger>
            </TabsList>
            <TabsContent value="about">
                <Profile_about />
            </TabsContent>
            <TabsContent value="contact">
                <Profile_contact />
            </TabsContent>
            <TabsContent value="work-experience">
                <Profile_work_experience />
            </TabsContent>
            <TabsContent value="education">
                <Profile_education />
            </TabsContent>
            <TabsContent value="skills-and-tools">
                <Profile_skills_and_tools />
            </TabsContent>

        </Tabs>
    )
}
