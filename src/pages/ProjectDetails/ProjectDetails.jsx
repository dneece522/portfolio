import { useParams } from "react-router-dom"
import { findProject } from "../../utilities/findProject"
import styles from './ProjectDetails.module.css'

const ProjectDetails = () => {
  const projectId = useParams()
  const project = findProject(projectId.projectDetails)
  console.log(project)
  return (
    <div className={styles.container} style={{fontFamily: 'Montserrat'}}>
      <h1>{project.title}</h1>
      <img 
        src={project.image} 
        alt={project.title} 
      />
      <p>{project.description}</p>
      <div className={styles.buttons}>
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
      </div>
    </div>
  )
}

export default ProjectDetails