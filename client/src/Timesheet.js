import React, { Component } from "react";

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
            <div>
                <p>
                    {this.client}
                </p>
                <p>
                    {this.date}
                </p>
                <p>
                    {this.project}
                </p>

            </div>
        )
    }
}