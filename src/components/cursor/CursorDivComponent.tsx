import React, {useState, MouseEvent, ReactChildren, ReactElement, useEffect} from "react";
import {MOBILE_WIDTH} from "../../constants/constants";

interface CursorDivComponentProps {
    children: ReactElement;
    className: string|null;
}

function CursorDivComponent(props:CursorDivComponentProps) {

    const [mousePosition,setMousePosition] = useState({
        left:0,
        top: 0
    });
    const [pageWidth, setPageWidth] = useState<number>(window.innerWidth);
    function handleWindowSizeChange() {
        setPageWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    function handleMouseMove(ev:MouseEvent<HTMLDivElement>) {
        setMousePosition({left: ev.pageX, top: ev.pageY});
    }

    const isMobile = pageWidth <= MOBILE_WIDTH;
    return (
        <div
            className={`App ${props.className}`}
            onMouseMove={isMobile ? () => {} : (ev) => handleMouseMove(ev)}
        >
            <div
                className={ !isMobile ? "cursor-follower" : 'mobile'}
                style={{
                    left:mousePosition.left , top: mousePosition.top,
                    backgroundColor:"var(--primary-color)",
                    position:"absolute"
                }}
            />
            {props.children}
        </div>
    );
}

export default CursorDivComponent;
