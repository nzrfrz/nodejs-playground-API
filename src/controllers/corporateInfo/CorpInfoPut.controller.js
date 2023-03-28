import { 
    responseHelper,
    status,
    message
} from "../../_helpers/ResponseHelper.js";
import { Authentication } from "../../_helpers/index.js";
import { corpInfoManager } from "./_queManager.js";

export const CorpInfoPut = async (req, res) => {
    await Authentication(req, res);
    if (req.user === undefined) return;

    const payload = {
        ...req.body,
    };

    try {
        const editResults = await corpInfoManager.updateDocument(req.params.id, payload);
        // console.log("EDIT RESULTS: ", editResults);
        responseHelper(res, status.success, message.successEditingCorpInfo, editResults);
    } catch (error) {
        responseHelper(res, status.errorServer, message.errorServer);
    }
}