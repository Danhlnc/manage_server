
import { StatusCodes } from 'http-status-codes';
import { billService } from '~/services/billService';
const getAll = async (req, res, next) => {
    try {

        const bills = await billService.getAll(req)
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); 
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
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); 
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
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); 
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
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
            res.setHeader('Access-Control-Allow-Credentials', true); 
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
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
            res.setHeader('Access-Control-Allow-Credentials', true); 
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