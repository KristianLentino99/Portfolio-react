// @flow
import * as React from 'react';

type Props = {
    image?: string,
    project_title: string,
    project_category: string,
    project_url: string,
};
export const SingleWorkComponent = ({image,project_title,project_category,project_url}: Props) => {
    return (
        <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
            <div className="box-item">
                <div className="image">
                    {image && (
                        <a href={project_url} className="has-popup-image">
                            <img src={image} alt=""/>
                            <span className="info">
                                <span className="ion ion-image"></span>
                            </span>
                        </a>
                    )}
                </div>
                <div className="desc">
                    <a href={project_url} className="name has-popup-image">
                        {project_title}
                    </a>
                    <div className="category">
                        {project_category}
                    </div>
                </div>
            </div>
        </div>
    );
};
