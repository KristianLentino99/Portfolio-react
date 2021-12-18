import React from "react";


function CardAboutComponent(){
    return (
        <React.Fragment>
            <div className={"title font-large d-flex"}>
                About Me
            </div>

            <div className={"row"}>
                <div className={"col col-d-12 col-t-12 col-m-12 border-line-v"}>
                    <div className={"text-box col col-d-12 mb-1"}>
                        <p className={"text-white"}>
                            Ciao, Mi chiamo Kristian e ho 22 anni .<br/>
                            Subito dopo il diploma ho avuto modo di entrare in Zucchetti e apprendere come funziona il mondo del lavoro e sopratutto il flusso di lavoro in grandi aziende molto strutturate. <br/>
                            Attualmente in Dieffetech mi occupo di coordinare il mio team, gestire le attività e sviluppare applicativi web-based vari, dai portali di formazione ai CRM , sistemi di fatturazione elettronica e molto altro.
                            Nel tempo libero mi sono occupato anche di sviluppare siti vetrina per clienti di un videomaker . <br/>
                            Nel mio lavoro cerco sempre di stare attento ai piccoli dettagli e alle performance degli applicativi che sviluppo con particolare attenzione al lato frontend dei miei applicativi come ad esempio SEO e Web core vitals .
                            Amo investire il mio tempo libero nell’approfondire il mondo della programmazione , con particolare focus e attenzione ai vari design patterns, Node js e React.
                        </p>
                    </div>
                    <div className={"info-list"}>
                        <ul>
                            <li>
                                <strong>
                                    Age . . . . .
                                </strong> 22
                            </li>
                            <li>
                                <strong>
                                    Birth Date . . . . .
                                </strong>
                                04/09/1999
                            </li>
                            <li>
                                <strong>
                                    Residence . . . . .
                                </strong> Italia
                            </li>
                            <li>
                                <strong>
                                    City . . . . .
                                </strong> Chignolo Po
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={"clear"}></div>
            </div>

        </React.Fragment>
    );
}

export default CardAboutComponent;
