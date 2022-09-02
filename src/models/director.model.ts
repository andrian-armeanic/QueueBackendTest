import { model, Schema } from "mongoose";
import { IDirectorInterface } from "../interfaces/director.interface";

const directorSchema = new Schema<IDirectorInterface>({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
});

export default model<IDirectorInterface>("directors", directorSchema);
