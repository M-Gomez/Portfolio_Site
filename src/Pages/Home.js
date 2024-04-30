// src/components/Footer.js
import React from 'react';
import ConversationalText from "react-conversational-text";
function Home() {
    return (
        <div align={"center"} style={{minHeight: "130px"}}>
        <ConversationalText delayBetweenCharactersMs={25} delayBetweenMessageMs={60}
            style={{fontSize:30, alignContent: "center" }}lineBreakBetweenMessages={true}
            messages={[
                "Welcome to my simple portfolio website!",
                "This acts as both a showcase of some of my projects,",
                "as well as a way to easily access my socials.",
            ]}
        />
</div>
    );
}

export default Home;
