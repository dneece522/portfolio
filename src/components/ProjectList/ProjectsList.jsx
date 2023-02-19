import ProjectPreview from "../ProjectPreview/ProjectPreview"
import styles from './ProjectList.module.css'

const ProjectsList = (props) => {
  return (
    <ul className={styles.projectList}>
      {props.projects.map(project =>
        <li key={project.title}>
          <ProjectPreview project={project} />
        </li>  
      )}
    </ul>
  )
}

export default ProjectsList