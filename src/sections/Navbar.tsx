import { a, section } from "framer-motion/client";
import Image  from "next/image"
import logoImage from "@/assets/images/logo.svg"
import { FiMenu } from "react-icons/fi";
import Button from "@/components/Button"
import { keyframes } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" }, 
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return <section className="py-4 lg:py-8">
        <div className="container">
            <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full px-4 md:pr-2 py-2  items-center">
                <div >
                    <Image src={logoImage} alt="layers logo" className="h-6 md:h-auto w-auto "/>
                </div>
                <div className="hidden lg:flex justify-center items-center">
                    <nav className="flex gap-6 font-medium ">
                        {navLinks.map((link) => (
                            <a href={link.href} key={link.label}>{link.label}</a>
                        ))}
                    </nav>
                </div>
                <div className="flex justify-end gap-4 ">
                    <FiMenu className="feather feather-menu text-2xl text-white cursor-pointer md:hidden" />
                    
                    <Button variant="secondary" className="hidden md:inline-flex items-center">Log In</Button>
                    <Button variant="primary" className="hidden md:inline-flex items-center">Log In</Button>
                </div>
            </div>
        </div>
    </section>;
}
