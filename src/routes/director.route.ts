import { NextFunction, Request, Response, Router } from "express";
import DirectorModel from "../models/director.model";

const directorRouter = Router();

directorRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const directors = await DirectorModel.find();
        res.status(200).json({ directors });
    } catch (e) {
        console.log(e);
        res.json("Something went wrong!");
    }
});

directorRouter.get("/:directorId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.params.directorId) {
            return res.status(400).json("Wrong director identifier!");
        }
        const director = await DirectorModel.findById(req.params.directorId);
        res.status(200).json({ director });
    } catch (e) {
        console.log(e);
        res.json("Something went wrong!");
    }
});

directorRouter.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newDirector = await DirectorModel.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
        });
        res.status(201).json({ newDirector });
    } catch (e) {
        console.log(e);
        res.json("Something went wrong!");
    }
});

directorRouter.put("/:directorId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.params.directorId) {
            return res.status(400).json("Wrong director identifier!");
        }
        const updatedDirector = await DirectorModel.findByIdAndUpdate(req.params.directorId, {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
        }, {
            new: true,
        });
        res.status(200).json({ updatedDirector });
    } catch (e) {
        console.log(e);
        res.json("Something went wrong!");
    }
});

export default directorRouter;