import Project, { projectsArray } from "../../../models/interfaces"

export const getAllProjectsService = (): {} => {
    return {projects: projectsArray, count: projectsArray.length};
};

export const getProjectByIdService = (id: number): Project | undefined => {
    let project = projectsArray.find(x => x.id == id)

    return project
};