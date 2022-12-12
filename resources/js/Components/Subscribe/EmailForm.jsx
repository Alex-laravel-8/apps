import React, { Component } from 'react';
import Swal from 'sweetalert2'
import axios from "axios";
class EmailForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }
        this.takeEmail = this.takeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    takeEmail(event) {
        this.setState({ email: event.target.value })
    }
    handleSubmit() {
        const packets = {
            email: this.state.email,
        };
        axios.post('/newsletter', packets, { withCredentials: true })
            .then((response) => {
                Swal.fire(
                    'Form Submited',
                    'Form Submited Success',
                    'success'
                ).then(() => {
                    window.location.href = "/"
                })
            })
            .catch(error => {
                console.log("ERROR:: ", error.response.data);
            });
    }
    render(){
        return (
<div>


            <div className="container">
                <div className="login-content">


                            <div className="div pb-4">
                                   <input type="email"  className='input-field' placeholder="Email" onChange={this.takeEmail}  />
                           </div>
                                   <button  className="btn btn-primary" onClick={this.handleSubmit}>Send</button>
                </div>
            </div>

                </div>
        );
    }
}
export default EmailForm;
