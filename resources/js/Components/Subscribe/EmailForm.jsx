import React, { Component } from 'react';
import axios from "axios";
class EmailForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
        }
        this.takeEmail = this.takeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    takeEmail(event){
        this.setState({email : event.target.value})
    }
     handleSubmit(){
        const packets = {
            email: this.state.email,
        };
        axios.post('/Madrasa/newsletter', packets)
            .then(
                response => alert(JSON.stringify("Form Submited"))
                )
            .catch(error => {
                console.log("ERROR:: ",error.response.data);
                });
    }
    render(){
        return (
<div>


            <div className="container">
                <div className="login-content">
                    <form>
                        {/* <h2 className="title">Sent Us a Message</h2> */}
                           {/* <div className="input-div one">
                              <div className="div">
                                      <input type="text" placeholder="First Name" onChange={this.firstName} className="input"/>
                              </div>
                           </div> */}


                              <div className="div pb-4">
                                   <input type="email"  className='input-field' placeholder="Email" onChange={this.takeEmail}  />
                           </div>


                        <button  className="btn btn-primary" onClick={this.handleSubmit}>Send</button>

                    </form>
                </div>
            </div>

                </div>
        );
    }
}
export default EmailForm;
