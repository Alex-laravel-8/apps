import React, { Component } from 'react';
import axios from "axios";
import Swal from 'sweetalert2'


class ContactForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            email: '',
            phone: ''
        }

        this.firstName = this.firstName.bind(this);
        this.takePhone = this.takePhone.bind(this);
        this.takeEmail = this.takeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    firstName(event) {
        this.setState({ firstname: event.target.value })
    }
    takePhone(event) {
        this.setState({ phone: event.target.value })
    }
    takeEmail(event) {
        this.setState({ email: event.target.value })
    }


    handleSubmit() {

        const packets = {
            firstname: this.state.firstname,
            email: this.state.email,
            phone: this.state.phone,
        };
        axios.post('/send', packets)
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


                <div className="container">
                    <div className="login-content">
                        <div className='flex-field'>
                            <h2 className="title">Sent Us a Message</h2>
                            <div className="input-div one">
                                <div className="div">
                                    <input type="text" placeholder="First Name" onChange={this.firstName} className="input" />
                                </div>
                            </div>

                            <div className="input-div pass">
                                <div className="div">
                                    <input type="email" placeholder="Email" onChange={this.takeEmail} className="input" />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="div">
                                    <input type="number" placeholder="Phone Number" onChange={this.takePhone} className="input" />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Send</button>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default ContactForm;
