import { 
    responseHelper,
    status,
    message
} from "../../_helpers/ResponseHelper.js";
import { Authentication } from "../../_helpers/index.js";
import { corpInfoManager } from "./_queManager.js";

import DB from "../../../db.config.js";

const CORP_INFO = DB.corporate_info;

export const CorpInfoPost = async (req, res) => {
    await Authentication(req, res);
    if (req.user === undefined) return;

    // console.log(req.body);

    // create new payload to save to mongoose
    const payload = new CORP_INFO({
        ...req.body,
    });

    try {
        const saveResults = await corpInfoManager.saveNewDocument(payload);
        // console.log(saveResults);
        responseHelper(res, status.success, message.successAddingCorpInfo, saveResults);
    } catch (error) {
        responseHelper(res, status.errorServer, message.errorServer);
    }
    // responseHelper(res, status.errorServer, message.errorServer);
};