import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function CreateTimesheet(){
    // const navigate = useNavigate();
    const [timesheet, setTimesheet] = useState({
        date: "",
        client: "",
        project: "",
        projectCode: "",
        task: "",
        hours: "",
        hoursRounded: "",
        billable: "",
        invoiced: "",
        approved: "",
        firstName: "",
        lastName: "",
        department: "",
        employee: "",
        billableRate: "",
        costRate: "",
        costAmount: "",
        currency: "",
        referenceURL: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setTimesheet(prev => {
            return({
                ...prev,
                [name]:value
            })
        });
    };

    //function to check state changes of the form. visible on browser console
    // useEffect(() => {
    //     console.log(timesheet);
    // }, [timesheet]);

    const handleClick = (event) => {
        event.preventDefault();

        axios
        .post("/timesheets", timesheet)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>Enter new timesheet</h2>
            <Form>
                <Form.Group>
                    <Form.Control name="date" placeholder="Date" value={timesheet.date} onChange={handleChange}/>
                    <Form.Control name="client" placeholder="Client" value={timesheet.client} onChange={handleChange}/>
                    <Form.Control name="project" placeholder="Project" value={timesheet.project} onChange={handleChange}/>
                    <Form.Control name="projectCode" placeholder="Project Code" value={timesheet.projectCode} onChange={handleChange}/>
                    <Form.Control name="task" placeholder="Task" value={timesheet.task} onChange={handleChange}/>
                    <Form.Control name="hours" placeholder="Hours" value={timesheet.hours} onChange={handleChange}/>
                    <Form.Control name="hoursRounded" placeholder="Hours Rounded" value={timesheet.hoursRounded} onChange={handleChange}/>
                    <Form.Control name="billable" placeholder="Billable?" value={timesheet.billable} onChange={handleChange}/>
                    <Form.Control name="invoiced" placeholder="Invoiced?" value={timesheet.invoiced} onChange={handleChange}/>
                    <Form.Control name="approved" placeholder="Approved?" value={timesheet.approved} onChange={handleChange}/>
                    <Form.Control name="firstName" placeholder="First Name" value={timesheet.firstName} onChange={handleChange}/>
                    <Form.Control name="lastName" placeholder="Last Name" value={timesheet.lastName} onChange={handleChange}/>
                    <Form.Control name="department" placeholder="Department" value={timesheet.department} onChange={handleChange}/>
                    <Form.Control name="employee" placeholder="Employee?" value={timesheet.employee} onChange={handleChange}/>
                    <Form.Control name="billableRate" placeholder="Billable Rate" value={timesheet.billableRate} onChange={handleChange}/>
                    <Form.Control name="costRate" placeholder="Cost Rate" value={timesheet.costRate} onChange={handleChange}/>
                    <Form.Control name="costAmount" placeholder="Cost Amount" value={timesheet.costAmount} onChange={handleChange}/>
                    <Form.Control name="currency" placeholder="Currency" value={timesheet.currency} onChange={handleChange}/>
                    <Form.Control name="referenceURL" placeholder="External Reference URL" value={timesheet.referenceURL} onChange={handleChange}/>
                </Form.Group>
                <Button onClick={handleClick}>Enter new timesheet</Button>
            </Form>
            {/* <Button onClick={()=> navigate(-1)}>Back</Button> */}
        </div>
    )
}

export default CreateTimesheet;