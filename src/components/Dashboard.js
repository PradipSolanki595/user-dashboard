import axios from "axios";
import React from "react"
import ReactPaginate from 'react-paginate';
import AddModel from "./AddModel";

class Dashboard extends React.Component {
    constructor(props){
        super();
        this._isMount = false
        this.state = {
            items: []
        }

    }

    componentDidMount(){
      this.getUser(1)
    }
     getUser = (page) => {
        this._isMount = true

         axios.get('https://reqres.in/api/users?page=' + page)
        .then((response) =>{
            if(this._isMount){
                this.setState({items: response.data.data})
            }
            console.log(response.data.data);
        })
        .catch(function (error) {
        })
    }

    addUser = (formData) => {
        this._isMount = true
        let data = formData
         axios.post(' https://reqres.in/api/users', data)
        .then((response) =>{
            if(this._isMount){
                this.setState({items: response.data.data})
            }
            console.log(response.data.data);
        })
        .catch(function (error) {
        })
    }

    render(){
        let {items} = this.state;
        let page = 1
       let loggeduser = JSON.parse(localStorage.getItem("user")).userName

        console.log(items)
        let users = items.map(item => {
            const { id, first_name, email, last_name } = item;
            return (

              <tr key={id}>
                {/* <td><img src={} /></td> */}
                <td>{first_name}</td>
                <td>{email}</td>
                <td>{last_name}</td>
                <td>
                <div className="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModalCenter">Edit User</a>
                        <a className="dropdown-item" href="#">Delete User</a>
                    </div>
                </div>
                </td>
              
              </tr>
            )
          }) || '';
        return (

            
            <div className="Main_wrapper">
       
                <div>
                    <div>
                    <h4 className="text-right">Hii, {loggeduser}</h4>

                    <div className="text-right w-100 d-flex">
                    <button class="btn btn-primary my-3" data-toggle="modal" data-target="#exampleModalCenter">
                        Add User
                    </button>
                    </div>
                        <table className="table table-bordered">
                            <thead >
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users}
                            </tbody>
                        </table>
                    </div>
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={2}
                        //   marginPagesDisplayed={2}
                        //   pageRangeDisplayed={5}
                          onPageChange={(page)=>this.getUser(2)}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                </div>
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div className="modal-body">
                                <AddModel addUser = {(formData)=>this.addUser(formData)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Dashboard