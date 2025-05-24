

// Real-time Collaboration
// Work together seamlessly with conflist-free team editing

import React from "react";

export default function FeatureCard (props : {
    title : string;
    description : string;
    children? : React.ReactNode;
}) {
    const {title, description, children} = props;
    return (
            <div className="bg-neutral-900 border border-white/10 p-6 rounded-3xl ">
                <div className="aspect-video">{children}</div>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
    )

}