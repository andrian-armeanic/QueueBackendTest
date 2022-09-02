import { model, Schema } from "mongoose";
import { IMovieInterface } from "../interfaces/movie.interface";

const movieSchema = new Schema<IMovieInterface>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    release_year: {
        type: Number,
        required: true,
    },
    director: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "directors"
    }
});

export default model<IMovieInterface>("movies", movieSchema);
