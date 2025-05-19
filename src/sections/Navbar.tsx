import { section } from "framer-motion/client";
import Image  from "next/image"
import logoImage from "@/assets/images/logo.svg"
import { FiMenu } from "react-icons/fi";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return <section className="py-4">
        <div className="container">
            <div className="grid grid-cols-2 border border-white/15 rounded-full px-4 py-2  items-center">
                <div>
                    <Image src={logoImage} alt="layers logo" className="h-6 w-auto "/>
                </div>
                <div className="flex justify-end">
                <FiMenu className="feather feather-menu text-2xl text-white cursor-pointer md:hidden" />
                <button>Log In</button>
                <button>Sign Up</button>
                </div>
            </div>
        </div>
    </section>;
}
