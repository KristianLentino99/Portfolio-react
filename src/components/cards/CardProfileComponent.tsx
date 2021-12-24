import React from "react";
import SocialComponent from "../social/SocialComponent";
import {TypingComponent} from "../auto_typing/TypingComponent";
import {CV_URL,CONTACT_EMAIL} from "../../constants/constants";

function CardProfileComponent(){
    return (
        <div className={"card-started"} id="home-card">

            <div className="profile">

                <div className={"slide d-flex align-items-center justify-content-center"} style={{backgroundImage: "./images/bg.jpg"}}>
                    <div>
                        <TypingComponent text={"Hi, I'm Kristian Lentino"} />
                    </div>
                </div>
                <div className="image">
                    <img src={"https://www.kristianlentino.it/admin/images/image-circle.png"} alt="Kristian Lentino" />
                </div>

                <div className={"title"}>
                    Kristian Lentino
                </div>
                <div className={"subtitle"}>
                    Web Developer
                </div>
                <SocialComponent/>
                <div className={"lnks"}>
                    <a href={CV_URL} target={'_blank'} className={"lnk"}>
                        <span className={"text"}>
                            Download CV
                        </span>
                    </a>
                    <a href={`mailto:${CONTACT_EMAIL}`} className={"lnk discover"}>
                        <span className={"text"}>
                            Contact Me
                        </span>
                    </a>
                </div>

            </div>

        </div>
    );
}

export default CardProfileComponent;
