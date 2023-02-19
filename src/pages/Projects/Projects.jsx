import { projects } from "../../data/projects"
import ProjectsList from "../../components/ProjectList/ProjectsList"
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <div className={styles.container} style={{fontFamily: 'Montserrat'}}>
      <h1>Projects</h1>
      <ProjectsList projects={projects} />
    </div>
  )
}

export default Projects