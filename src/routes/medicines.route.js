import express from "express";
import { 
    MedicinesGet, 
    MedicinePost,
    MedicinePut,
    MedicineDelete,
    MedicinesBulkInsert 
} from "../controllers/index.js";

const router = express.Router();

export const Medicines = (app) => {
    const getMedicines = router.get("/medicines/", MedicinesGet);
    const postMedicine = router.post("/medicine/add/", MedicinePost);
    const putMedicine = router.put("/medicine/edit=:id/", MedicinePut);
    const deleteMedicine = router.delete("/medicine/delete=:id/", MedicineDelete);

    const bulkInsertMedicines = router.post("/medicine/bulk-insert/", MedicinesBulkInsert);
    app.use("/playground", bulkInsertMedicines);

    app.use("/playground", getMedicines);
    app.use("/playground", postMedicine);
    app.use("/playground", putMedicine);
    app.use("/playground", deleteMedicine);
};