// src/components/Footer.js
import React from 'react';
import ConversationalText from "react-conversational-text";

function About() {
    return (
        <div align={"center"} style={{minHeight: "130px"}}>
            <ConversationalText delayBetweenCharactersMs={25} delayBetweenMessageMs={60}
                                style={{fontSize: 30, alignContent: "center"}} lineBreakBetweenMessages={true}
                                messages={[
                                    "Hello there! My name is Manuel Gomez.",
                                    "I'm a Software Developer with experience in multiple languages and stacks.",
                                    "This website exists as a short documentation of my projects and experience.",
                                    "If you wish to reach me feel free to reach out via Email or LinkedIn.",
                                ]}
            />
        </div>
    );
}

export default About;
