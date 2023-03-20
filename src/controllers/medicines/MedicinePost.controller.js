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

export const MedicinePost = async (req, res) => {
    await Authentication(req, res);
    if (req.user === undefined) return;

    const validator = medicineBodyValidator(req, res);
    if (validator === false) return;
    
    const { iat, exp, ...temp } = req.user;
    const author = temp;

    // create new payload to save to mongoose
    const payload = new MEDICINE({
        author,
        ...req.body,
    });

    try {
        const saveResults = await medicinesManager.saveNewDocument(payload);
        // console.log(saveResults);
        responseHelper(res, status.success, message.successAddingMedicine, saveResults);
    } catch (error) {
        responseHelper(res, status.errorServer, message.errorServer);
    }
};