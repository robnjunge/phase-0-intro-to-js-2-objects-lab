// Write your solution in this file!
const employee = {
    userName: "Sam", 
    streetAddress: "street1",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let copyOfEmployee = {...employee};
    copyOfEmployee[key] = value;
    return copyOfEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let copyOfEmployee = {...employee};
    delete copyOfEmployee[key];
    return copyOfEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}