import { 
    responseHelper,
    status,
    message
} from "../../_helpers/ResponseHelper.js";
import { Authentication } from "../../_helpers/index.js";
import { medicinesManager } from "./_queManager.js";

export const MedicineDelete = async (req, res) => {
    await Authentication(req, res);
    if (req.user === undefined) return;

    try {
        const deleteResults = await medicinesManager.deleteDocumentByID(req.params.id);
        responseHelper(res, status.success, message.successdeletingMedicine, deleteResults);
    } catch (error) {
        responseHelper(res, status.errorServer, message.errorServer);
    }
};