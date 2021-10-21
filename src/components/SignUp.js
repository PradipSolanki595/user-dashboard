import React, { Component } from 'react'
import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation';
import validator from 'validator'

class SignUp extends Component {
    state = {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        description: "",
        password: "",
        confirmPassword: "",
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
      
            <div className="Main_wrapper d-flex bg-dark">

            <div className="card" >
                <div className="card-body">
                    <h3 className="card-title text-center">Sign Up</h3>
            <ValidationForm onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First name</label>
                    <TextInput name="firstName" id="firstName" required
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last name</label>
                    <TextInput name="lastName" id="lastName" minLength="4"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="userName">User name</label>
                    <TextInput name="userName" id="userName" minLength="4"
                        value={this.state.userName}
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
                    <label htmlFor="password">Password</label>
                    <TextInput name="password" id="password" type="password" required 
                        pattern="(?=.*[A-Z]).{6,}"
                        errorMessage={{required:"Password is required", pattern: "Password should be at least 6 characters and contains at least one upper case letter"}}
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <TextInput name="confirmPassword" id="confirmPassword" type="password" required 
                        validator={this.matchPassword}
                        errorMessage={{required:"Confirm password is required", validator: "Password does not match"}}
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.handleClick} >Submit</button>
                </div>
            </ValidationForm>
            </div>
            </div>
            </div>
        )
    }
}

export default SignUp