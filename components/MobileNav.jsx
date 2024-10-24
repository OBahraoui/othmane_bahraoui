"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {CiMenuFries} from "react-icons/ci";
import Image from 'next/image';

const links= [
    {
        name:'home',
        path:'/'
    },
    {
        name:'projects',
        path:'/projects'
    },
    {
        name:'resume',
        path:'/resume'
    },
    {
        name:'contact',
        path:'/contact'
    },
];

const MobileNav = () => {
    const  pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/** logo */}
                <div className="mt-32 mb-20 text-center text-2xl">
                    <Link href="/">
                    <Image
            src="/othmane_logo_2.png" // Path to the image in your public folder
            alt="Othmane's Logo"
            width={175} // Adjust width as needed
            height={175} // Adjust height as needed
            className="mx-auto rounded-full" // Rounded logo
          />
                    </Link>
                </div>
                {/** nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map ((link, index) => {
                            return <Link href={link.path} key={index} className={`${ link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                                {link.name}
                            </Link>
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
    
};

export default MobileNav;