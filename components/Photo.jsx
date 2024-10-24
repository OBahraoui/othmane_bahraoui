"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const Photo = () => {
    return (
        <div className="w-full h-full relative" initial={{opacity: 0}} animate={{opacity: 1, transition: { delay:2, duration:0.4, ease: "easeIn"}}}>
            {/* Image */}
            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: { delay:2.4, duration:0.4, ease: "easeInOut"}}}>
                <motion.div className="w-[300px] h-[300px] xl:w-[470px] xl:h-[470px] mix-blend-lighten absolute rounded-full overflow-hidden left-1/2 transform -translate-x-1/2">
                    <Image src="/photo.jpg" priority quality={100} fill alt="" className="object-cover" />
                </motion.div>
            {/* circle */}
            <motion.svg className="w-[302px] xl:w-[470px] h-[302px] xl:h-[470px]" fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
                <motion.circle cx="252" cy="252" r="255" stroke="#0091ff" strokeWidth="4" strokeLinecap="round" strokeLineJoin="round" initial={{strokeDasharray: "24 10 0 0"}} animate={{strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate: [120, 360]}} transition={{duration: 20, repeat: Infinity, repeatType: "reverse"}} />
            </motion.svg>
            </motion.div>
        </div>
    );
    
};

export default Photo;