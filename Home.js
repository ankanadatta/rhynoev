import React from 'react'
import { useState, useEffect, useCallback } from "react";
import pic1 from './grp.png';
import pic2 from './cross.png';
import pic3 from './se03lite.png';
import pic4 from './se03max.png';
import pic5 from './golden.png';
import { Link } from 'react-router-dom';

const Home = () => {
    const words = [
        'Elegance.', 'Minimalism.', 'Comfort.', 'Style.'
    ]

    const [newWord, setnewWord] = useState("Style.");

    var index = 0;
    const selectWord = useCallback(() => {
        setnewWord(words[index]);
        if (index === 3) {
            index = 0;
        }
        else {
            index++;
        }
    }, []);

    useEffect(() => {
        const intervalID = setInterval(selectWord, 2000);
        return () => clearInterval(intervalID);
    }, [selectWord])

    return (
        <div>
            <div className='container mt-3'>
                <h1 className='front lato-regular w3-animate-left'>Let's Elevate Your Ride Experience With Rhyno-<br /> Where Superiority Meets <span className='word'>{newWord}</span></h1>
            </div>

            <div id="carouselExampleCaptions" className="container carousel slide mt-5">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={pic1} className="carousel-img d-block w-100" />
                        <div className="carousel-caption carousel-text">
                            <h5 className='lato-black'>LFPBattery</h5>
                            <p className='lato-bold'>Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
                                renowned for their safety features—eliminating the risk of fire associated with other
                                Lithium batteries. These batteries boast a broader temperature range, ideal for the
                                diverse Indian climate. Our technology enhances Rhyno's longevity, complemented
                                by an Active Balancing Smart Battery Management System (BMS) for extended life
                                and reduced maintenance. Each battery undergoes rigorous waterproofing tests
                                according to IP76 standards. But it doesn't stop there—our technology goes the extra
                                mile in ensuring the battery's lasting durability. Connect with us to discover the
                                thoughtful engineering behind our batteries!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic2} className="carousel-img d-block w-100" />
                        <div className="carousel-caption carousel-text">
                            <h5>Wider tyres</h5>
                            <p>Now, say goodbye to skidding and embrace the leaning turns!
                                Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous
                                beast that ensures stability on different terrains such as wet roads, mud, and sand.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic3} className="carousel-img d-block w-100" />
                        <div className="carousel-caption carousel-text">
                            <h5>Range prediction</h5>
                            <p> Many budget-friendly electric scooters overlook this crucial
                                feature, causing riders to experience range anxiety. With Rhyno, you can ride with
                                peace of mind, thanks to the scooter providing precise information about the
                                remaining battery.
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic4} className="carousel-img d-block w-100" />
                        <div className="carousel-caption carousel-text">
                            <h5>Extraordinery Experience</h5>
                            <p> Rhyno is more than just a mode of transportation. It is
                                an experience of sheer comfort and style! A seamless fusion of minimalism,
                                sophistication, and a touch of masculinity!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={pic5} className="carousel-img d-block w-100" />
                        <div className="carousel-caption carousel-text">
                            <h5>Rugged and simple Design</h5>
                            <p>We’ve had enough of the EVs looking and feeling like
                                fragile plastic toys. Often fading out and shamelessly breaking in minor accidents,
                                ending up spending weeks and months at service stations for complex repairs. We
                                took a bold step of making something raw, rugged, and practical. We kept it so
                                simple that even your trusted local mechanic can understand and repair most of it. If
                                you have reached this far, why not to take a test ride? Click here to locate your
                                nearest dealership or book a test ride at your home!</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div class="prebook lato-light">Pre-book now</div>
            <footer>
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <p className="ftr"><Link className='footer-link lato-light'>Privacy Policy</Link></p>
                            <p className="ftr"><Link className='footer-link lato-light'>Refund Policy</Link></p>
                            <p className="ftr"><Link className='footer-link lato-light'>Website Policy</Link></p>
                            <p className="ftr"><Link to="/contact" className='footer-link lato-light'>Contact Us</Link></p>
                        </div>
                        <div className="col">
                            <p className="ftr"><Link className='footer-link lato-light' to="/compare">Products</Link></p>
                            <p className="ftr"><Link className='footer-link lato-light' to="https://www.linkedin.com/company/rhyno-wheels/" target='_blank'>Career</Link></p>
                            <p className="ftr"><Link to="/rentals" className='footer-link lato-light'>Rentals</Link></p>
                            <p className="ftr"><Link to="https://www.instagram.com/rhyno.in/" target='_blank'><i className="footer-link bi bi-instagram"></i></Link>
                                <Link to="https://www.linkedin.com/company/rhyno-wheels/" target='_blank'><i className="footer-link bi bi-linkedin"></i></Link></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}


export default Home