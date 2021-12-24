import React from "react";
import {SingleWorkComponent} from "./SingleWorkComponent";
import {getWorks} from "../../utils/utils";
function CardWorkComponent(){

    const works = getWorks();
    let worksCards = works.map((item) => {
        return (
            <SingleWorkComponent
                image={item.image}
                project_title={item.project_title}
                project_category={item.project_category}
                project_url={item.project_url}
            />
        );
    });
    return (
        <div className="card-wrap">

            <div className="content works">
                <div className={"title font-large d-flex"}>
                    Works
                </div>

                <div className="row grid-items border-line-v">

                    {worksCards}

                    {worksCards.length % 2 !== 0 && (<div className={"col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h"}></div>) }
                </div>

            </div>

        </div>
    );

}

export default CardWorkComponent;
