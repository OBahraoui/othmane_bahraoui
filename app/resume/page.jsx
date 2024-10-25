"use client";

import {FaPython, FaJava, FaRProject, FaAws} from 'react-icons/fa';
import {SiMysql, SiPostgresql, SiPowerbi, SiTableau} from 'react-icons/si';

//about data
const about = {
    title: 'About me',
    description: "I am a Data Scientist with a Bachelor's degree in Data Science from Duke University. My experience spans data analysis, machine learning, and web development, particularly in creating API-driven platforms for integrating machine learning pipelines. I have worked with fintech and consulting industries, applying my skills in Python, Flask, and PyTorch to deliver innovative solutions, such as developing image classification systems using deep learning. I thrive in environments where I can leverage my technical expertise to drive data-driven decision-making and provide actionable insights. With a strong foundation in machine learning and hands-on project experience, I am passionate about using data to solve complex problems.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Othmane Bahraoui"
        },
        {
            fieldName: "Email",
            fieldValue: "othmane.bahraoui@alumni.duke.edu"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, French, Arabic"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Moroccan"
        },
    ]
};

//experience data
const experience = {
    icon: 'resume/badge.svg',
    title: 'My experience',
    items: [
        {
            company: "Outlier AI (Freelance)",
            position: "Software Engineer for AI Training Data",
            duration: "May 2024 - Present",
        },
        {
            company: "NayaOne",
            position: "Data Scientist Intern",
            duration: "November 2023 - March 2024",
        },
        {
            company: "Duke University Student Affairs Office",
            position: "Data Entry Specialist",
            duration: "August 2022 - May 2023",
        }
    ],
};

//education data
const education = {
    icon: 'resume/cap.svg',
    title: 'My education',
    description: 'Dual Degree',
    items: [
        {
            institution: "Duke University",
            degree: "Bachelor of Science",
            major: "Data Science",
            duration: "2019 - 2023",
        },
    ],
};

//skills data
const skills = {
    title: "My skills",
    skillList: [
        {
            icon: <FaPython />,
            name: "Python",
        },
        {
            icon: <FaJava />,
            name: "Java",
        },
        {
            icon: <FaRProject />,
            name: "R Programming",
        },
        {
            icon: <FaAws />,
            name: "AWS",
        },
        {
            icon: <SiMysql />,
            name: "MySQL",
        },
        {
            icon: <SiPostgresql />,
            name: "PostgreSQL",
        },
        {
            icon: <SiPowerbi />,
            name: "Power BI",
        },
        {
            icon: <SiTableau />,
            name: "Tableau",
        },
        {
            icon: <Image src="/skills/matlab.svg" alt="Matlab" className="w-20 h-20 filter invert" />,
            name: "Matlab",
        },
    ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Resume = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay:2.4, duration: 0.4, ease: "easeIn"}}} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item,index)=> {
                                            return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/*dot*/}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>





                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                        {item.degree}
                                                        <br />
                                                        {item.major}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* Duke University Logo with Hover Effect */}
                                                        {item.institution === "Duke University" && (
                                                            <div className="relative flex items-center">
                                                                <div className="bg-white p-2 rounded-md flex justify-center items-center">
                                                                    <Image
                                                                        src="/resume/duke_logo.png"
                                                                        alt="Duke University Logo"
                                                                        className="w-22 h-12 transition-transform duration-300 transform hover:scale-105 cursor-pointer" // Add scaling effect on hover
                                                                    />
                                                                </div>
                                                                <TooltipProvider delayDuration={100}>
                                                                    <Tooltip>
                                                                        <TooltipTrigger>
                                                                            <span className="absolute inset-0 cursor-pointer" />
                                                                        </TooltipTrigger>
                                                                        <TooltipContent className="font-yourFontClass text-sm bg-gray-700 text-white p-2 rounded-md transition-all duration-300 transform opacity-0 hover:opacity-100">
                                                                            <p className="capitalize">{item.institution}</p>
                                                                        </TooltipContent>
                                                                    </Tooltip>
                                                                </TooltipProvider>
                                                            </div>
                                                        )}
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>



                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center cl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill,index) =>{
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>;
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about me */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index)=>{
                                        return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>)
    
};

export default Resume;