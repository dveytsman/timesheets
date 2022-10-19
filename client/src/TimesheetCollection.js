import Timesheet from "./Timesheet";
import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import CreateTimesheet from "./CreateTimesheet";

export default class TimesheetCollection extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            clientSearch: '',
            data: [],
            clientData: [],
            toggle: true
        }
    }

    componentDidMount = () => {
        let that = this;

        axios.get("http://localhost:2303/timesheets").then(response => {
            that.setState({data: response.data.rows})
        });
    }

    handleSubmit = () => {
        let endpoint = this.state.clientSearch ? `http://localhost:2303/timesheets/${this.state.clientSearch}` : `http://localhost:2303/timesheets`;
        axios.get(endpoint).then(response => {
            this.setState(prevState => ({clientSearch: "", data: response.data.rows}));
        });

    }

    handleChange = (event) => {
        this.setState({clientSearch: event.target.value})
    }

    handleClear = (e) => {
        e.preventDefault();
        this.setState(
            {
                clientSearch: "",
                data: [],
                clientData: []
            }
        );
        this.setState({clientSearch: ''});
    }


    render(){
        return(
            <div>
                <input value={this.state.clientSearch} onChange={this.handleChange} type="text" id="searchInput"></input>
                <Button onClick={this.handleSubmit}>find client timesheets</Button>
                <Button onClick={this.handleClear}>clear search</Button>
                <CreateTimesheet />
                <Table striped>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Client</th>
                            <th>Project</th>
                            <th>Project Code</th>
                            <th>Task</th>
                            <th>Hours</th>
                            <th>Hours Rounded</th>
                            <th>Is Billable?</th>
                            <th>Is Invoiced?</th>
                            <th>Is Approved?</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Department</th>
                            <th>Is Employee?</th>
                            <th>Billable Rate</th>
                            <th>Cost Rate</th>
                            <th>Cost Amount</th>
                            <th>Currency</th>
                            <th>External Reference URL</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((row, i) => {
                return <Timesheet row={row} key={i + Math.random()} />;
                })}
                    </tbody>
                </Table>
            </div>
        )
    }
}