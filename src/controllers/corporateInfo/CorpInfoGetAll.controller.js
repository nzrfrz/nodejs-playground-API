import { 
    responseHelper,
    status,
    message
} from "../../_helpers/ResponseHelper.js";
import { Authentication } from "../../_helpers/index.js";
import { corpInfoManager } from "./_queManager.js";

export const CorpInfoGetAll = async (req, res) => {
    await Authentication(req, res);
    if (req.user === undefined) return;

    const getAll = await corpInfoManager.getAll();
    // console.log(getAll.length);
    if (getAll !== undefined && getAll.length > 0) {
        responseHelper(res, status.success, "Success", getAll);
    }
    else {
        responseHelper(res, status.errorServer, message.errorServer);
    }
}