import React from 'react';
import cardioImage from '../assets/cardio3.jpeg'; 
import ownerImage from '../assets/owner.jpg'; 
import ryanImage from '../assets/ryan.jpeg'; 
import satijaImage from '../assets/satija.JPG'; 
import bachhiImage from '../assets/bachhi.JPG';
import tanmayImage from '../assets/tanmay.JPG';
import './About.css';

const About = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                <h2>About Our Gym</h2>
              <p>At Lamba Fitness Edge, we believe that fitness and wellbeing are the cornerstones of a full and vibrant life. Established in 2024, we began our journey as a family-owned business dedicated to providing exceptional gym equipment at affordable prices. But, we dreamed bigger than just being an ordinary fitness equipment supplier; we aspired to lead the industry.</p>
              <p>Two decades later, we a
                re proud to have transformed Lamba fitness edge into one of india's premier online retailers of fitness equipment. We've moved beyond just supplying gear – we've become advocates for fitness, wellbeing and life enrichment. Our commitment to excellence is reflected not only in the quality equipment we provide but also in the lives we've improved.</p>
              <p>Our real success lies in the thousands of customers we've empowered to live longer, more joyful, and healthier lives. We're more than just a fitness company – we're your partners in health, your cheerleaders on the sideline, motivating you to reach your personal fitness goals. Embrace the fitness journey with us and see how it transforms your world.</p>
              <h4><pre>location: 
                       Achina,Haryana 
                       127307</pre></h4>
                </div>
                <div className="col-md-6">
                    <img src={cardioImage} className="img-fluid rounded" alt="Gym" />
                </div>
            </div>

            <section className="service">
             <center><h1 className="heading">Our Team <span></span></h1></center> 
                <div id="services" className="team-container">
                    <div className="box1">
                        <img src={ownerImage} alt="Manish Tayde" />
                        <p className="center">
                            <a style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontFamily: 'Langar, cursive' }}>
                                Somver Lamba
                            </a>
                        </p>
                        <p style={{ fontFamily: 'sans-serif' }}>Gym Owner</p>
                    </div>
                    <div className="box1">
                        <img src={ryanImage} alt="Ryan Fernando" /><br />
                        <p className="center">
                            <a style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontFamily: 'Langar, cursive' }}>
                                samay rathore
                            </a>
                        </p>
                        <p style={{ fontFamily: 'sans-serif' }}>Nutrition Coach</p>
                    </div>
                </div>
            </section>

            <section className="price" id="price">
                <center><h1 className="heading">Our <span>Pricing</span></h1></center> 
                <div className="box-container">
                    <div className="box">
                        <h3 className="title">3 Months</h3>
                        <h3 className="amount">Rs. 7,000</h3>
                        <ul>
                            <li>5 Classes</li>
                            <li>5 In Personal Training Sessions</li>
                            <li>Full Gym & Facilities Access</li>
                            <li>Gym Tour & Training Instruction</li>
                            <li>Invitation Card</li>
                        </ul>
                        <a href="#" className="btn btn-pr">Check Out</a>
                    </div>
                    <div className="box">
                        <h3 className="title">6 Months</h3>
                        <h3 className="amount">Rs. 12,000</h3>
                        <ul>
                            <li>10 Classes</li>
                            <li>10 In Personal Training Sessions</li>
                            <li>Full Gym & Facilities Access</li>
                            <li>Boxing Ring, Free Events</li>
                            <li>Gym Tour & Training Instruction</li>
                        </ul>
                        <a href="#" className="btn">Check Out</a>
                    </div>
                    <div className="box">
                        <h3 className="title">1 Whole Year</h3>
                        <h3 className="amount">Rs. 20,000</h3>
                        <ul>
                            <li>10 Classes</li>
                            <li>15 In Personal Training Sessions</li>
                            <li>Full Gym & Facilities Access</li>
                            <li>Boxing Ring, Free Events</li>
                            <li>Gym Tour & Training Instruction</li>
                        </ul>
                        <a href="#" className="btn">Check Out</a>
                    </div>
                </div>
            </section>

            
            <section className="section-reviews" id="reviews">
                <div className="container reviews">
               <center><h1 className="heading">Customer <span>Reviews</span></h1></center> 
                    
                    <div className="review">
                        <div className="review-info">
                            <div className="review-image" data-aos="image-rotateIn">
                                <img src={satijaImage} alt="Yash Satja" className="review-icon" width="130" height="130" />
                            </div>
                            <div className="review-details" data-aos="fade-down">
                                <div><b>Yash Satja</b></div>
                                <div>
                                    I can't say enough good things about Jungle gym. The trainers are exceptional, and the community is so welcoming...
                                </div>
                            </div>
                        </div>
                        <div className="review-info">
                            <div className="review-image" data-aos="image-rotateIn">
                                <img src={bachhiImage} alt="Nachiket Patil" className="review-icon" width="130" height="130" />
                            </div>
                            <div className="review-details" data-aos="fade-down">
                                <div><b>Nachiket Patil</b></div>
                                <div>
                                    Mukesh Ghalot, the Trainer, is a true expert. He pushes you to your limits while ensuring safety...
                                </div>
                            </div>
                        </div>
                        <div className="review-info">
                            <div className="review-image" data-aos="image-rotateIn">
                                <img src={tanmayImage} alt="Tanmay Jagtap" className="review-icon" width="130" height="130" />
                            </div>
                            <div className="review-details" data-aos="fade-down">
                                <div><b>Tanmay Jagtap</b></div>
                                <div>
                                    Lamba Fitness edge is not just a gym; it's a lifestyle. The facility is top-notch, and the trainers are top-level...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default About;
