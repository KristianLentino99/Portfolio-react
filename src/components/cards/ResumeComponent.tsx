import React from "react";

interface ResumeComponentProps{
    date: string,
    role: string,
    company:string,
    description:string
}
function ResumeComponent(props:ResumeComponentProps){
    const {date,role,company,description} = props;
    return (
        <div className="resume-item border-line-h active">
            <div className="date">
                {date}
            </div>
            <div className="name">
                {role}
            </div>
            <div className="company">
                {company}
            </div>
            <p>
                {
                    description
                }
            </p>
        </div>
    );
}
export {ResumeComponent};
