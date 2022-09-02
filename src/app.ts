import cors from "cors";
import express from "express";
import helmet from "helmet";
import { createServer } from "http";
import { connect } from "mongoose";
import movieRouter from "./routes/movie.route";
import directorRouter from "./routes/director.route";

const port = process.env.PORT || 3000;
const app = express();
app.set("port", port);
app.use(cors({ credentials: true, origin: true }));
app.use(helmet());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: false, limit: "5mb" }));
app.use("/movies", movieRouter);
app.use("/directors", directorRouter);
createServer(app).listen(port, () => {
    connect("mongodb+srv://mongoUser:mongoPassword@democluster.aefo9.mongodb.net/?retryWrites=true&w=majority")
        .then(() => console.log("Database connection established!"))
        .catch((error) => console.log(`Database error: ${ error }`));
    console.log(`Server is running in ${ port }!`);
});
