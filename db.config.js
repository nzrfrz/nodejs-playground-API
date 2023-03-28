import dotenv from "dotenv";
import mongoose from "mongoose";

import { 
    Medicines, 
    CorporateInfo 
} from "./src/models/index.js";

dotenv.config();

const MONGO_DB_URL = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;

let db = {};
db.mongoose = mongoose;
db.url = MONGO_DB_URL;

db.medicines = Medicines(mongoose);
db.corporate_info = CorporateInfo(mongoose);

const DB = db;

export default DB;