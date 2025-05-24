import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";

// import avatar1 from "@/assets"
const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];


// grid grid-cols-1
//flex flex-col md:flex-row
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
                    <FeatureCard title="Real-time Collaboration" description="Work together seamlessly with conflist-free team editing"/>
                    <FeatureCard title="Interactive Prototyping" description="Engage your clients with prototyps that react to user actions"/>
                    <FeatureCard title="Keyboard Quick Actions" description="Powerful commands to help you create designs more quickly"/>


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
