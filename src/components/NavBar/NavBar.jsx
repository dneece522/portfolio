import { Link } from "react-router-dom"
import styles from './NavBar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMicrochip } from "@fortawesome/free-solid-svg-icons"

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <Link className={styles.icon} to='/'><FontAwesomeIcon icon={faMicrochip} size={'3x'} spin /></Link>
      <ul>
        <li>
          <Link className={styles.links} to='/about'>About</Link>
        </li>
        <li>
          <Link className={styles.links} to='/resume'>Resume</Link>
        </li>
        <li>
          <Link className={styles.links} to='/projects'>Projects</Link>
        </li>
        <li>
          <Link className={styles.links} to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar