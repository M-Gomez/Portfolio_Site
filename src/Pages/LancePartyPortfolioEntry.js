// src/components/Footer.js
import React, {useCallback, useState} from 'react';
import {Button, ButtonGroup, Slide} from "@mui/material";
import SWEBody from "./SWEBody";
import ImageViewer from "react-simple-image-viewer";
import textStrings from '../text.json';

function ACTrackerPortfolioEntry() {
    const images = [
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDJqY3JqMGY4dGt3Z21laWZpOWw5am5qd3JuczZ5bng3cWVycWs4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/139eZBmH1HTyRa/giphy.gif",
        "https://placehold.co/1920x1080",
        "https://placehold.co/1600x900",
        "https://placehold.co/1600x900",
        "https://placehold.co/1600x900",
        "https://placehold.co/1600x900",
    ];
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div>
            <h1>Lance Party</h1>
            <p style={{fontSize:26, textIndent: "30px", textAlign: "start", marginLeft: "150px", marginRight: "150px", lineHeight: "1.5"}}>{textStrings.LancePartyText}</p>
            <div style={{marginTop:25}}>
                {images.map((src, index) => (
                    <img
                        src={src}
                        onClick={() => openImageViewer(index)}
                        width="300"
                        key={index}
                        style={{margin: "2px"}}
                        alt=""
                    />
                ))}
                {isViewerOpen && (
                    <ImageViewer
                        src={images}
                        currentIndex={currentImage}
                        onClose={closeImageViewer}
                        disableScroll={false}
                        backgroundStyle={{
                            backgroundColor: "rgba(0,0,0,0.9)"
                        }}
                        closeOnClickOutside={true}
                    />
                )}
            </div>
        </div>
    );
}

export default ACTrackerPortfolioEntry;
