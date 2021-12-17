import React, {ReactElement} from "react";
import logo from "../../logo.svg";

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
                    <li className={activeTab == 1 ? 'active' : ''}>
                        <a onClick={() => onVoiceClick(1)}>
                            <span className="icon ion-person"></span>
                            <span className="link">About</span>
                        </a>
                    </li>
                    <li className={activeTab == 2 ? 'active' : ''}>
                        <a onClick={() => onVoiceClick(2)}>
                            <span className="icon ion-android-list"></span>
                            <span className="link">Resume</span>
                        </a>
                    </li>
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
