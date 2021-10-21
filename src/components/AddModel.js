import React, { Component } from 'react'
import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation';
import validator from 'validator'

class AddModel extends Component {
    state = {
        first_name: "",
        last_name: "",
        email: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e, formData, inputs) => {
        e.preventDefault();
        let userName = formData.userName
        localStorage.setItem(userName, JSON.stringify(formData))
        const history = require("history").createBrowserHistory()
        history.push("/login")
        console.log(localStorage.getItem('user1'))
        this.props.addUser(formData)
    }

    handleErrorSubmit = (e, formData, errorInputs) => {
        console.error(errorInputs)
    }

    matchPassword = (value) => {
        return value && value === this.state.password;   
    }

    handleClick (){
        // const history = require("history").createBrowserHistory()
        // history.push("/login")
    }


    render () {
        return (
      
           
            <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First name</label>
                    <TextInput name="first_name" id="firstName" required
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last name</label>
                    <TextInput name="last_name" id="lastName" minLength="4"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                </div>
               
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <TextInput name="email" id="email" type="email" 
                        validator={validator.isEmail} 
                        errorMessage={{validator:"Please enter a valid email"}}
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                </div>

               
                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.handleClick} >Submit</button>
                </div>
            </ValidationForm>
          
            
        )
    }
}

export default AddModel