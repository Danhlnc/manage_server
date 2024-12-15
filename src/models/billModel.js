
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi'
import { ObjectId } from 'mongodb';
import { GET_DB } from '~/config/mongodb';
import { boardRouters } from '~/routes/v1/boardRouter';
const BOARDS_NAME = 'Bills'

const OBJECT_ID_RULE = /^[0-9a-fA-F]{24}$/
const OBJECT_ID_RULE_MESSAGE = 'Your string fails to match the Object Id pattern!'
const BOARDS_COLLECTION_SCHEMA = Joi.object(
    {
        bienSoXe: Joi.string().required().trim().strict(),
        sac: Joi.number(),
        muonSac: Joi.boolean().default(false),
        nguNgay: Joi.boolean().default(false),
        nguDem: Joi.boolean().default(false),
        tam: Joi.boolean().default(false),
        listNuoc: Joi.array().default([]),
        listThuoc: Joi.array().default([]),
        comGia: Joi.number(),
        giaGiatDo: Joi.number(),
        giaTu: Joi.number(),
        ghiChu: Joi.string().default("").allow(null, ''),
        tongTien: Joi.number(),
        trangThai: Joi.boolean().default(true),
        createdOn: Joi.date(),
        createdBy: Joi.string().default("").allow(null, ''),
        modifyOn: Joi.date(),
        modifyBy: Joi.string().default("").allow(null, '')
    }
)
const getAll = async (req, res, next) => {
    try {
        const result = await GET_DB().collection(BOARDS_NAME).find().sort({ "modifyon": -1 }).toArray();
        return result;
    } catch (error) {
        throw new Error(error)
    }
}
const getDrinkAll = async (req, res, next) => {
    try {
        const result = await GET_DB().collection('Drinks').find().sort({ "drinkName": 1 }).toArray();
        return result;
    } catch (error) {
        throw new Error(error)
    }
}
const getTaboccoAll = async (req, res, next) => {
    try {
        const result = await GET_DB().collection('Tobaccos').find().sort({ "tobaccoName": 1 }).toArray();
        return result;
    } catch (error) {
        throw new Error(error)
    }
}
const addOne = async (req, res) => {
    try {
        const test = await BOARDS_COLLECTION_SCHEMA.validateAsync(req.body, { abortEarly: false })
        const result = await GET_DB().collection(BOARDS_NAME).insertOne(req.body);

        return result;
    } catch (error) {

        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            erros: new Error(error).message
        });
    }
}
const updateOne = async (req, res) => {
    try {
        var newJson = { ...req.body };
        delete newJson['_id'];
        const test = await BOARDS_COLLECTION_SCHEMA.validateAsync(newJson, { abortEarly: false })
        const result = await GET_DB().collection(BOARDS_NAME).updateOne({ "_id": new ObjectId(req.body._id) },
            {
                $set: {
                    "bienSoXe": req.body.bienSoXe,
                    "sac": req.body.sac,
                    "muonSac": req.body.muonSac,
                    "nguNgay": req.body.nguNgay,
                    "nguDem": req.body.nguDem,
                    "tam": req.body.tam,
                    "listNuoc": req.body.listNuoc,
                    "listThuoc": req.body.listThuoc,
                    "comGia": req.body.comGia,
                    "giaGiatDo": req.body.giaGiatDo,
                    "giaTu": req.body.giaTu,
                    "ghiChu": req.body.ghiChu,
                    "tongTien": req.body.tongTien,
                    "trangThai": req.body.trangThai,
                    "createdOn": req.body.createdOn,
                    "createdBy": req.body.createdBy,
                    "modifyOn": req.body.modifyOn,
                    "modifyBy": req.body.modifyBy,
                }
            });

        return result;
    } catch (error) {

        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            erros: new Error(error).message
        });
    }
}


export const billModel = {
    getAll, BOARDS_NAME, BOARDS_COLLECTION_SCHEMA, addOne, updateOne, getDrinkAll, getTaboccoAll
}