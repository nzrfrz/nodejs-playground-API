export const message = {
    errorServer: "Something went wrong, please try again later !!",

    tokenNotFound: "Please include your token",
    tokenValid: "Token valid",

    errorVerifyToken: "Something wrong when verifying token, please try again later !!!",
    errorGeneratingToken: "Something wrong when generating token, please try again later !!!",
    errorVerifyToken: "Token invalid, please request again !!!",
    errorGeneratingToken: "Something wrong when generating token, please try again later !!!",

    successAddingMedicine: "New Medicine added successfully",
    successEditingMedicine: "Medicine edited successfully",
    successdeletingMedicine: "Medicine deleted successfully",
};

export const status = {
    success: 200,
    successCreateNewData: 201,
    notValidIfExist: 403,
    validIfNotExist: 202,
    errorServer: 500, //data not saved in DB, or other server error
    errorRequest: 400,
    errorToken: 401, // check if user not passing the token
    notFound: 404,
};

export const responseHelper = (res, status, message, data) => {
    return res.status(status).send({ status, message, data });
};