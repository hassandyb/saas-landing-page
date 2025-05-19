import { section } from "framer-motion/client";
import Image  from "next/image"
import logoImage from "@/assets/images/logo.svg"


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

                </div>
            </div>
        </div>
    </section>;
}
