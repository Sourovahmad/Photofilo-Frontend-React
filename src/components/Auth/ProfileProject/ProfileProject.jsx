import React from "react";

const ProfileProject = ({project}) => {

  return (
    <div>
      <div className="projectDemo">
        <img src={project.thumbnail} className="img-fluid" alt="" />

        <div className="info d-flex justify-content-between">
          <p>{project.title}</p>

          <div className="d-flex justify-content-between view">
            <p>
              <i class="fas fa-edit"> Edit </i>{" "}
            </p>
            <p>
              <i class="fas fa-eye"> View </i>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileProject;
