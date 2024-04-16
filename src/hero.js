// src/components/Hero.js
import React from 'react';

function Hero() {
    return (
        <div style={{ padding: '50px 20px', textAlign: 'center' }}>
            <h2>Welcome to Our Service</h2>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content.</p>
            <button style={{ padding: '10px 20px', marginTop: '20px', fontSize: '16px', cursor: 'pointer' }}>Learn More</button>
        </div>
    );
}

export default Hero;
