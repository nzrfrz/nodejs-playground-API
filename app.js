import cors from "cors";
import express from "express";
import useragent from "express-useragent";
import dotenv from "dotenv";

import DB from "./db.config.js";

import { Medicines, CorporateInfo } from "./src/routes/index.js";

dotenv.config();
const app = express();

let corsOptions = {
    optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(useragent.express());
app.use(express.urlencoded({ extended: true }));

DB.mongoose
    .connect(DB.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Database Connected");
    })
    .catch((error) => {
        console.log("Can't connect to database: \n", error);
    });

app.get("/playground", (req, res) => {
    res.status(200).send({message: "!!! NODEJS BACKEND PLAYGROUND WITH MONGODB !!!"});
});

// BlogPost(app);
// Products(app);

Medicines(app);
CorporateInfo(app);

app.listen(process.env.PORT, () => {
    console.log(`App Running on: http://localhost:${process.env.PORT}`);
});