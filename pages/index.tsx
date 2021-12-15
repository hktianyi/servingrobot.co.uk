import type {NextPage} from 'next'
import styles from "../styles/Bella.module.css";
import {useState} from "react";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";
import dayjs from "dayjs";

const Banner = () => {
    const [show, setShow] = useState(false);
    const christmasMonth = dayjs().month() == 11;
    if (christmasMonth) {
        return (
            <>
                <div className="page-header header-video">
                    <div className="filter filter-danger"/>
                    <div className="video-image"/>
                    <video className={styles.bgvideo} preload="auto" loop={true} muted={true} autoPlay={true}
                           poster="/static/christmas/Xmas-SNS-Poster.jpg">
                        <source
                            src="/static/christmas/christmas-bg.mp4"
                            type="video/mp4"/>
                        Video not supported
                    </video>
                    <div className={styles.contentcenter}>
                        <div className="container upper-container text-center">
                            <div className="video-text">
                                <img src='/static/img/bella/banner_bellabot.png' width={380} height={83}/>
                                <h3 className="title-no-upper-margin">Premium Delivery Robot</h3>
                                <p>The latest delivery robot designed by Pudu, BellaBot inherits the outstanding
                                    characteristics
                                    of the previous generation, while being endowed with superior human-Robot
                                    interaction
                                    capabilities. Featuring an innovative bionic design language, cute
                                    modeling,multi-modal
                                    interaction and many other new functions, BellaBot provides users with an
                                    unprecedented food
                                    delivery robot experience.</p>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-4 offset-md-4 text-center">
                                    <button type="button" onClick={() => setShow(true)}
                                            className="btn btn-lg btn-outline-secondary btn-round mt-5">
                                        <i className="fa fa-play"/> Watch Video
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={show} onHide={() => setShow(false)} size="lg"
                       aria-labelledby="example-modal-sizes-title-lg">
                    <ReactPlayer playing={show} width={"800px"} height={"450px"} controls={true} loop={true}
                                 url='https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/bellabot/business_en.mp4'/>
                </Modal>
            </>
        )
    } else {
        return (
            <>
                <div className="page-header" data-parallax="true"
                     style={{backgroundImage: "url('/static/img/bella/banner3.jpg')"}}>
                    <div className="filter"/>
                    <div className="container">
                        <div className="motto text-center">
                            <img src='/static/img/bella/banner_bellabot.png' width={380} height={83}/>
                            <h3>Premium Delivery Robot</h3>
                            <p>The latest delivery robot designed by Pudu, BellaBot inherits the outstanding
                                characteristics
                                of the previous generation, while being endowed with superior human-Robot interaction
                                capabilities. Featuring an innovative bionic design language, cute modeling,multi-modal
                                interaction and many other new functions, BellaBot provides users with an unprecedented
                                food
                                delivery robot experience.</p>
                            <br/>
                            <div className="row">
                                <div className="col-md-4 offset-md-4 text-center">
                                    <button type="button" onClick={() => setShow(true)}
                                            className="btn btn-lg btn-outline-secondary btn-round mt-5">
                                        <i className="fa fa-play"/> Watch Video
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={show} onHide={() => setShow(false)} size="lg"
                       aria-labelledby="example-modal-sizes-title-lg">
                    <ReactPlayer playing={show} width={"800px"} height={"450px"} controls={true} loop={true}
                                 url='https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/bellabot/business_en.mp4'/>
                </Modal>
            </>
        )
    }

}

