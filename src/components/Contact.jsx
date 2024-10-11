import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact =()=>{
    return <div>
        <div className="contact">
            <h5 className="text-center mt-5">Contact Us</h5>
            <h2 className="text-center text-primary">Ask Your Doubts</h2>
            <div className="row d-flex justify-content-center contact-container">
                <div className="col-5 p-3 mx-3 message">
                    <h2>Message Us</h2>
                    <p>Feel free to reach out if you need more information about our curriculum, extracurricular activities, or student support services. We are also happy to provide details about our enrollment process, tuition fees, and financial aid options. Your feedback and inquiries are important to us, and we strive to respond promptly to ensure you have all the information you need to make the best decision for your child's education.</p>
                    <div className="address d-flex flex-column">
                    <div className="email d-flex align-items-center">
                    <img src="./images/email-icon.png"></img>
                    <h4>nextgen@gmail.com</h4>
                    </div>
                    <div className="phone d-flex align-items-center">
                    <img src="./images/phone-icon.png"></img>
                    <h4>9014364546</h4>
                    </div>
                    <div className="location d-flex align-items-center">
                    <img src="./images/location.png"></img>
                    <h4>MVP Colony, Viskhapatnam.</h4>
                    </div>
                    </div>
                </div>
                <div className="col-5 p-3 m-2 mt-3">
                    <form className="p-3">
                        <label for="name" className="mt-2">Name</label>
                        <input type="text" id="name" className="input-group form-control " placeholder="Enter Your name"/>
                        <label for="email" className="mt-2">Email</label>
                        <input type="email" id="email" className="input-group form-control" placeholder="Enter Your Email"/>
                        <label for="phone" className="mt-2">Phone Number</label>
                        <input type="text" id="phone" className="input-group form-control" placeholder="Enter Your Phone"/>
                        <label for="message" className="mt-2">Message</label>
                        <textarea type="textarea" id="message" className="input-group form-control"  placeholder="Enter Your Message" rows="5" cols="50"/>
                        <center><h4 className="btn btn-primary mt-3">Submit</h4></center>
                    </form>
                </div>
            </div>
        </div>
        <hr className="mx-5"/>
        <h5 className="text-center">@Copy Rights are Reserved to Sagar Allada , 2024</h5>
    </div>
}
export default Contact