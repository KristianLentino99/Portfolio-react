import React, {ReactElement} from "react";
import logo from "../../logo.svg";
import {HeaderVoiceComponent} from "./HeaderVoiceComponent";

interface HeaderProps {
    onVoiceClick:Function,
    activeTab:number
}

function HeaderComponent(props:HeaderProps){
    const {onVoiceClick,activeTab} = props;
    return (
        <header className="header">

            <div className="top-menu">
                <ul>
                    <HeaderVoiceComponent index={1} onClick={onVoiceClick} active={activeTab === 1} text={"About"}>
                        <React.Fragment>
                            <span className="icon ion-person"></span>
                            <span className="link">About</span>
                        </React.Fragment>
                    </HeaderVoiceComponent>
                    <HeaderVoiceComponent index={2} onClick={onVoiceClick} active={activeTab === 2} text={"Resume"}>
                        <React.Fragment>
                            <span className="icon ion-android-list"></span>
                            <span className="link">Resume</span>
                        </React.Fragment>
                    </HeaderVoiceComponent>
                    <li>
                        <a href="#works-card">
                            <span className="icon ion-paintbrush"></span>
                            <span className="link">Works</span>
                        </a>
                    </li>
                    <li>
                        <a href="#blog-card">
                            <span className="icon ion-chatbox-working"></span>
                            <span className="link">Blog</span>
                        </a>
                    </li>
                    <li>
                        <a href="#contacts-card">
                            <span className="icon ion-at"></span>
                            <span className="link">Contact</span>
                        </a>
                    </li>
                </ul>
            </div>

        </header>
    );
}

export default HeaderComponent;
