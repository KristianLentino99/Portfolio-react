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
                            date={"2019 - PRESENT"}
                            company={"Dieffetech"}
                            role={"Full stack web developer"}
                            description={"In Dieffetech mi occupo di coordinare il mio team, gestire le attività e sviluppare applicativi web-based vari, dai portali di formazione ai CRM , sistemi di fatturazione elettronica e molto altro."}
                        />
                        <ResumeComponent
                            date={"2018 - 2019"}
                            company={"Zucchetti"}
                            role={"Developer"}
                            description={"In Zucchetti ho lavorato con un framework proprietario ma lavorare qui mi ha permesso di osservare l'organizzazione delle grandi aziende, oltre ad avermi dato un'ottima infarinatura di SQL"}
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
                            role={"Presso ESIS Srl"}
                            description={"Ho intrapreso un corso base della durata di 3 giorni su React Native"}
                        />

                        <ResumeComponent
                            date={"2018"}
                            company={"Diploma scuola superiore"}
                            role={"ITIS Cesaris"}
                            description={"Mi sono diplomato nel 2018 dall'indirizzo di informatica con 86/100 presso l'istituto ITIS A. Cesaris a Casalpusterlengo"}
                        />

                    </div>
                </div>
            </div>
        </div>
    );

}

export default CardAboutComponent;
