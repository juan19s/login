import { Request, Response } from 'express';


export const newUser = (req: Request, res: Response) => {
    console.log(req.body);

    res.json({
        msg: 'New user',
        body: req.body
    });
}

export const login = (req: Request, res: Response) => {
    console.log(req.body);

    res.json({
        msg: 'Login user',
        body: req.body
    });
}