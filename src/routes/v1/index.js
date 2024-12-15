
import {
	ReasonPhrases,
	StatusCodes,
	getReasonPhrase,
	getStatusCode,
} from 'http-status-codes';
import express from 'express'
import { boardRouters } from '~/routes/v1/boardRouter'
const router = express.Router();
router.get('/status', (req, res) => {
	res.status(StatusCodes.OK).json({
		message: 'APIs V1 are ready to use'
	});
})
router.use('/boards', boardRouters)
export const APIs_V1 = router