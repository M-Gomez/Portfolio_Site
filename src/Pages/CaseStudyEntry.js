// src/components/Footer.js
import React, {useCallback, useState} from 'react';
import {Button, ButtonGroup, Fade, Slide} from "@mui/material";
import SWEBody from "./SWEBody";
import ImageViewer from "react-simple-image-viewer";
import textStrings from '../text.json';

function CaseStudyEntry() {
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
    const [projPhase, setPhase] = React.useState(false);
    const [projName, setProj] = React.useState(false);
    const handleProjChange = (projName) => {
        setProj((prev) => projName);
    };

    const handleChange = (phaseName) => {
        setPhase((prev) => phaseName);
    };

    return (
        <div>

            <div style={{marginTop: 50}}>
                <div style={{marginBottom: 20}}>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Button
                            onClick={() => handleProjChange(textStrings.CaseStudy1.Title)}>{textStrings.CaseStudy1.Title}</Button>
                        <Button
                            onClick={() => handleProjChange(textStrings.CaseStudy2.Title)}>{textStrings.CaseStudy2.Title}</Button>
                    </ButtonGroup>
                </div>
                <ButtonGroup variant="contained" aria-label="Basic button group">
                    <Button onClick={() => handleChange("Background")}>Background</Button>
                    <Button onClick={() => handleChange("Ask")}>Ask</Button>
                    <Button onClick={() => handleChange("Prepare")}>Prepare</Button>
                    <Button onClick={() => handleChange("Process")}>Process</Button>
                    <Button onClick={() => handleChange("Analyze")}>Analyze</Button>
                    <Button onClick={() => handleChange("Share")}>Share</Button>
                    <Button onClick={() => handleChange("Act")}>Act</Button>

                </ButtonGroup>
                <h1 style={{marginTop: "25px"}}>{projName == textStrings.CaseStudy1.Title ? textStrings.CaseStudy1.Title : textStrings.CaseStudy2.Title}</h1>

            </div>
            <Fade in={projPhase=="Background"}><div>
            <p style={{fontSize:26, textIndent: "30px", textAlign: "start", marginLeft: "150px", marginRight: "150px", lineHeight: "1.5"}}>{projName == textStrings.CaseStudy1.Title ? textStrings.CaseStudy1.BackgroundText : textStrings.CaseStudy2.BackgroundText}</p>
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
            </Fade>
            <div>
            <Fade in={projPhase=="Ask"}><div>
                <p style={{fontSize:26, textIndent: "30px", textAlign: "start", marginLeft: "150px", marginRight: "150px", lineHeight: "1.5"}}>{textStrings.CaseStudy1.BackgroundText}</p>
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
            </Fade>
                </div>
        </div>
    );
}

export default CaseStudyEntry;
