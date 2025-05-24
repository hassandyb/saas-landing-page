import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import Image from "next/image";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg"
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg"
import Avatar from "@/components/Avatar"
const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];



export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                
                <h2 className="text-6xl font-medium text-center mt-6">
                    Where Power Meets <span className="text-lime-400">Simplicity</span></h2>
                <div className="mt-12 gap-8 grid grid-cols-1">
                    <FeatureCard title="Real-time Collaboration" description="Work together seamlessly with conflist-free team editing">
                        <div className="aspect-video inline-flex items-center justify-center">
                            <Avatar className="z-40"><Image src={avatar1} alt="avatar 1" className="rounded-full"/></Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30"><Image src={avatar2} alt="avatar 2" className="rounded-full"/></Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20"><Image src={avatar3} alt="avatar 3" className="rounded-full"/></Avatar>
                            <Avatar className="-ml-6 border-transparent">
                                <div className=" size-full bg-neutral-700 rounded-full  inline-flex items-center justify-center gap-1">
                                    {Array.from({length: 3}).map((_ , i) => (<span className="size-1.5 rounded-full bg-white inline-flex"></span>))}
                                </div>
                                
                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard title="Interactive Prototyping" description="Engage your clients with prototyps that react to user actions">
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/80 text-center">
                                We've achieved <span className="bg-gradient-to-r from-purple-400 to-pink-400 ">Incredible</span> growth this year
                            </p>
                        </div>
                    </FeatureCard>
                    <FeatureCard title="Keyboard Quick Actions" description="Powerful commands to help you create designs more quickly">
                        <div>
                            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
                        </div>
                    </FeatureCard>


                </div>
                <div>
                    {features.map(feature => (
                        <div key={feature}>
                            <span></span>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
