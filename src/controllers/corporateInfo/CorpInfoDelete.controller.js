import { 
    responseHelper,
    status,
    message
} from "../../_helpers/ResponseHelper.js";
import { Authentication } from "../../_helpers/index.js";
import { corpInfoManager } from "./_queManager.js";

export const CorpInfoDelete = async (req, res) => {
    await Authentication(req, res);
    if (req.user === undefined) return;

    try {
        const deleteResults = await corpInfoManager.deleteDocumentByID(req.params.id);
        responseHelper(res, status.success, message.successdeletingCorpInfo, deleteResults);
    } catch (error) {
        responseHelper(res, status.errorServer, message.errorServer);
    }
}