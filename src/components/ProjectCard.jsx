// ProjectCard.js
import React from "react";

const ProjectCard = ({ project }) => {
    const { _id, img, name, description } = project;

    return (
        <article className="tour-card" key={_id}>
            <div className="tour-img-container">
                <img src={`data:image/jpeg;base64,${img}`} className="tour-img" alt={name} />
            </div>
            <div className="tour-info">
                <div className="tour-title">
                    <h4>{name}</h4>
                </div>
                <p>{description}</p>
            </div>
        </article>
    );
};

export default ProjectCard;
