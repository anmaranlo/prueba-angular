const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

employeeCtrl.createEmployee = async  (req, res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.json({
        'status': 'Employee Saved'
    });
};

employeeCtrl.getEmployee = async (res) => {
    res.json(employee);
};

employeeCtrl.editEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true})
    ;
    res.json({status: 'employe update'});

}

employeeCtrl.deleteEmployee = async  (req, es) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({status: 'Employe Delete'});
};

module.exports = employeeCtrl;