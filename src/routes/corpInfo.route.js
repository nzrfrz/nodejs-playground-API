import express from "express";
import { 
    CorpInfoGetAll,
    CorpInfoPost,
    CorpInfoPut,
    CorpInfoDelete
} from "../controllers/index.js";

const router = express.Router();

export const CorporateInfo = (app) => {
    const getAllCorpInfo = router.get("/corporate/", CorpInfoGetAll);
    const postCorpInfo = router.post("/corporate/add/", CorpInfoPost);
    const putCorpInfo = router.put("/corporate/edit=:id/", CorpInfoPut);
    const deleteCorpInfo = router.delete("/corporate/delete=:id/", CorpInfoDelete);

    app.use("/playground", getAllCorpInfo);
    app.use("/playground", postCorpInfo);
    app.use("/playground", putCorpInfo);
    app.use("/playground", deleteCorpInfo);
};