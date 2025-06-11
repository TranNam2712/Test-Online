import express from "express";
import router from "../routes/route";
import bodyParser from "body-parser";
import cors from "cors";
const serverConfig = () => {


    // Create a new express application instance
    const app = express();

    // Set the network port

    // config middlewares
    app.use(cors());
    // app.use(customResponseMiddleware);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // defined api
    app.use("/api/", router);
    return app
}

export default serverConfig