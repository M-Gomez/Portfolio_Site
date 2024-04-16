// src/components/Footer.js
import React from 'react';
import ConversationalText from "react-conversational-text";
import CaseStudyEntry from "./CaseStudyEntry";

function CaseStudies() {
    return (
        <div align={"center"}>
            <ConversationalText
                style={{fontSize: 30, alignContent: "center"}} lineBreakBetweenMessages={true}
                messages={[
                    "Here's a showcase of some case studies I've performed.",
                ]}
            />
            <CaseStudyEntry></CaseStudyEntry>
        </div>
    );
}

export default CaseStudies;
