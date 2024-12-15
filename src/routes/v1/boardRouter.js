
import {
	ReasonPhrases,
	StatusCodes,
	getReasonPhrase,
	getStatusCode,
} from 'http-status-codes';
import express from 'express'
import { exampleValidation } from '~/validations/exampleValidation'
import { exampleController } from '~/controllers/exampleController'
import { billController } from '~/controllers/billController'
const router = express.Router();
router.route('/').get((rep, res) => {
	res.status(StatusCodes.OK).json({
		message: 'APIs V1 board get'
	});
}).post(exampleValidation.create_New, exampleController.create_New).put((rep, res) => {

}).delete((rep, res) => {

})
router.route('/bills').get(
	billController.getAll).post((rep, res) => billController.addOne(rep, res)).put((rep, res) => billController.updateOne(rep, res))

router.route('/drinks').get(
	billController.getDrinkAll)

router.route('/taboccos').get(
	billController.getTaboccoAll)
export const boardRouters = router