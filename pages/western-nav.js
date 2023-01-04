import React from "react";

import ProjectBody from '../components/project-body';


export default function WesternNav() {
    return (
    <>
        <ProjectBody
            name="WesternNav"
            description="WesternNav was our culminating course project for CS 2212 course &#40;Intro to Software Engineering&#41; written in Java.
            WesternNav functioned as a desktop app geographic information system and was made in a team of 5.
            The app converts PDF files into interactable maps and allows users to navigate between locations on campus, and to add/remove these locations from the map.
            My responsibilities included GUI development, adding the abilities to edit locations of points visually, to sort shown points by user selected parameters, and I constructed UML diagrams for the weather feature.
            I acted as the team leader and scrum master and acted to consult with group members to resolve issues, ensured project was kept on track, and implemented weather service API provided by OpenWeather to read relevant JSON files.
            Used technologies include Bitbucket, Confluence, Jira, and Balsamiq Wireframes to design the UI."
            imgLink="images/western-nav/WesternNav1.PNG"
            imgWidth={1200/2}
            imgHeight={630/2}
            githubLink="https://github.com/kore4n/School/tree/main/Year%202/CS%202212/Course%20Project"
        />
    </>
    );
}