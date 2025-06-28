import express from 'express';
import { addInformation, deleteParticulatInformation, getAllInformation, getOneRecord, updateParticularInformation } from '../Controllers/StudentController.js';

const router= express.Router()

router.get("/getAllInformation",getAllInformation)
router.get("/getOneInformation/:id",getOneRecord)
router.post("/addInformation",addInformation)
router.put("/updateInformation/:id",updateParticularInformation)
router.delete("/deleteInformation/:id",deleteParticulatInformation)


export default router;