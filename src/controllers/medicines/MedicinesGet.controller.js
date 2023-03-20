import { responseHelper } from "../../_helpers/ResponseHelper.js";
import { medicinesManager } from "./_queManager.js";
import { Authentication } from "../../_helpers/index.js";

export const MedicinesGet = async (req, res) => {
    await Authentication(req, res);
    if (req.user === undefined) return;

    const limit = Number(req.query.limit); 
    const page = Number(req.query.page) - 1;
    const per_page = Number(req.query.per_page);
    
    const query = await medicinesManager.paginate(limit, page, per_page);
    const response = {
        limit,
        page: Number(req.query.page),
        per_page,
        medicines: query
    };

    responseHelper(res, 200, "Success", response);
};