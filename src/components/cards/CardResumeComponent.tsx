import React from "react";
import {ResumeComponent} from "./ResumeComponent";


function CardAboutComponent(){
    return (
        <div className="resume">
            <div className={"title font-large d-flex"}>
                Resume
            </div>

            <div className="row col col-12">
                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                    <div className="resume-title border-line-h">
                        <div className="icon"><i className="ion ion-briefcase"></i></div>
                        <div className="name">Experience</div>
                    </div>
                    <div className="resume-items">
                        <ResumeComponent
                            date={"2022 - Presente"}
                            company={"Moneyfarm"}
                            role={"Software Engineer - Backend"}
                            description={"At Moneyfarm I am in charge of improving and implementing new features for our services, with the aim of delivering the best possible experience to our users and improving our product."}
                        />
                        <ResumeComponent
                            date={"2019 - 2022"}
                            company={"Dieffetech"}
                            role={"Full stack web developer"}
                            description={"At Dieffetech, I was responsible for coordinating my team, managing activities and developing various web-based applications, from training portals to CRMs, electronic invoicing systems and much more."}
                        />
                        <ResumeComponent
                            date={"2018 - 2019"}
                            company={"Zucchetti"}
                            role={"Developer"}
                            description={"At Zucchetti I worked with a proprietary framework but working here allowed me to observe the organisation of large companies, as well as giving me a solid base of SQL"}
                        />
                    </div>
                </div>
                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                    <div className="resume-title border-line-h">
                        <div className="icon"><i className="ion ion-university"></i></div>
                        <div className="name">Education</div>
                    </div>
                    <div className="resume-items">
                        <ResumeComponent
                            date={"2019"}
                            company={"React Native"}
                            role={"ESIS Srl"}
                            description={"I undertook a 3-day basic course on React Native"}
                        />

                        <ResumeComponent
                            date={"2018"}
                            company={"high school diploma"}
                            role={"ITIS Cesaris"}
                            description={"I graduated in 2018 from the ITIS A. Cesaris institute in Casalpusterlengo with an 86/100 in computer science."}
                        />

                    </div>
                </div>
            </div>
        </div>
    );

}

export default CardAboutComponent;
