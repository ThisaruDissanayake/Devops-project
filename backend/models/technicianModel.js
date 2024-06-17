import mongoose from "mongoose";
const technicianSchema = mongoose.Schema(
    {
        employeeID:{
            type: String,
            required:true,
        },
        firstName:{
            type: String,
            required:true,
        },

        lastName:{
            type: String,
            required:true,
        },

        jobTitle:{
            type: String,
            required:true,
        },
        address:{
            type: String,
            required:true,
        },
        contactNo:{
            type: String,
            required:true,
        },
        experinceYears:{
            type: Number,
            required:true,
        },
       image:{
        type:String,
       },
    },
    {
        timestamps:true,
    }
);


export const Technician = mongoose.model('Cat',technicianSchema); 