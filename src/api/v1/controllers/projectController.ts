import { Request, Response } from "express";
import { getAllProjectsService, getProjectByIdService } from "../services/projectServices"
import {HTTP_STATUS} from "../../../constants/httpConstants"

export const getAllProjects = (req: Request, res: Response) => {
    // Logic to get all items

    let result = getAllProjectsService()
    res.status(HTTP_STATUS.OK).json(result);
};

export const getProjectById = (req: Request, res: Response) => {
    let id = Number(req.params.id)

    if (Number.isNaN(id)) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({ error: "id must be convertible toi number" });
        return;
    }

    let result = getProjectByIdService(id)

    if (result === undefined) {
        res.status(HTTP_STATUS.NOT_FOUND).json({ error: `Event with ${id} not found` });
    }

    res.status(HTTP_STATUS.OK).json(result);
};
