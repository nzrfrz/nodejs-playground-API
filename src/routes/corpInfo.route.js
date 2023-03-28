import express from "express";
import { 
    CorpInfoGetAll,
    CorpInfoPost,
} from "../controllers/index.js";

const router = express.Router();

export const CorporateInfo = (app) => {
    const getAllCorpInfo = router.get("/corporate/", CorpInfoGetAll);
    const postCorpInfo = router.post("/corporate/add/", CorpInfoPost);

    app.use("/playground", getAllCorpInfo);
    app.use("/playground", postCorpInfo);
};