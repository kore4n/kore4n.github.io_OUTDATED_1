
import React from "react";
import ProjectBody from '../components/project-body';


export default function PortfolioWebsite() {
    return (
        <>
            <ProjectBody
                name="Portfolio Website"
                description="This website was my first project involving HTML, CSS, Tailwind CSS, React, and NextJS.
                I knew from the start that I wanted to use Tailwind after seeing all the hype I've heard about it.
                I used ThreeJS &#40;more specifically React Three Fiber&#41; to implement a distinct &#40;hopefully nice&#41; looking background, and an intersection observer hook to implement a smooth animation for the About section.
                "
                imgLink="images/portfolio-website/Portfolio.PNG"
                imgWidth={640/1.25}
                imgHeight={750/1.25}
                githubLink="https://github.com/kore4n/kore4n.github.io"

            />
        </>
    );
}