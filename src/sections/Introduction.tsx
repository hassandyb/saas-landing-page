const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
import Tag from "@/components/Tag"
export default function Introduction() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Introducing Layers</Tag> 
                    
                </div>
                
                <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                    <span>Your creative process deserves better.</span>{" "}
                    <span className="text-white/25">{text}</span>
                    <span className="text-lime-400 block">That&apos;s why we built layers</span>
                </div>

            </div>
        </section>
    );
}
