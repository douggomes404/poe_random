import { Router } from "express";
import * as PageController from "../controllers/pageController";
import * as ClassController from "../controllers/classController";

const router = Router();

router.get('/', PageController.home);
router.get('/rand-class', ClassController.randomPoeClass);

export default router;