import type {NextPage} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {Navbar, Nav} from 'react-bootstrap'

const Layout: NextPage = ({children}) => {
    const year = new Date().getFullYear()
    const router = useRouter()
    let defaultTransparent = router.route !== '/contactus'
    const [isTransparent, setIsTransparent] = useState(defaultTransparent);
    const [navOpen, setNavOpen] = useState(false);
    useEffect(() => {
        const handleRouteChange = (url: string) => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            defaultTransparent = url !== '/contactus'
            setIsTransparent(defaultTransparent)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => router.events.off('routeChangeComplete', handleRouteChange)
    }, [])
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300 && isTransparent) {
                setIsTransparent(false);
            } else if (window.scrollY <= 300 && !isTransparent) {
                setIsTransparent(true);
            }
        }
        if (defaultTransparent) {
            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll)
        }
    })
    let navBarToggle: any = null
    const closeNav = () => {
        navBarToggle.click()
    }
    return (
        <div className={`${navOpen ? 'nav-open' : ''}`}>
            <Head>
                <meta charSet="utf-8"/>
                <title>Serving Robot</title>
                <meta
                    content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no'
                    name='viewport'/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css"
                      crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
                      crossOrigin="anonymous"/>
            </Head>
            <main className="landing-page sidebar-collapse">
                <Navbar className={`${isTransparent ? 'navbar-transparent' : ''}`}
                        color-on-scroll="300" expand="lg" fixed="top" onToggle={setNavOpen}>
                    <div className="container">
                        <div className="navbar-translate">
                            <Navbar.Brand href="/">
                                <svg width="82.1" height="26" viewBox="0 0 82.1 26">
                                    <g>
                                        <g>
                                            <g>
                                                <path className="st0" d="M30.3,14.9h2.5c0.9,0,1.7-0.2,2.4-0.6c0.7-0.4,1.2-0.9,1.6-1.6c0.4-0.7,0.6-1.5,0.6-2.4
            c0-0.9-0.2-1.7-0.6-2.4c-0.4-0.7-0.9-1.2-1.6-1.6c-0.7-0.4-1.5-0.6-2.4-0.6h-5.2v14.2h2.7V14.9z M30.3,7.8h1.9
            c0.8,0,1.5,0.2,1.9,0.7c0.4,0.4,0.7,1.1,0.7,1.9c0,0.8-0.2,1.4-0.7,1.9c-0.4,0.4-1.1,0.7-1.9,0.7h-1.9V7.8z"></path>
                                                <path className="st0" d="M63.8,6.5c-1-0.6-2.1-0.9-3.3-0.9h-5.4v14.2h5.4c1.3,0,2.4-0.3,3.3-0.9c1-0.6,1.7-1.4,2.2-2.5
            c0.5-1.1,0.8-2.3,0.8-3.7c0-1.4-0.3-2.7-0.8-3.7C65.5,8,64.8,7.1,63.8,6.5z M63,16.3c-0.7,0.9-1.7,1.3-3,1.3h-2.2V7.9H60
            c1.3,0,2.3,0.4,3,1.3c0.7,0.9,1.1,2.1,1.1,3.5S63.8,15.4,63,16.3z"></path>
                                                <path className="st0" d="M45.5,20.1c3.2,0,5.8-2.6,5.8-5.8V5.7h-2.7v8.6v0.2c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1v-0.2V5.7h-2.7
            v8.6C39.7,17.5,42.3,20.1,45.5,20.1z"></path>
                                                <path className="st0" d="M75.3,20.1c3.2,0,5.8-2.6,5.8-5.8V5.7h-2.7v8.6v0.2c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1v-0.2V5.7
            h-2.7v8.6C69.5,17.5,72.1,20.1,75.3,20.1z"></path>
                                            </g>
                                        </g>
                                        <g>
                                            <path className="st0" d="M15.1,4v20.9c0,0.2,0.2,0.3,0.4,0.2l4.5-3.1c0.1,0,0.1-0.1,0.1-0.2V0.9c0-0.2-0.2-0.3-0.4-0.2l-4.5,3.1
        C15.1,3.9,15.1,4,15.1,4z"></path>
                                            <path className="st0" d="M12.5,3.8L8,0.7c-0.2-0.1-0.4,0-0.4,0.2v11.7c0,0.2,0.2,0.3,0.4,0.2l4.5-3.1c0.1,0,0.1-0.1,0.1-0.2V4
        C12.6,4,12.6,3.9,12.5,3.8z"></path>
                                            <path className="st0" d="M7.6,16.3v5.5c0,0.1,0,0.2,0.1,0.2l4.5,3.1c0.2,0.1,0.4,0,0.4-0.2V13.1c0-0.2-0.2-0.3-0.4-0.2l-4.5,3.1
        C7.6,16.1,7.6,16.2,7.6,16.3z"></path>
                                            <path className="st0" d="M0.1,4v20.9c0,0.2,0.2,0.3,0.4,0.2L5,21.9c0.1,0,0.1-0.1,0.1-0.2V0.9c0-0.2-0.2-0.3-0.4-0.2L0.2,3.8
        C0.2,3.9,0.1,4,0.1,4z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navigation" ref={(el: any) => navBarToggle = el}/>
                        </div>
                        <Navbar.Collapse className="justify-content-end" id="navigation">
                            <Nav>
                                <Nav.Link href="/">BellaBot</Nav.Link>
                                <Nav.Link href="/ketty">KettyBot</Nav.Link>
                                <Nav.Link href="https://twitter.com/servingrobot" target="_blank">
                                    <i className="fa fa-twitter"/>
                                    <p className="d-lg-none">Twitter</p>
                                </Nav.Link>
                                <Nav.Link href="https://m.facebook.com/profile.php?id=100075513878464" target="_blank">
                                    <i className="fa fa-facebook-square"/>
                                    <p className="d-lg-none">Facebook</p>
                                </Nav.Link>
                                <Nav.Link href="https://www.instagram.com/servingrobot111/" target="_blank">
                                    <i className="fa fa-instagram"/>
                                    <p className="d-lg-none">Instagram</p>
                                </Nav.Link>
                                <Nav.Link href="tel:07716474334">
                                    <i className="fa fa-phone" aria-hidden="true" style={{top: "2px"}}/>7716474334
                                </Nav.Link>
                                <Nav.Link href="/contactus" className="btn btn-round btn-info"
                                          style={{color: '#FFF !important'}}>
                                    Contact US
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
                {children}
                <div id={`${navOpen ? 'bodyClick' : ''}`} onClick={() => closeNav()}/>
                <footer className="footer footer-black footer-white">
                    <div className="container">
                        <div className="row">
                            <nav className="footer-nav">
                                <ul>
                                    <li>
                                        <Link href={"/"}>
                                            <a>PUDU</a>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="credits ml-auto">
                                <span className="copyright">©{year}, Power by PUDU</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
            <script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol?callback=GetMap' async/>
        </div>
    )
}

export default Layout
