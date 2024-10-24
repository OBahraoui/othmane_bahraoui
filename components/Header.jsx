import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/*logo*/}
                <Link href="/">
                <Image
            src="/othmane_logo_2.png" // Path to the image in your public folder
            alt="Othmane's Logo"
            width={175} // Adjust width as needed
            height={175} // Adjust height as needed
            className="rounded-full" // Rounded logo
          />
                </Link>


                {/* desktop nav & hire me button */}


            
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <a href="mailto:othmane.bahraoui@alumni.duke.edu">
                                <Button>
                                    Hire me
                                </Button>
                            </a>
                </div>
                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>

            </div>
        </header>
    );
};

export default Header;