import express from "express";
import { createData, getData } from "../controllers/dataControl.js";

const studentRoute = express.Router()


studentRoute.post('/create',createData)
studentRoute.get('/getData',getData)


export default studentRoute

//  http://localhost:5000/api/student/create
//  http://localhost:5000/api/student/getData
