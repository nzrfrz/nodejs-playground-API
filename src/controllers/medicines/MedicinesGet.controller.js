import { responseHelper } from "../../_helpers/ResponseHelper.js";
import { medicinesManager } from "./_queManager.js";
import { Authentication } from "../../_helpers/index.js";

export const MedicinesGet = async (req, res) => {
    await Authentication(req, res);
    if (req.user === undefined) return;

    const limit = Number(req.query.limit); 
    const page = Number(req.query.page) - 1;
    const per_page = Number(req.query.per_page);
    const q = req.query.q;
    // console.log("QUERY SEARCH: \n", limit, page, per_page, q);

    const getAll = await medicinesManager.getAll();
    const query = await medicinesManager.paginate(limit, page, per_page, q);
    // console.log(getAll);
    const responseSearchPaginated = {
        limit,
        page: Number(req.query.page),
        per_page,
        totalPage: getAll.length,
        medicines: query
    };

    if (!limit && !page && !per_page && !q) {
        responseHelper(res, 200, "Success", getAll);
    }
    else {
        responseHelper(res, 200, "Success", responseSearchPaginated);
    }
};