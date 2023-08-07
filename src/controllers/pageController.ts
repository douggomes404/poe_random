import { Request, Response } from "express";

import { createMenuObject } from "../helpers/createMenuObject";


export const home = (req: Request, res: Response) =>{
    res.render('pages/page');
}