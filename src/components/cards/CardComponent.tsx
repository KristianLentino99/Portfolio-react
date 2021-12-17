import React, {ReactElement} from "react";

interface CardProps {
    className: string|null,
    children: ReactElement
}
function CardComponent(props:CardProps) {

    return(
        <div className={`card-inner animated active collapse-card ${props.className??'d-fade'}`} id={"about-card"}>
            <div className="card-wrap">
                <div className="content about">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
export default CardComponent;
