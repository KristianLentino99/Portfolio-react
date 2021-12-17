import React, {useEffect, useState} from "react";

function WaveComponent() {
    const [waveWidth,setWaveWidth] = useState(30);

    useEffect(() => {
        setWaveWidth(100);
    },[]);
    return (
        <div className="container wave" style={{position:"relative",top:"1px",transform:"rotate(20deg)",width:`${waveWidth}%`}}>
            <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke:"none",fill:"var(--primary-color)"}}></path>
            </svg>
        </div>
    );
}
export default WaveComponent;
