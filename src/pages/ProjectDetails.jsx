import { projects } from "../data/projects"

const ProjectDetails = () => {
  return (
    < >
      <h1>{projects[0].title}</h1>
      <p>{projects[0].description}</p>
      <img 
        src={projects[0].image} 
        alt={projects[0].title} 
      />
      <button>
        <a 
          href={projects[0].repositoryLink}
          target="_blank"
          rel="noreferrer"
          className="link-buttons"
        >
          GitHub Repo
        </a>
      </button>
      <button>
        <a 
          href={projects[0].deploymentLink}
          target="_blank"
          rel="noreferrer"
          className="link-buttons"
        >
          Play Here!
        </a>
      </button>
    </>
  )
}

export default ProjectDetails