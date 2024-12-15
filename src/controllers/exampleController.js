
import { StatusCodes } from 'http-status-codes';
const create_New = async (req, res, next) => {
    try {

        console.log('req.body:', req.body);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            erros: error.message
        });
    }
}



export const exampleController = {
    create_New
}