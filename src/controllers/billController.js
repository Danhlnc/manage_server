
import { StatusCodes } from 'http-status-codes';
import { billService } from '~/services/billService';
const getAll = async (req, res, next) => {
    try {

        const bills = await billService.getAll(req)
        res.status(StatusCodes.OK).json(bills)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            erros: error.message
        });
    }
}
const getDrinkAll = async (req, res, next) => {
    try {

        const bills = await billService.getDrinkAll(req)
        res.status(StatusCodes.OK).json(bills)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            erros: error.message
        });
    }
}
const getTaboccoAll = async (req, res, next) => {
    try {

        const bills = await billService.getTaboccoAll(req)
        res.status(StatusCodes.OK).json(bills)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            erros: error.message
        });
    }
}
const addOne = async (req, res) => {
    try {

        const bills = await billService.addOne(req, res)
        if (bills) {

            res.status(StatusCodes.OK).json(bills)
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            erros: error.message
        });
    }
}
const updateOne = async (req, res) => {
    try {

        const bills = await billService.updateOne(req, res)
        if (bills) {

            res.status(StatusCodes.OK).json(bills)
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            erros: error.message
        });
    }
}



export const billController = {
    getAll, addOne, updateOne, getDrinkAll, getTaboccoAll
}