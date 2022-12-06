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
                    <form >
                           <div className="input-div pass">
                              <div className="div">
                                   <input type="email" placeholder="Email" onChange={this.takeEmail} />
                           </div>
                        </div>
                        <button   className='sign-up' onClick={this.handleSubmit}>Send</button>
                    </form>
                </div>
        );
    }
}
export default EmailForm;
