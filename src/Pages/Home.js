// src/components/Footer.js
import React from 'react';
import ConversationalText from "react-conversational-text";
function Home() {
    return (
        <div align={"center"} style={{minHeight: "130px"}}>
        <ConversationalText
            style={{fontSize:30, alignContent: "center"}}lineBreakBetweenMessages={true}
            messages={[
                "Here's a showcase of my non career software projects,",
                "some are personal, some are small contracting work.",
            ]}
        />
</div>
    );
}

export default Home;
