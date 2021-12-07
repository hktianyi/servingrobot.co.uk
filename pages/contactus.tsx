import type {NextPage} from 'next'
import 'bingmaps'
import {useEffect, useState} from "react";
import axios from "axios";

const Contactus: NextPage = () => {
    useEffect(() => {
        // @ts-ignore
        window.GetMap = () => {
            const center = new Microsoft.Maps.Location(53.497521, -2.237901)
            const map = new Microsoft.Maps.Map('#contactUsMap', {
                credentials: 'AkKb7UbGPVYqiGxiI0WbJZ3Y-J5rxzFsCOHqOGCs5nVU18WQ38X1X-iUIbW05kA2',
                backgroundColor: '#fff',
                center: center,
                // mapTypeId: Microsoft.Maps.MapTypeId.aerial,
                disableScrollWheelZoom: true,
                enableClickableLogo: false,
                liteMode: true,
                showLocateMeButton: false,
                showMapTypeSelector: false,
                showScalebar: false,
                showTermsLink: false,
                // showZoomButtons: false,
                zoom: 13,
            });
            const pin = new Microsoft.Maps.Pushpin(center, {
                title: 'Office',
                subTitle: '175 Cheetham Hill Rd',
                text: ''
            });
            map.entities.push(pin);
        }
        // @ts-ignore
        return () => window.GetMap = undefined
    }, [])
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const handleInputChange = (e: any) => {
        if (e.target.name == 'firstname') {
            setFirstname(e.target.value)
        } else if (e.target.name == 'lastname') {
            setLastname(e.target.value)
        } else if (e.target.name == 'email') {
            setEmail(e.target.value)
        } else if (e.target.name == 'message') {
            setMessage(e.target.value)
        }
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (!firstname) {
            alert("Require First name")
            return
        }
        if (!lastname) {
            alert("Require Last name")
            return
        }
        if (!email) {
            alert("Require Email")
            return
        }
        if (!message) {
            alert("Require Message")
            return
        }
        axios.defaults.withCredentials = true;
        axios.post('https://api.servingrobot.co.uk:10000/sendmsg', {
            firstname: firstname,
            lastname: lastname,
            email: email,
            message: message,
        }).then((res: any) => {
            alert('Send successfully!')
        }).catch((e: any) => {
            alert('Failed to send message!')
        })
    }
    return (
        <>
            <div className="section section-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 ml-auto mr-auto text-center">
                            <h2 className="title">Get in touch with us</h2>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-md-12">
                            <div className="card card-contact no-transition">
                                <div className="row pt-3">
                                    <div className="col-md-5">
                                        <div className="card-body">
                                            <div className="info info-horizontal">
                                                <div className="icon icon-info">
                                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                </div>
                                                <div className="description">
                                                    <h4 className="info-title">Find us at the office</h4>
                                                    <p style={{fontWeight: "700"}}>175 Cheetham Hill Rd</p>
                                                    <p>Cheetham Hill</p>
                                                    <p>Manchester</p>
                                                    <p>M8 8JJ</p>
                                                </div>
                                            </div>
                                            <div className="info info-horizontal">
                                                <div className="icon icon-danger">
                                                    <i className="fa fa-address-card-o" aria-hidden="true"></i>
                                                </div>
                                                <div className="description">
                                                    <h4 className="info-title">Give us a ring</h4>
                                                    <p>7716474334</p>
                                                    <p>0161 834 5539</p>
                                                    <p><a href="mailto:sales@servingrobot.co.uk"
                                                          style={{color: "#9a9a9a"}}>sales@servingrobot.co.uk</a>
                                                    </p>
                                                    <p>Mon - Fri, 8:00-22:00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <form role="form" id="contact-form" method="post" onSubmit={handleSubmit}>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group label-floating">
                                                            <label className="control-label">First name</label>
                                                            <input type="text" name="firstname" className="form-control"
                                                                   placeholder="First Name" value={firstname}
                                                                   onInput={handleInputChange}/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group label-floating">
                                                            <label className="control-label">Last name</label>
                                                            <input type="text" name="lastname" className="form-control"
                                                                   placeholder="Last Name" value={lastname}
                                                                   onInput={handleInputChange}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group label-floating">
                                                    <label className="control-label">Email address</label>
                                                    <input type="email" name="email" className="form-control"
                                                           placeholder="Email" value={email}
                                                           onInput={handleInputChange}/>
                                                </div>
                                                <div className="form-group label-floating">
                                                    <label className="control-label">Your message</label>
                                                    <textarea name="message" className="form-control" id="message"
                                                              rows={6} placeholder="Message" value={message}
                                                              onInput={handleInputChange}></textarea>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 offset-md-6">
                                                        <button type="submit" className="btn btn-info pull-right">
                                                            Send Message
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-md-4">
                            <div className="card" data-background="color" data-color="orange">
                                <div className="card-body">
                                    <h5>The value of our products is</h5>
                                    <div className="clearfix"></div>
                                    <ul className="services-info">
                                        <li>Optimizing Management for Reduced Labour Cost</li>
                                        <li>Enhancing Core Competitiveness with Differentiated Marketing</li>
                                        <li>Empowering Safe, Efficient, and Intelligent Customer Experience</li>
                                        <li>Allowing Waiters to Focus on Serving Customers Better</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card" data-background="color" data-color="green">
                                <div className="card-body">
                                    <h5>Quality Services That You Can Rely On</h5>
                                    <div className="clearfix"></div>
                                    <ul className="services-info">
                                        <li>Hundreds of after-sales service centers across the globe</li>
                                        <li>2 -years free warranty</li>
                                        <li>Free custom deployment</li>
                                        <li>Free operation training</li>
                                        <li>Fast service within 24 hours</li>
                                        <li>IoT service: Over 90% of technical issues can be solved remotely</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card" data-background="color" data-color="yellow">
                                <div className="card-body">
                                    <h5>Exclusive advantage</h5>
                                    <div className="clearfix"></div>
                                    <ul className="services-info">
                                        <li>3-day free trial</li>
                                        <li>Free delivery and installation throughout the UK</li>
                                        <li>Solve the problem of difficult recruitment and expensive labor</li>
                                        <li>Flexible payments ( a lump sum or installment )</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contactUsMap" className="big-map" style={{height: "300px", width: "100%"}}/>
        </>
    )
}

export default Contactus
