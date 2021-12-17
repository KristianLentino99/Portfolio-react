import React from "react";
import SocialComponent from "../social/SocialComponent";

function CardProfileComponent(){
    return (
        <div className={"card-started"} id="home-card">

            <div className="profile">

                <div className={"slide"} style={{backgroundImage: "./images/bg.jpg"}}></div>
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
                    <a href="#" className={"lnk"}>
                        <span className={"text"}>
                            Download CV
                        </span>
                    </a>
                    <a href="mailto:lentino_kristian@libero.it" className={"lnk discover"}>
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
