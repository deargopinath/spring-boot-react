import React from 'react'
import TextArea from './TextArea'

class GenericForm extends React.Component {
    render() {
        return (
        <div className="container-fluid row">
            <div className="col-6" style={{"minHeight": "500px"}}>
                <h2>Spring Boot and ReactJS Form</h2>
                <form className="form-horizontal" id={this.props.name} name={this.props.name} onSubmit={this.submitForm}>
                    <div className="row form-group">
                        <label className="col-4 control-label">Username</label>
                        <input type="text" className="col-4 form-control" id="username"/>
                    </div>
                    <div className="row form-group">
                        <label className="col-4 control-label">Email</label>
                        <input type="text" className="col-4 form-control" id="email"/>
                    </div>          
                    <div className="row form-group">
                        <div className="col-4"></div>
                        <button type="submit" id="submitButton" className="btn btn-primary btn-lg">Submit</button>
                    </div>
                </form>
            </div>
            <div className="col-6" style={{"minHeight": "500px"}}>
                <TextArea name="responseMessage" rows="5" columns="10" title="Response from server" />
            </div>
        </div>
        )
    }

    submitForm(event) {
        event.preventDefault()
        var inputData = {}
        inputData["username"] = document.getElementById("username").value
        inputData["email"] = document.getElementById("email").value
        console.log("Input = " + JSON.stringify(inputData))
        fetch('myForm', 
        {method: 'POST', headers: {"Content-Type": "application/json; charset=utf-8"}, body:JSON.stringify(inputData)})
        .then(result => result.json())
        .catch(error => {console.log("Error : " + JSON.stringify(error))})
        .then(success => {document.getElementById("responseMessage").value = JSON.stringify(success)})
    }

    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this)
    }
}

export default GenericForm