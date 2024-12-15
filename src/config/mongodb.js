

import 'dotenv/config'

import { env } from '~/config/environment'
import { MongoClient, ServerApiVersion } from 'mongodb'

var MONGODB_URI = env.MONGODB_URI
var DATABASE_NAME = env.DATABASE_NAME
let tsCoffeeDBInstance = null;
const mongoClientInstance = new MongoClient(MONGODB_URI, {

    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})
// KẾT NỐI DB
export const CONNECT_DB = async () => {
    // GỌI KẾT NỐI TỚI MONGODB ATLAS VỚI URI
    await mongoClientInstance.connect();
    // lấy ra db theo tên và gán ngược vào biến 
    tsCoffeeDBInstance = mongoClientInstance.db(DATABASE_NAME);

}
export const GET_DB = () => {
    if (!tsCoffeeDBInstance) throw new Error("lỗi");
    return tsCoffeeDBInstance
}
