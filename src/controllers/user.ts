import { Request, Response } from 'express';
import bcrypt from "bcrypt";
import { User } from '../models/user';
import jwt from 'jsonwebtoken';


export const newUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    //Validamos si el usuario existe en la bd
    const user = await User.findOne({ where: { username: username }})

    if(user) {
        return res.status(400).json({
            msg: `El usuario ${username} ya existe`
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await User.create({ 
            username,
            password: hashedPassword
        })
    
        res.json({
            msg: `usuario ${username} creado`
        });
    } catch (error) {
        res.status(400).json({
            msg: 'Error al crear el usuario',
            error
        })
    }
}


export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    // res.json({
    //     msg: 'Login user',
    //     body
    // });

    //validamos su el usuario existe en la bd
    const user: any = await User.findOne({ where: { username: username }})
    if(!user) {
        return res.status(400).json({
            msg: `El usuario ${username} no existe`
        })
    }

    //validamos si el password es correcto
    const passwordValid = await bcrypt.compare(password, user.password)
    if(!passwordValid) {
        return res.status(400).json({
            msg: `El password es incorrecto`
        })
    }



    //generamos el token
    const token = jwt.sign({
        username: user.username
    }, process.env.SECRET_KEY || 'pepito123')

    res.json(token);
}