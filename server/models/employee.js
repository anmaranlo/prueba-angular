const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    documento: { type: String, required: true },
    nombre: { type: String, required: true},
    fecha_inicio: { type: Date, require: true },
    fecha_fin: { type: Date, require: true },
    inicio_turno: { type: String, required: true },
    fin_turno: { type: String, required: true }

  
});   

module.exports = mongoose.model('Employee', EmployeeSchema);