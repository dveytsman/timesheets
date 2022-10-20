import React, { Component } from "react";
import Table from 'react-bootstrap/Table';

export default class Timesheet extends Component {
    constructor({row}){
        super();
        this.date = row.Date;
        this.client = row.Client;
        this.project = row.Project;
        this.projectCode = row.projectCode;
        this.task = row.Task;
        this.hours = row.Hours;
        this.hoursRounded = row.hoursRounded;
        this.isBillable = row.isBillable;
        this.isInvoiced = row.isInvoiced;
        this.isApproved = row.isApproved;
        this.firstName = row.firstName;
        this.lastName = row.lastName;
        this.department = row.department;
        this.isEmployee = row.isEmployee;
        this.billableRate = row.billableRate;
        this.costRate = row.costRate;
        this.costAmount = row.costAmount;
        this.currency = row.Currency;
        this.referenceURL = row.referenceURL;
    }

    render(){
        return(
              <tr>
                <td>{this.date}</td>
                <td>{this.client}</td>
                <td>{this.project}</td>
                <td>{this.projectCode}</td>
                <td>{this.task}</td>
                <td>{this.hours}</td>
                <td>{this.hoursRounded}</td>
                <td>{this.isBillable}</td>
                <td>{this.isInvoiced}</td>
                <td>{this.isApproved}</td>
                <td>{this.firstName}</td>
                <td>{this.lastName}</td>
                <td>{this.department}</td>
                <td>{this.isEmployee}</td>
                <td>{this.billableRate}</td>
                <td>{this.costRate}</td>
                <td>{this.costAmount}</td>
                <td>{this.currency}</td>
                <td>{this.referenceURL}</td>
                </tr>
                );
            // <div>
            //     <p>
            //         {this.client}
            //     </p>
            //     <p>
            //         {this.date}
            //     </p>
            //     <p>
            //         {this.project}
            //     </p>

            // </div>
    }
}