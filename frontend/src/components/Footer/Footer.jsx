import React from 'react'
import './footer.css'

import { Container, Row , Col , ListGroup , ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'

const quick__links = [
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/about',
        display:'About'
    },
    {
        path:'/tours',
        display:'Tours'
    },

];


const quick__links2 = [
    {
        path:'/gallery',
        display:'Gallery'
    },
    {
    path:'/Login',
    display:'Login'
    },
    {
        path:'/register',
        display:'Register'
    },

]


const Footer = () => {

    const year = new Date().getFullYear()
    return (
        <> 
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3'>
                        <div className="logo">
                            <img src={Logo} alt="" />

                            <p>Follow for updates, promotions, and travel inspiration on social media platforms</p>

                            <div className="social__links d-flex align-items-center gap-4">
                                <span>
                                    <a href='https://youtu.be/KeZrQ6h7ZDY?si=PCDmiPvvyCCbO3KQ'><i class="ri-youtube-line"></i> </a>
                                </span>

                                <span>
                                    <a href='https://github.com/khushprajapati3107'><i class="ri-github-fill"></i> </a>
                                </span>

                                <span>
                                    <a href='https://www.facebook.com/travelvista.2024?sfnsn=wiwspwa&mibextid=RUbZ1f'><i class="ri-facebook-circle-line"></i> </a>
                                </span>

                                <span>
                                    <a href='https://www.instagram.com/_travelvista7_'><i class="ri-instagram-line"></i> </a>
                                </span>
                            </div>
                        </div>
                    </Col>

                    <Col lg='3'>
                        <h5 className="footer__link-title">
                            Discover
                        </h5>

                        <ListGroup className="footer__quick-links">
                            {
                                quick__links.map((item,index) => (
                                    <ListGroupItem key={index} className='ps-0 border-0'>
                                        <Link to={item.path}> {item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>

                    <Col lg='3'>
                    <h5 className="footer__link-title">
                            Quick__Links
                        </h5>

                        <ListGroup className="footer__quick-links">
                            {
                                quick__links2.map((item,index) => (
                                    <ListGroupItem key={index} className='ps-0 border-0'>
                                        <Link to={item.path}> {item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>

                    <Col lg='3'>
                    <h5 className="footer__link-title">
                            Contact
                        </h5>

                        <ListGroup className="footer__quick-links">
                            {                   
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                                        <span><i class="ri-map-pin-line"></i></span>
                                        Address:
                                    </h6>

                                    <p className='mb-0'>Visnagar, Gujarat</p>
                                </ListGroupItem>
                                
                            }
                        </ListGroup>

                        <ListGroup className="footer__quick-links">
                            {                   
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                                        <span><i class="ri-mail-line"></i></span>
                                        Email:
                                    </h6>

                                    <p className='mb-0'>khushprajapati777@gmail.com</p>
                                </ListGroupItem>
                                
                            }
                        </ListGroup>

                        <ListGroup className="footer__quick-links">
                            {                   
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                                        <span><i class="ri-phone-fill"></i></span>
                                        Phone:
                                    </h6>

                                    <p className='mb-0'>+91 9824970199</p>
                                </ListGroupItem>
                                
                            }
                        </ListGroup>
                    </Col>

                    <Col lg='12' className='text-center pt-5'>
                        <p className="copyright">Copyright {year}, design and develop by Khush Prajapati. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
        </>
    )
}

export default Footer;  