import { Link } from "react-router-dom"
import { hyphenateWords } from "../../utilities/hyphenateWords"
import styles from './ProjectPreview.module.css'

const ProjectPreview = (props) => {
  return (
    <div className={styles.project}>
      <img src={props.project.image} alt={props.project.title} />
      <section>
        <h2>{props.project.title}</h2>
        <Link to={hyphenateWords(props.project.title)}>
          <button>Learn More</button>
        </Link>
      </section>
    </div>
  )
}

export default ProjectPreview