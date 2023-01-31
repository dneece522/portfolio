import { projects } from "../data/projects"
import { hyphenateWords } from "./hyphenateWords"

function findProject(str) {
  const wantedProject = projects.filter(project => hyphenateWords(project.title) === str)
  return wantedProject[0]
}

export {
  findProject
}