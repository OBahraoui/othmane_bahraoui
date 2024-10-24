"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "othmane.bahraoui@alumni.duke.edu"
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Address",
            description: "London, UK"
            },

];

{/*
            {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: ""
    },
    */}

import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="py-6">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form*/}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Contact Me</h3>
                            <p className="text-white/60">Feel free to reach out using the form below, or you can contact me directly via email. I'm looking forward to hearing from you!</p>
                            {/* Input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input ype="firstname" placeholder="First name" />
                                <Input type="lastname" placeholder="Last name" />
                                <Input type="email" placeholder="Email address" />
                                <Input type="phone" placeholder="Phone number" />
                            </div>
                            {/* textarea */}
                            <Textarea className="h-[200px]" placeholder="Type your message here." />
                            {/* btn */}
                            <a href="mailto:othmane.bahraoui@alumni.duke.edu">
                                <Button size="md" className="max-w-40">
                                    Send message
                                </Button>
                            </a>
                            </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-8">
                        <ul className="flex flex-col gap-10">
                            {info.map((item,index)=>{
                                return <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white.60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            })}
                        </ul>
                        </div>
                </div>
            </div>
            </motion.section> )
};

export default Contact;