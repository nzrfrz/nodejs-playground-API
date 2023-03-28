import DB from "../../../db.config.js";

const MEDICINES = DB.medicines;

class query {
    
    // paginate and query search
    paginate = (limit, page, per_page, q) => new Promise((resolve, reject) => {
        const searchValue = q;
        // console.log("SEARCH VALUE: ", !Number.isNaN(Number(searchValue)));
        MEDICINES.find({
            $or: [
                    { name: {$regex: searchValue, $options: "i"} }, 
                    { manufacturer: {$regex: searchValue, $options: "i"} }, 
                    { dosage: {$regex: searchValue, $options: "i"} }, 
                    { quantity: !Number.isNaN(Number(searchValue)) ? Number(searchValue) : "" }, 
                    { price: {$regex: searchValue, $options: "i"} }
                ]
        }, 
        (error, results) => {
            // console.log("GET RESULTS: \n", results);
            // console.log(error);
            const finalData = results?.map((data) => {
                const temp = {id: data.id, ...data._doc};
                const { _id, __v, ...filteredData } = temp;
                return filteredData;
            });
            resolve(finalData);
            reject(error);
        }).sort({ _id: -1 }).limit(limit).skip(page * per_page)
    });

    getAll = () => new Promise((resolve, reject) => {
        MEDICINES.find({}, (error, results) => {
            const finalData = results?.reverse().map((data) => {
                const temp = {id: data.id, ...data._doc};
                const { _id, __v, ...filteredData } = temp;
                return filteredData;
            });
            resolve(finalData);
            reject(error);
        })
    });

    findDocumentByID = (data) => new Promise((resolve, reject) => {
        MEDICINES.find({ userID: data }, (error, results) => {
            resolve(results);
            reject(error);
        })
    });

    bulkInsert = (data) => new Promise((resolve, reject) => {
        MEDICINES.insertMany(data, { ordered: false }, (error, results) => {
            resolve(results);
            reject(error);
        })
    })

    saveNewDocument = (data) => new Promise((resolve, reject) => {
        data.save((error, results) => {
            resolve(results);
            reject(error);
        })
    });

    updateDocument = (id, data) => new Promise((resolve, reject) => {
        MEDICINES.findByIdAndUpdate(id, data, {new: true}, (error, results) => {
            resolve(results);
            reject(error);
        })
    });

    deleteDocumentByID = (id) => new Promise((resolve, reject) => {
        MEDICINES.findByIdAndRemove(id, (error, results) => {
            resolve(results);
            reject(error);
        })
    });
};

export const medicinesManager = new query();