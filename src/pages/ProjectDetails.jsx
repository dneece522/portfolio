import { useParams } from "react-router-dom"
import { findProject } from "../utilities/findProject"

const ProjectDetails = () => {
  const projectId = useParams()
  const project = findProject(projectId.projectDetails)
  console.log(project)
  return (
    < >
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img 
        src={project.image} 
        alt={project.title} 
      />
      <button>
        <a 
          href={project.repositoryLink}
          target="_blank"
          rel="noreferrer"
          className="link-buttons"
        >
          GitHub Repo
        </a>
      </button>
      <button>
        <a 
          href={project.deploymentLink}
          target="_blank"
          rel="noreferrer"
          className="link-buttons"
        >
          Open App
        </a>
      </button>
    </>
  )
}

export default ProjectDetails