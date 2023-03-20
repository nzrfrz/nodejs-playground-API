import DB from "../../../db.config.js";
import dotenv from "dotenv";

import { responseHelper } from "../../_helpers/ResponseHelper.js";
import { medicinesManager } from "./_queManager.js";

dotenv.config();

export const MedicinesBulkInsert = async (req, res) => {
    const tempData = req.body.map((data) => {
        return {
            ...data,
            price: data.price.toString(),
        }
    });

    // tempData.map((data) => {
    //     medicinesManager.saveNewDocument(data);
    // })

    for (let index = 0; index < tempData.length; index++) {
        const element = tempData[index];
        medicinesManager.bulkInsert(element);
        // console.log(element);
    }

    // await medicinesManager.bulkInsert(element);
    // console.log(element);

    responseHelper(res, 200, "MESSAGE SUCCES");
};