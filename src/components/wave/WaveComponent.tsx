import React, {useEffect, useState} from "react";

function WaveComponent() {
    const [waveWidth,setWaveWidth] = useState(30);

    useEffect(() => {
        setWaveWidth(100);
    },[]);
    return (
        <React.Fragment>
            <div className="wave" style={{width:`${waveWidth}%`}}>
                <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                    <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke:"none",fill:"var(--primary-color)"}}></path>
                </svg>
            </div>
            <div className="wave-black" style={{width:`${waveWidth - 18}%`}}>
                <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                    <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke:"none",fill:"black"}}></path>
                </svg>
            </div>
        </React.Fragment>
    );
}
export default WaveComponent;
