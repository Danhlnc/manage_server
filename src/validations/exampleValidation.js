
import joi from 'joi'
import { StatusCodes } from 'http-status-codes';
const create_New = async (req, res, next) => {
    const correctCondition = joi.object({
        title: joi.string().required().min(3).max(500).trim().strict(),
        description: joi.string().required().min(3).max(500).trim().strict()
    });
    try {
        console.log('req.body:', req.body);
        await correctCondition.validateAsync(req.body, { abortEarly: false })

        next()
    } catch (error) {
        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            erros: new Error(error).message
        });
    }

}
export const exampleValidation = {
    create_New
}