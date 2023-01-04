import React from "react";

import ProjectBody from '../components/project-body';


export default function Election() {
    return (
        <>
            <ProjectBody
                name="Election Console App"
                description="This website was written in C and was my fifth and final project for my CS 2211 course &#40;Software Tools and Systems Programming&#41;.
                This console app was made in roughly 1 week and simulates an election through the use of user-inputted candidates and ridings.
                Users can add, remove, search for, and manipulate data of candidates and ridings.
                The app implements linked lists with double pointers to store and retrieve custom candidate and riding data.
                "
                imgLink="images/election/election_db.png"
                imgWidth={640/1.25}
                imgHeight={890/1.25}
                githubLink="https://github.com/kore4n/School/tree/main/Year%202/CS%202211/Assignment%205"
            />
        </>
    );
}