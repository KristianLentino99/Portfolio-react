import React, {useState, MouseEvent, ReactChildren, ReactElement} from "react";

interface CursorDivComponentProps {
    children: ReactElement;
    className: string|null;
}

function CursorDivComponent(props:CursorDivComponentProps) {

    const [mousePosition,setMousePosition] = useState({
        left:0,
        top: 0
    });

    function handleMouseMove(ev:MouseEvent<HTMLDivElement>) {
        setMousePosition({left: ev.pageX, top: ev.pageY});
    }
    return (
        <div
           className={`App ${props.className}`}
           onMouseMove={(ev) => handleMouseMove(ev)}
        >
            <div
                className={"cursor-follower"}
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
