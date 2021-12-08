import React from "react";

const ProfileProject = ({project}) => {
    console.log(project);
  return (
    <div>
      <div className="projectDemo">
        <img src="" className="img-fluid" alt="" />

        <div className="info d-flex justify-content-between">
          <p>Project Title 12345</p>

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
