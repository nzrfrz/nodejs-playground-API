export const message = {
    errorServer: "Something went wrong, please try again later !!",

    tokenNotFound: "Access token required !!!",
    tokenValid: "Token valid",

    errorVerifyToken: "Something wrong when verifying token, please try again later !!!",
    errorGeneratingToken: "Something wrong when generating token, please try again later !!!",
    errorVerifyToken: "Access token invalid, please request again !!!",
    errorGeneratingToken: "Something wrong when generating token, please try again later !!!",

    successAddingMedicine: "New Medicine added successfully",
    successEditingMedicine: "Medicine edited successfully",
    successdeletingMedicine: "Medicine deleted successfully",

    successAddingCorpInfo: "New Corporate Info added successfully",
    successEditingCorpInfo: "Corporate Info edited successfully",
    successdeletingCorpInfo: "Corporate Info deleted successfully",
};

export const status = {
    success: 200,
    successCreateNewData: 201,
    errorRefreshToken: 403, // Forbidden
    validIfNotExist: 202,
    errorServer: 500, //data not saved in DB, or other server error
    errorRequest: 400, // Bad Request
    errorAccessToken: 401, // Unauthorized
    notFound: 404,
};

export const responseHelper = (res, status, message, data) => {
    return res.status(status).send({ status, message, data });
};