const Bella: NextPage = () => {
    return (
        <>
            <Banner/>
            <div className="main">
                <div className="section section-da text-center">
                    <div className="container">
                        <h2 className="title">Design Aesthetics</h2>
                        <p style={{marginBottom: "20px"}}>BellaBot adopts an innovative bionic design. The bionic design
                            is just perfect from the height of the machine body to the screen tilt, and to the shape
                            curve.</p>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-image">
                                        <img className="img" src='/static/img/bella/design1.png'/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card card-blog">
                                            <div className="card-image">
                                                <img className="img" src='/static/img/bella/design2.png'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card card-blog">
                                            <div className="card-image">
                                                <img className="img" src='/static/img/bella/design3.png'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-blog">
                                    <div className="card-image">
                                        <img className="img" src='/static/img/bella/design4.png'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-mi text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ml-auto mr-auto">
                                <h2 className="title">Multimodal Interaction</h2>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="info">
                                    <div className="icon">
                                        <img src='/static/img/icons/light.svg'/>
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Light Interaction</h4>
                                        <p className="description">Different task status trigger corresponding light
                                            effect interactions, making the status indication clearer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="info">
                                    <div className="icon">
                                        <img src='/static/img/icons/touch.svg'/>
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Touch for Feedback</h4>
                                        <p>The new touch interaction makes the feedback of BellaBot more comprehensive,
                                            and the Human-Robot experience is unprecedented.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="info">
                                    <div className="icon">
                                        <img src='/static/img/icons/draw.svg'/>
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Smart Expressions</h4>
                                        <p>There are dozens of exclusive original expressions, which make the emotional
                                            expression of BellaBot more diverse, and make you feel more
                                            real &quot;Cat&quot;.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-3d section-dark text-center">
                    <video autoPlay loop muted preload={"true"} playsInline x5-playsinline="true"
                           webkit-playsinline="true">
                        <source src="https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/bellabot/avoid.mp4"
                                type="video/mp4"/>
                    </video>
                    <div className="title" style={{position: "absolute", top: "30%", width: "100%"}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 ml-auto mr-auto">
                                    <h2 className="title">3D Omnidirectional Obstacle Avoidance</h2>
                                    <h5 className="description">In pursuit of higher safety, BellaBot is equipped with
                                        3D sensors and a new modular chassis. It can stop at any angle and move away as
                                        soon as it encounters obstacles.</h5>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-3d section-dark text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-plain">
                                    <div className="card-body" style={{marginTop: "72px"}}>
                                        <h3 className="card-title">Minimum height of object detection is <span
                                            className="robot-indicator">2cm</span>
                                        </h3>
                                        <h3 className="card-title">Obstacle detection frequency up to <span
                                            className="robot-indicator">5400 times per minute</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <video autoPlay loop muted preload={"true"} playsInline x5-playsinline="true"
                                       webkit-playsinline="true">
                                    <source
                                        src="https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/bellabot/height.mp4"
                                        type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <video autoPlay loop muted preload={"true"} playsInline x5-playsinline="true"
                                       webkit-playsinline="true">
                                    <source
                                        src="https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/bellabot/radius.mp4"
                                        type="video/mp4"/>
                                </video>
                            </div>
                            <div className="col-md-6">
                                <div className="card card-plain">
                                    <div className="card-body" style={{marginTop: "72px"}}>
                                        <h3 className="card-title">Front detection angle up to <span
                                            className="robot-indicator">192.64°</span></h3>
                                        <h3 className="card-title">Front obstacle detection range exceeds <span
                                            className="robot-indicator">10m</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ml-auto mr-auto">
                                <h2 className="title">Industry-exclusive</h2>
                                <h2 className="title">Dual SLAM Solution for Full Coverage in Any Scenario</h2>
                                <h5 className="description">BellaBot supports both Laser SLAM and Visual SLAM
                                    positioning and navigation solutions in order to adapt to more scenarios. Both of
                                    which are accurate and easy to use. Both positioning solutions which BellaBot offers
                                    provides the same excellent user experience. While the positioning solutions differ,
                                    BellaBot&apos;s customer-centered service never changes.</h5>
                                <br/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <video autoPlay loop muted preload={"true"} playsInline x5-playsinline="true"
                                       webkit-playsinline="true">
                                    <source
                                        src="https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/bellabot/laserslam.mp4"
                                        type="video/mp4"/>
                                </video>
                            </div>
                            <div className="col-md-6">
                                <video autoPlay loop muted preload={"true"} playsInline x5-playsinline="true"
                                       webkit-playsinline="true">
                                    <source
                                        src="https://pudu-file-cdn.oss-accelerate.aliyuncs.com/website/video/bellabot/visualslam.mp4"
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
                                <div className="card" data-background="image"
                                     style={{backgroundImage: "url('/static/img/bella/evolve_tray.png')"}}>
                                    <div className="card-body">
                                        <h3 className="card-title">Infrared Induction Tray</h3>
                                        <p className="card-description">Modular structure for quick disassembly and
                                            intelligent infrared
                                            induction. A smarter tray for more efficient delivery.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card" data-background="image"
                                     style={{backgroundImage: "url('/static/img/bella/evolve_battery.png')"}}>
                                    <div className="card-body">
                                        <h3 className="card-title">Power Exchange Technology</h3>
                                        <p className="card-description">Charging and usage scenarios are categorized for
                                            faster battery
                                            replacement. 24/7 operations: a piece of cake for BellaBot.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card" data-background="image"
                                     style={{backgroundImage: "url('/static/img/bella/rgbd.png')"}}>
                                    <div className="card-body">
                                        <h3 className="card-title">RGBD</h3>
                                        <p className="card-description">Auto-level adaptive variable suspension. Damping
                                            can be altered
                                            according to different floor conditions and driving requirements. The
                                            resonance
                                            frequency is maintained at an optimal state.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card" data-background="image"
                                     style={{backgroundImage: "url('/static/img/bella/suspension.png')"}}>
                                    <div className="card-body">
                                        <h3 className="card-title">Auto-Level Independent Linkage Suspension for
                                            Stable</h3>
                                        <p className="card-description">Modular structure for quick disassembly and
                                            intelligent infrared
                                            induction. A smarter tray for more efficient delivery.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-scheduler section-dark text-right">
                    <img src='/static/img/scheduler.png'/>
                    <div className="title" style={{position: "absolute", top: "20%", width: "100%"}}>
                        <div className="container text-left">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className="title">PUDU SCHEDULER</h2>
                                    <h5 className="description">PUDU SCHEDULER has adopted a decentralized, flexible
                                        ad hoc network
                                        communication scheme and algorithm architecture. Each robot can directly
                                        communicate with
                                        any robot in the same network, and quickly calculate and make decisions.
                                        Such design reduces
                                        the requirements for the network, reduces a central computing node that
                                        requires high
                                        computing power, and is closer to the interaction mechanism among
                                        people.</h5>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 offset-md-1">
                                <div className="card card-plain text-center">
                                    <div className="card-image">
                                        <img src='/static/img/bella/parameter2.2.0.png' alt="Parameter"
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
                                                <td>565*537*1290 mm</td>
                                            </tr>
                                            <tr>
                                                <td>Machine weight</td>
                                                <td>59 kg</td>
                                            </tr>
                                            <tr>
                                                <td>Machine material</td>
                                                <td>ABS/Aviation-grade aluminum alloy</td>
                                            </tr>
                                            <tr>
                                                <td>Battery life</td>
                                                <td>12-24H (Replaceable Battery)</td>
                                            </tr>
                                            <tr>
                                                <td>Charging time</td>
                                                <td>4.5 H</td>
                                            </tr>
                                            <tr>
                                                <td>Safety</td>
                                                <td>Speed: 0.5-1.2 m/s (Adjustable) | Climbing angle: ≤ 5°</td>
                                            </tr>
                                            <tr>
                                                <td>Load capacity</td>
                                                <td>Max 40kg，10kg/tray</td>
                                            </tr>
                                            <tr>
                                                <td>Positioning method</td>
                                                <td>Marker Positioning: Supports a maximum height of 8 meters （optional
                                                    high-level code) Laser Positioning: Code-free with no height
                                                    restriction
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bella
