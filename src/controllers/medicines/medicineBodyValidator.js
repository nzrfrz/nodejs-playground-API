import { 
    responseHelper,
    status,
    message
} from "../../_helpers/index.js";

export const medicineBodyValidator = (req, res) => {
    const { name, manufacturer, dosage, quantity, price } = req.body;

    switch (true) {
        case name === undefined || name === "":
            responseHelper(res, status.errorRequest, "Given \'name\' cannot be empty");
            return false;
        case manufacturer === undefined || manufacturer === "":
            responseHelper(res, status.errorRequest, "Given \'manufacturer\' cannot be empty");
            return false;
        case dosage === undefined || dosage === "" || dosage === Number(dosage):
            responseHelper(res, status.errorRequest, "Given \'dosage\' cannot be empty or value has to be \'String\'");
            return false;
        case quantity === undefined || quantity === "" || quantity === String(quantity):
            responseHelper(res, status.errorRequest, "Given \'quantity\' cannot be empty or value has to be \'Number\'");
            return false;
        case price === undefined || price === "" || price === Number(price):
            responseHelper(res, status.errorRequest, "Given \'price\' cannot be empty or value has to be \'String\'");
            return false;
        default:
            return true;
    }
};