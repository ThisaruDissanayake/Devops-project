import express from 'express';
import { Technician } from '../models/technicianModel.js';

const router= express.Router();

//route for save new technician
router.post('/', async ( request, response) =>{
    try{
        if(
            !request.body.employeeID||
            !request.body.firstName||
            !request.body.lastName||
            !request.body.jobTitle||
            !request.body.address||
            !request.body.contactNo||
            !request.body.image||
            !request.body. experinceYears
        ){
            return response.status(400).send({
                message:'Send all required fields: firstName,lastName,jobTitle,address,contactNo,experinceYears',
            });
        }
    
        const newTechnician = {
            employeeID: request.body.employeeID,
            firstName: request.body.firstName,
            lastName : request.body.lastName,
            jobTitle : request.body.jobTitle,
            address: request.body.address,
            contactNo: request.body.contactNo,
            image: request.body.image,
            experinceYears: request.body.experinceYears,
    
        };
    
        const technician= await Technician.create(newTechnician);
        return response.status(201).send(technician);
    
    }catch(error){
    console.log(error.message);
    response.status(500).send({message:error.message});
    }
    
    });
    
    //Route for Get All techinicians from database
    
router.get('/', async ( request, response) =>{
        try{
            const technicians= await Technician.find({});
            return response.status(200).json({
                count:technicians.length,
                data:technicians
            });
        
        }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
        }
        });
    
        
    //Route for Get one  techinicians from database by id 
    
router.get('/:id', async ( request, response) =>{
        try{
            const {id}= request.params;
            const technician = await Technician.findById(id);
    
            return response.status(200).json(technician);
        
        }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
        }
        });
    
    
    // Route for update a technician
router.put('/:id', async ( request, response) =>{
        try{
            if(
                !request.body.employeeID||
                !request.body.firstName||
                !request.body.lastName||
                !request.body.jobTitle||
                !request.body.address||
                !request.body.contactNo||
                !request.body.image||
                !request.body. experinceYears
            ){
                return response.status(400).send({
                    message:'Send all required fields: firstName,lastName,jobTitle,address,contactNo,experinceYears',
                });
            }
    
            const {id}=request.params;
            const result =await Technician.findByIdAndUpdate(id,request.body);
    
            if(!result){
                return response.status(404).json({message:'Technician not found'});
            }
            return response.status(200).send({message:"Technician updated successfully"});
            
        }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
        }
        });
    
        
    // Route for deletea technician
router.delete('/:id', async ( request, response) =>{
        try{
    
            const {id}=request.params;
            const result =await Technician.findByIdAndDelete(id,request.body);
    
            if(!result){
                return response.status(404).json({message:'Technician not found'});
            }
            return response.status(200).send({message:"Technician deleted successfully"});
            
        }catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
        }
        });
    
export default router;    
    
    