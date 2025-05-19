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
    return <section>
        <div className="container">
            <div className="grid grid-cols-2">
                <div>
                    <Image src={logoImage} alt="layers logo"/>
                    
                </div>
                <div>
                {/* <FiMenu className=" "/> */}
                <FiMenu className="feather feather-menu text-2xl text-white cursor-pointer" />




                </div>
            </div>
        </div>
    </section>;
}
