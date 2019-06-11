import express from 'express';
import { CarController } from '../controllers';
import { Car }  from '../validations';
import { verifyToken, isAdminDummy, isOwnerDummy } from '../middlewares/auth'

const { postCarAd, getSingleCarAd, editAdStatus, editAdPrice, filterSearch,deleteSingleCarAd } = CarController;
const { postAdchecker, findSpecificCarAd } = Car;

export const carRouter = express.Router();


carRouter.post('/car', verifyToken, postAdchecker, postCarAd);
carRouter.get('/car/:id', findSpecificCarAd, getSingleCarAd);
carRouter.get('/car', filterSearch, verifyToken);
carRouter.delete('/car/:id', verifyToken, isAdminDummy, findSpecificCarAd, deleteSingleCarAd);
carRouter.patch('/car/:id/status', verifyToken, isOwnerDummy, findSpecificCarAd, editAdStatus);
carRouter.patch('/car/:id/price', verifyToken, isOwnerDummy, findSpecificCarAd, editAdPrice);





