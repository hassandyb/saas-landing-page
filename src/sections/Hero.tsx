
import Button from "@/components/Button"

import designExample1Emage from "@/assets/images/design-example-1.png"
import designExample2Emage from "@/assets/images/design-example-2.png"
import Image from "next/image";

export default function Hero() {
    return (
        <section className="py-24">
            <div className="container relative">
                <div>
                    <Image src={designExample1Emage} alt="design example 1 image"/>
                </div>

                <div className="flex justify-center">
                <div className="inline-flex  py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold ">✨ $7.5M Said Round Raided</div>
                </div>
                
                <h1 className="text-6xl text-center font-medium mt-6 md:text-7xl lg:text-8xl">Impactful Design, Created Effortlessly</h1>
                <p className="text-center text-xl text-white/60 mt-8 max-w-2xl mx-auto ">Design tools should not slow you down, Layers combine powerful featuers with an intuitive inerface that keeps you in your creative flow.</p>
                
                <form className="flex  border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input className="bg-transparent w-full flex-1 px-4" type="email" placeholder="Enter your email"/>
                    <Button type="submit" variant="primary" className="whitespace-nowrap " size="sm">Sign Up</Button>
                </form>
            </div>
        </section>
    );
}


