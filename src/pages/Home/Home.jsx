import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Andrew Neece</h1>
      <img src="profile.jpeg" alt="Andrew Neece" />
      <h2>Fullstack Software Engineer</h2>
    </div>
  )
}

export default Home