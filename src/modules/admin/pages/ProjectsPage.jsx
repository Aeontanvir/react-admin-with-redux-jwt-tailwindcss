import React, { useState, useEffect } from "react";
import {getAll} from "../../../services/project.service";

function ProjectsPage() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    getAll().then((resp) => {
      setProjectList(privList=>resp.data.data);
    });
  };

  return (
    <div>
      <h1>List of Data</h1>
      <ul>
        {projectList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsPage;
