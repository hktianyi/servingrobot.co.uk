import type {NextPage} from 'next'
import Link from 'next/link'
import styles from '../styles/Ketty.module.css'
import Modal from 'react-bootstrap/Modal'
import ReactPlayer from 'react-player'
import {useState} from "react";

const Ketty: NextPage = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="page-header header-video">
                <div className="filter filter-danger"></div>
                <div className="video-image"></div>
                <video className={styles.bgvideo} preload="auto" loop={true} muted={true} autoPlay={true}
                       poster="https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/images/pc/kettybot/pc_navigation_en.png">
                    <source
                        src="https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/kettybot/headerpd_en.mp4"
                        type="video/mp4"/>
                    Video not supported
                </video>
                <div className={styles.contentcenter}>
                    <div className="container upper-container text-center">
                        <div className="video-text">
                            <img src='/static/img/ketty/logo.svg'/>
                            <h3 className="title-no-upper-margin">Delivery &amp; Reception Robot with an Ad Display</h3>
                        </div>
                        <br/>
                        <button type="button" onClick={() => setShow(true)}
                                className="btn btn-lg btn-warning btn-yellow btn-round mr-5">
                            <i className="fa fa-play"></i> Watch Video
                        </button>
                        <Link href="https://exhibitionhall.pudurobotics.com/?lang=en">
                            <a className="btn btn-lg btn-warning btn-yellow btn-round ml-5" target="_blank">3D
                                Preview</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="section text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="container">
                                        <h2 className={styles.subtitle}>Why our product is the best</h2>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-3">
                                        <img src='/static/img/ketty/best1.svg'/>
                                        <p>Superior Mobility</p>
                                    </div>
                                    <div className="col-md-3">
                                        <img src='/static/img/ketty/best2.svg'/>
                                        <p>Customized Advertisement</p>
                                    </div>
                                    <div className="col-md-3">
                                        <img src='/static/img/ketty/best3.svg'/>
                                        <p>Customer Attraction</p>
                                    </div>
                                    <div className="col-md-3">
                                        <img src='/static/img/ketty/best4.svg'/>
                                        <p>Greeting & Escorting</p>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <img src='/static/img/ketty/best5.svg'/>
                                        <p>AI Voice Interaction</p>
                                    </div>
                                    <div className="col-md-3">
                                        <img src='/static/img/ketty/best6.svg'/>
                                        <p>Multiple Delivery Modes</p>
                                    </div>
                                    <div className="col-md-3">
                                        <img src='/static/img/ketty/best7.svg'/>
                                        <p>Automatic Recharging</p>
                                    </div>
                                    <div className="col-md-3">
                                        <img src='/static/img/ketty/best8.svg'/>
                                        <p>Automatic Localization and Navigation System</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="text-right">
                                    <img
                                        src="https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/images/pc/kettybot/headerRight.png"
                                        width="50%"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ml-auto mr-auto">
                                <h2 className={styles.subtitle}>Compact Design for Improved Agility</h2>
                                <h5 className="description mt-3">KettyBot continues the minimalist design concept of
                                    Pudu Technology. The compact size and forward-leaning C-shaped body allow the robot
                                    to go through a clearance of only 55cm, making it an ideal choice in complex and
                                    crowded environments.</h5>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <video autoPlay loop muted preload={"true"} playsInline x5-playsinline="true"
                               webkit-playsinline="true">
                            <source
                                src="https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/kettybot/firee.mp4"
                                type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <div className="section text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ml-auto mr-auto">
                                <h2 className={styles.subtitle}>Multi-robot Cooperation for Higher Efficiency</h2>
                                <h5 className="description mt-3">Powered by PUDU Scheduler system, the KettyBot can
                                    directly communicate with any robot in the same network.</h5>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <video autoPlay loop muted preload={"true"} playsInline x5-playsinline="true"
                               webkit-playsinline="true">
                            <source
                                src="https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/kettybot/pc_cooperation_en.mp4"
                                type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <div className="section text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ml-auto mr-auto">
                                <h2 className={styles.subtitle}>Impressive Auto-charging Function for All-day-long
                                    Service</h2>
                                <h5 className="description mt-3">KettyBot automatically provides a voice alert and UI
                                    notification when the battery is low, and returns to the docking
                                    station <sup>[1]</sup>simultaneously.</h5>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <video autoPlay loop muted preload={"true"} playsInline x5-playsinline="true"
                               webkit-playsinline="true">
                            <source
                                src="https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/kettybot/reenergy1.mp4"
                                type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <div className="section text-center" style={{backgroundColor: "#000"}}>
                    <div className="container">
                        <div className="title">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 ml-auto mr-auto">
                                        <h2 className="title" style={{color: "#FFF", fontWeight: 700}}>A New Way to
                                            Impress Your Customers</h2>
                                        <h5 className="description">With AI voice interaction, KettyBot intelligently
                                            greets
                                            and interacts with passing through customers by waking up its screen. Such a
                                            cute and smart KettyBot would obviously draw more attention than the
                                            traditional
                                            approach!</h5>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <video autoPlay loop muted preload={"true"} playsInline x5-playsinline="true"
                                       webkit-playsinline="true">
                                    <source
                                        src="https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/kettybot/attract_en.mp4"
                                        type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-plain">
                                    <div className="card-body" style={{marginTop: "48px"}}>
                                        <h3 className={styles.subtitle}>Multi-table Delivery</h3>
                                        <p>Multiple tables can be served in one run with accurate positioning and
                                            optimal path planning. Achieve more with less!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-0">
                                <video autoPlay loop muted preload={"true"} playsInline x5-playsinline="true"
                                       webkit-playsinline="true" style={{width: "100%", height: "100%"}}>
                                    <source
                                        src="https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/kettybot/in1.mp4"
                                        type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <video autoPlay loop muted preload={"true"} playsInline x5-playsinline="true"
                                       webkit-playsinline="true" style={{width: "100%", height: "100%"}}>
                                    <source
                                        src="https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/kettybot/cruise_en.mp4"
                                        type="video/mp4"/>
                                </video>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-plain">
                                    <div className="card-body" style={{marginTop: "48px"}}>
                                        <h3 className={styles.subtitle}>Cruise Mode</h3>
                                        <p>KettyBot can cruise in specific areas to provide customers with free snacks
                                            and drinks, accompanied by broadcasts about services and promotions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 offset-md-1">
                                <div className="card card-plain text-center m-auto" style={{width: "50%"}}>
                                    <div className="card-image">
                                        <img src='/static/img/ketty/letter1.png' alt="Parameter"
                                             className="img-rounded img-responsive"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-plain">
                                    <div className="card-body">
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td style={{width: "200px"}}>Machine dimensions</td>
                                                <td>451*436*1103 mm</td>
                                            </tr>
                                            <tr>
                                                <td>Machine weight</td>
                                                <td>38 kg</td>
                                            </tr>
                                            <tr>
                                                <td>Carrying capacity</td>
                                                <td>30 kg</td>
                                            </tr>
                                            <tr>
                                                <td>Battery life</td>
                                                <td>＞8 H</td>
                                            </tr>
                                            <tr>
                                                <td>Charging time</td>
                                                <td>4.5 H</td>
                                            </tr>
                                            <tr>
                                                <td>Cruise speed</td>
                                                <td>Max 1.2m/s</td>
                                            </tr>
                                            <tr>
                                                <td>Clearance</td>
                                                <td>55 cm</td>
                                            </tr>
                                            <tr>
                                                <td>Ad display dimension</td>
                                                <td>18.5&quot;</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section" style={{backgroundColor: "#333", padding: "20px 0"}}>
                    <div className="container">
                        <h5 style={{fontSize: "12px"}}>Notes:</h5>
                        <p style={{fontSize: "12px"}}>1.The docking station needs to be purchased additionally.</p>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={() => setShow(false)} size="lg"
                   aria-labelledby="example-modal-sizes-title-lg">
                <ReactPlayer playing={show} width={"800px"} height={"450px"} controls={true} loop={true}
                             url='https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/kettybot/kettybot_en.mp4'/>
            </Modal>
        </>
    )
}

export default Ketty
