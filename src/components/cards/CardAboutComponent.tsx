import React from "react";


function CardAboutComponent(){
    let currentYear = new Date().getFullYear()
    let years = (currentYear - 1999).toFixed(0); 
    return (
        <React.Fragment>
            <div className={"title font-large d-flex"}>
                About Me
            </div>

            <div className={"row"}>
                <div className={"col col-d-12 col-t-12 col-m-12 border-line-v"}>
                    <div className={"text-box col col-d-12 mb-1"}>
                        <p className={"text-white"}>
                            <h2>Ciao!</h2>
                            My name is Kristian and I am {years} years old . <br/>
                            Immediately after graduating I had the opportunity to join Zucchetti and learn how the business world works,
                            especially the workflow in large, highly structured companies. <br/>
                            Later at Dieffetech I was involved in developing web-based applications of all kinds, from training portals to CRMs, electronic invoicing systems and much more.
                            In my spare time I also occasionally worked on developing showcase sites. <br/>
                            In my work I always try to pay attention to the small details and performance of the applications I develop, with particular attention to the frontend side of my applications such as SEO and Web core vitals.
                            I currently hold the position of Software Engineer at Moneyfarm where I deal with Backend developments in Scala. <br/>
                            Even if I currently work as Backend ,I love to invest my free time in delving into the world of programming, with particular focus on design patterns, Node js and React.
                        </p>
                    </div>
                    <div className={"info-list"}>
                        <ul>
                            <li>
                                <strong>
                                    Age . . . . .
                                </strong> {years}
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
                                </strong> Italy
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
