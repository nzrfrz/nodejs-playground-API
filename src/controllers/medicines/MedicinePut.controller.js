import { 
    responseHelper,
    status,
    message
} from "../../_helpers/ResponseHelper.js";
import { Authentication } from "../../_helpers/index.js";
import { medicinesManager } from "./_queManager.js";
import { medicineBodyValidator } from "./medicineBodyValidator.js";

import DB from "../../../db.config.js";

const MEDICINE = DB.medicines;

export const MedicinePut = async (req, res) => {
    // console.log(req.params.id);
    await Authentication(req, res);
    if (req.user === undefined) return;

    const validator = medicineBodyValidator(req, res);
    if (validator === false) return;

    const { iat, exp, ...temp } = req.user;
    const author = temp;

    const payload = {
        author,
        ...req.body,
    };

    try {
        const editResults = await medicinesManager.updateDocument(req.params.id, payload);
        // console.log("EDIT RESULTS: ", editResults);
        responseHelper(res, status.success, message.successAddingMedicine, editResults);
    } catch (error) {
        responseHelper(res, status.errorServer, message.errorServer);
    }
    // console.log(req.params);
};