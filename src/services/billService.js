import { billModel } from '~/models/billModel'
const getAll = async (req, res, next) => {
    try {

        const bills = await billModel.getAll()
        if (!bills) {

            res.status(StatusCodes.BAD_REQUEST)
        }
        return { result: bills }
    } catch (error) {
        throw new Error(error);
    }
}
const getDrinkAll = async (req, res, next) => {
    try {

        const bills = await billModel.getDrinkAll()
        if (!bills) {

            res.status(StatusCodes.BAD_REQUEST)
        }
        return { result: bills }
    } catch (error) {
        throw new Error(error);
    }
}
const getTaboccoAll = async (req, res, next) => {
    try {

        const bills = await billModel.getTaboccoAll()
        if (!bills) {

            res.status(StatusCodes.BAD_REQUEST)
        }
        return { result: bills }
    } catch (error) {
        throw new Error(error);
    }
}
const addOne = async (req, res) => {
    try {
        const bills = await billModel.addOne(req, res)
        if (!bills) {

        } else {
            const listBills = await billModel.getAll()
            return { result: listBills }
        }
    } catch (error) {
        throw new Error(error);
    }
}
const updateOne = async (req, res) => {
    try {
        const bills = await billModel.updateOne(req, res)
        if (!bills) {

        } else {
            return { result: bills }
        }
    } catch (error) {
        throw new Error(error);
    }
}
export const billService = {
    getAll, addOne, updateOne, getDrinkAll, getTaboccoAll
}