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
    render() {
        return (
            <div>
                <div className="input-div pass">
                    <div className="div">
                        <input type="email" placeholder="Email" onChange={this.takeEmail} />
                    </div>
                </div>
                <button className='sign-up' onClick={this.handleSubmit}>Send</button>
            </div>
        );
    }
}
export default EmailForm;
