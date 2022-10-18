import Timesheet from "./Timesheet";
import React, { Component } from "react";
import axios from "axios";

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
                <button onClick={this.handleSubmit}>find client timesheets</button>
                <button onClick={this.handleClear}>clear search</button>
                {this.state.data.map((row, i) => {
                return <Timesheet row={row} key={i + Math.random()} />;
                })}
            </div>
        )
    }
}