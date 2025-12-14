// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    empName: { type: String },
    empEmail: { type: String },
    empMobile: { type: String },
    empStatus: { type: String },
    empPhoto: { type: String },
    empResume: { type: String }

});


const employeeModel = mongoose.model('ilife', employeeSchema);
// module.exports = employeeModel;

export default employeeModel;