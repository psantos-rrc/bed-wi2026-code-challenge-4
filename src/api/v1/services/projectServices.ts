import Project from "../../../models/interfaces"

export const getAllProjectsService = (): EventsCount => {
    return {projects: projects, count: projects.length};
};

export const getProjectByIdService = (id: number): Event | undefined => {
    let project = projects.find(x => x.id == id)

    return project
};