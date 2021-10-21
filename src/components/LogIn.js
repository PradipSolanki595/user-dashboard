import React from "react"
import { ValidationForm, TextInput, SelectGroup, Checkbox, Radio } from "react-bootstrap4-form-validation"


class LogIn extends React.Component {
    constructor(props){
        super(props);

    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleClick (){
        const history = require("history").createBrowserHistory()
        history.push("/dashboard")
    }

render (){
    return (

        <div className="Main_wrapper d-flex bg-dark">

        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">Log In</h5>

            <ValidationForm onSubmit={this.handleSubmit}>
            <div class="form-group">

              <p className="mb-0"> <label htmlFor="userEmail"></label>
              <TextInput className="form-control" id="userEmail" type="text" ref="userEmail" name="userEmail" placeholder="User ID or Email" required
               minLength="4"
               maxLength="8"
               errorMessage={{
                   minLength:"Minimum {minLength} characters is required",
                   pattern:"Your lastname is not corgi!"
               }}
              /></p>

              <p className="mb-0"> <label htmlFor="password"></label>
                     <TextInput className="form-control" id="password" type="text" ref="password" name="password" placeholder="Password" required
                    
              /></p>


              <button id="LogIn" className="btn btn-primary" onClick={this.handleClick} >Log In</button>
                </div>
            </ValidationForm>
        </div>
        </div>
        </div>
    )

    
}

}

export default LogIn