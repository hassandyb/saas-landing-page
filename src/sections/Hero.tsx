
import Button from "@/components/Button"
export default function Hero() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                <div className="inline-flex  py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold ">✨ $7.5M Said Round Raided</div>
                </div>
                
                <h1 className="text-6xl text-center font-medium mt-6">Impactful Design, Created Effortlessly</h1>
                <p className="text-center text-xl text-white/60 mt-8">Design tools should not slow you down, Layers combine powerful featuers with an intuitive inerface that keeps you in your creative flow.</p>
                
                <form className="flex  border border-white/15 rounded-full p-2 mt-8">
                    <input className="bg-transparent px-4" type="email" placeholder="Enter your email"/>
                    <Button type="submit" variant="primary">Sign Up</Button>
                </form>
            </div>
        </section>
    );
}


