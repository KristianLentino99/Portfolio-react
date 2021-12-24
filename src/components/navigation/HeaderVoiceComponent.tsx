import React, {FunctionComponent, ReactElement} from "react";

interface HeaderVoiceComponentProps{
    active: boolean,
    text: string,
    index:number,
    onClick: Function,
    children: ReactElement
}
export const HeaderVoiceComponent:FunctionComponent<HeaderVoiceComponentProps> = ({index,children,active,text,onClick}) => {
    return (
        <li className={ `cursor-pointer ${active ? 'active ' : ''}`}>
            <a onClick={() => onClick(index)}>
                {children}
            </a>
        </li>
    );
}
