import { Types } from "mongoose";

export interface IMovieInterface {
    name: string;
    release_year: number;
    director: Types.ObjectId | string;
}