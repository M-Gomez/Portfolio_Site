import React, {useCallback, useState} from 'react';
import textStrings from '../text.json';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

function ACTrackerPortfolioEntry() {

    return (
        <div>
            <h1>Java FX Library Management Application</h1>
            <p style={{fontSize:26, textIndent: "30px", textAlign: "start", marginLeft: "150px", marginRight: "150px", lineHeight: "1.5"}}>{textStrings.FXAppText}</p>
            <div style={{marginTop:30, width: "66%"}}>
                <LiteYouTubeEmbed
                    id="Fpx2UzcBc2I"
                    title="Short Demo"
                />
            </div>
        </div>
    );
}

export default ACTrackerPortfolioEntry;
