import React, {FunctionComponent, useEffect, useState} from "react";
interface TypingComponentProps {
    text: string,
    speed?: number,
    shouldLoop?: boolean
}
export const TypingComponent:FunctionComponent<TypingComponentProps>  = ({text,speed,shouldLoop}) => {

    const [activeText,setActiveText] = useState("");
    const [isDeleting,setIsDeleting] = useState(false);

    const handleType = () => {
        const fullText = text;
        setActiveText(
            isDeleting ? fullText.substring(0, activeText.length - 1) :
                fullText.substring(0, activeText.length + 1)
        );

        //se ha raggiunto il 100% del testo setto che deve eliminare ora
        if (!isDeleting && activeText === fullText && shouldLoop) {

            setTimeout(() => setIsDeleting(true), 500);

        } else if (isDeleting && activeText === '') {

            setIsDeleting(false);
        }

    };

    useEffect(() => {
        setTimeout(handleType,speed);
    },[activeText,isDeleting]);
    return (
        <div style={{display:"inline-block"}}>
            <span className={"font-medium text-white"}>{activeText}</span>
            <span id="cursor"/>
        </div>
    );
};
TypingComponent.defaultProps ={
    speed: 160,
    shouldLoop: false
}
