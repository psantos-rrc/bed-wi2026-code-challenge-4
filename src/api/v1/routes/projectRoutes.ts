import { Router } from 'express';
import { getAllProjects, getProjectById } from '../controllers/projectController';
import { validateRequest } from "../middleware/validate";
import { projectSchemas } from "../validation/projectSchemas";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize"

const router: Router = Router();

router.get('/projects', authenticate, isAuthorized({hasRole: ["admin","lead","developer"]}), getAllProjects)
router.get('/projects/:id', authenticate, isAuthorized({hasRole: ["admin","lead","developer"]}), validateRequest(projectSchemas.getById), getProjectById)

export default router;