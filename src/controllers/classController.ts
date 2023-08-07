import { Request, Response } from "express";

import randomClass from "../models/class";
import randomChallange from "../models/challenge";
import { createMenuObject } from "../helpers/createMenuObject";


const home = (req: Request, res: Response) =>{
    res.render('pages/page')
}

export const randomPoeClass = (req: Request, res: Response) =>{
    let list = randomClass.getClass();
    let ascendance = randomClass.getRandomAscendancyByClass(list.class);
    let challenge = randomChallange.getChallenge();
    res.render('pages/page',{
        menu: createMenuObject('all'),
        banner: {
            title: 'Seu destino foi escolhido:',
            background: 'poe.jpg'
        },
        list,
        ascendance,
        challenge
    });
}


