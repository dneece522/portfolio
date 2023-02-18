import styles from './Resume.module.css'

const Resume = () => {
  return (
    <div className={styles.container} style={{fontFamily: 'Montserrat'}}>
      <h1>Resume</h1>
      <p>
        Click the link to download <a href="resume.pdf" target="_blank" rel="noreferrer">my resume</a>!
      </p>
    </div>
  )
}

export default Resume