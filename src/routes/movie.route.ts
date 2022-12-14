import { NextFunction, Request, Response, Router } from "express";
import MovieModel from "../models/movie.model";

const movieRouter = Router();

movieRouter.get("/movies", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const movies = await MovieModel.find().select(["-__v"]).populate('director');
        res.status(200).json({ movies });
    } catch (e) {
        console.log(e);
        res.status(500).json("Something went wrong!");
    }
});

movieRouter.get("/movies/:movieId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.params.movieId) {
            return res.status(400).json("Wrong director identifier!");
        }
        const movie = await MovieModel.findById(req.params.movieId).populate('director');
        res.status(200).json({ movie });
    } catch (e) {
        console.log(e);
        res.status(500).json("Something went wrong!");
    }
});

movieRouter.post("/movie", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newMovie = await MovieModel.create({
            name: req.body.name,
            release_year: req.body.release_year,
            director: req.body.director,
        });
        res.status(201).json({ newMovie });
    } catch (e) {
        console.log(e);
        res.status(500).json("Something went wrong!");
    }
});

movieRouter.put("/movie/:movieId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.params.movieId) {
            return res.status(400).json("Wrong director identifier!");
        }
        const updatedMovie = await MovieModel.findByIdAndUpdate(req.params.movieId, {
            name: req.body.name,
            release_year: req.body.release_year,
            director: req.body.director,
        }, {
            new: true,
        });
        res.status(200).json({ updatedMovie });
    } catch (e) {
        console.log(e);
        res.status(500).json("Something went wrong!");
    }
});

export default movieRouter;