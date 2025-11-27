import React from 'react'

import checkIcon from './../../assets/check-icon.png'
import closeIcon from './../../assets/xbox-x.png'
import userIcon from './../../assets/users-icon.png'
import babyIcon from './../../assets/baby-icon.png'
import roomIcon from './../../assets/room-icon.png'
import hotelImg from '../../assets/about-1.png';
import bedroomImg from '../../assets/about-2.png';
import explore1 from '../../assets/explore-icon-1.png';
import explore2 from '../../assets/explore-icon-2.png';
import explore3 from '../../assets/explore-icon-3.png';
import explore4 from '../../assets/explore-icon-4.png';
import explore5 from '../../assets/explore-icon-5.png';
import explore6 from '../../assets/explore-icon-6.png';
import element1 from './../../assets/bg-1.png';
import element2 from './../../assets/bg-2.png';


import singleServiceIcon01 from './../../assets/option-icon-1.png'
import singleServiceIcon02 from './../../assets/option-icon-3.png'
import singleServiceIcon03 from './../../assets/option-icon-4.png'
import singleServiceIcon04 from './../../assets/option-icon-5.png'
import singleServiceIcon05 from './../../assets/option-icon-6.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import resorts from './../../assets/feature.png'
import user1 from './../../assets/test-1.png'
import user2 from './../../assets/test-2.png'
import user3 from './../../assets/test-3.png'
import quote from './../../assets/Quote.png'
import bookingImg from './../../assets/Bookings.png'

import playVideo from './../../assets/play-btn.png'

import blog1 from './../../assets/blog-1.jpg'
import blog2 from './../../assets/blog-2.jpg'
import blog3 from './../../assets/blog-3.jpg'
import brand1 from './../../assets/logo1.png'
import brand2 from './../../assets/logo2.png'
import brand3 from './../../assets/logo3.png'
import brand4 from './../../assets/logo4.png'
import brand5 from './../../assets/logo5.png'

import { useNavigate } from 'react-router-dom'
import Nav from '../Nav/Nav'

// Data
import Data from './../../Data.json'




const Index = () => {

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/RoomsDetails/${id}`);
    };

    return (
        <>
            <Nav />
            {/* Hero */}
            <header className='pt-5'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="hero-content">
                                <h1>Enjoy A Luxuary Experience</h1>
                                <p>Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique, commodo gravida lectus non.</p>
                                <button className="btn">Visit Us</button>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="booking-form bg-white p-5 rounded">
                                <h2>Book A Room</h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="booking-box">
                                            <p><img src={checkIcon} alt="" /> Check In Date</p>
                                            <input type="date" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="booking-box">
                                            <p><img src={closeIcon} alt="" /> Check Out Date</p>
                                            <input type="date" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mt-3">
                                    <div className="booking-box">
                                        <p><img src={userIcon} alt="" /> Adults</p>
                                        <select className='w-100'>
                                            <option value="Adults">Adults</option>
                                            <option value="1">1</option>
                                            <option value="1">2</option>
                                            <option value="1">3</option>
                                            <option value="1">4</option>
                                            <option value="1">5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <div className="booking-box">
                                            <p><img src={babyIcon} alt="" /> Child</p>
                                            <select className='w-100'>
                                                <option value="Adults">Child</option>
                                                <option value="1">1</option>
                                                <option value="1">2</option>
                                                <option value="1">3</option>
                                                <option value="1">4</option>
                                                <option value="1">5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="booking-box">
                                            <p><img src={roomIcon} alt="" /> Room</p>
                                            <select className='w-100'>
                                                <option value="Adults">Room</option>
                                                <option value="1">1</option>
                                                <option value="1">2</option>
                                                <option value="1">3</option>
                                                <option value="1">4</option>
                                                <option value="1">5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn mt-5 check-btn">CHECK AVAILABILITY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* About */}
            <div className="about-section my-5 py-5" id="about">
                <div className="container">
                    <div className="row align-items-center gy-4">
                        <div className="col-lg-6 position-relative image-wrapper">
                            <img
                                src={hotelImg}
                                alt="Hotel Interior"
                                className="img-fluid  shadow-sm main-img"
                            />
                            <img
                                src={bedroomImg}
                                alt="Bedroom"
                                className="overlay-img  shadow p-1 bg-white"
                            />
                        </div>
                        <div className="col-lg-6 text-wrapper">
                            <div className="section-title about-title">
                                <span>About Us</span>
                                <h2>
                                    Most Safe & Rated<br />Hotel In London.
                                </h2>
                            </div>
                            <p>
                                Morbi tortor urna, placerat vel arcu quis, fringilla egestas neque. Morbi sit amet porta erat, quis rutrum risus. Vivamus et gravida nibh, quis posuere felis. In commodo mi lectus, Integer ligula lorem, finibus vitae lorem vitae tincidunt dolor consequat quis.
                            </p>
                            <p>
                                Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget lorem tempus blandit. Aenean eu vulputate lorem, quis auctor lectus.
                            </p>

                            <div className="feature-paragraphs mt-4 mb-4">
                                <p><i className="ri-check-line"></i> 24 Month / 24,000km Nationwide Warranty monotone</p>
                                <p><i className="ri-check-line"></i> Curabitur dapibus nisl a urna congue, in pharetra urna accumsan.</p>
                                <p><i className="ri-check-line"></i> Customer Rewards Program and excellent technology</p>
                            </div>


                            <button className="btn discover-btn mt-3">DISCOVER MORE</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Explore */}
            <div className="explore my-5 amb-0 py-5 position-relative">
                <div className="container">
                    <img src={element1} alt="" className='element element1 position-absolute ' />
                    <div className="row">
                        <div className="section-title text-center explore-title d-flex flex-column align-items-center">
                            <span>Explore</span>
                            <h2>The Hotel</h2>
                            <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
                        </div>
                        <div className="explore-wrapper mt-5">
                            <div className="row">
                                {/* card 1 */}
                                <div className="col-lg-4 col-md-6 border-0 mb-4 mb-lg-0">
                                    <div className="explore-card p-4 shadow">
                                        <img src={explore1} className='img-fluid' alt="" />
                                        <h2 className='my-2'>Qulity Room</h2>
                                        <p className=''>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                        <a href="#">Read More <i className="ri-arrow-right-long-line"></i></a>
                                    </div>
                                </div>
                                {/* card 2 */}
                                <div className="col-lg-4 col-md-6 border-0 mb-4 mb-lg-0">
                                    <div className="explore-card p-4 shadow">
                                        <img src={explore2} className='img-fluid' alt="" />
                                        <h2 className='my-2'>Privet Beach</h2>
                                        <p className=''>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                        <a href="#">Read More <i className="ri-arrow-right-long-line"></i></a>
                                    </div>
                                </div>
                                {/* card 3 */}
                                <div className="col-lg-4 col-md-6 border-0 mb-4 mb-lg-0">
                                    <div className="explore-card p-4 shadow">
                                        <img src={explore3} className='img-fluid' alt="" />
                                        <h2 className='my-2'>Best Accommodation</h2>
                                        <p className=''>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                        <a href="#">Read More <i className="ri-arrow-right-long-line"></i></a>
                                    </div>
                                </div>
                                {/* card 4 */}
                                <div className="col-lg-4 col-md-6 border-0 mt-lg-4 mt-sm-4 mt-md-0">
                                    <div className="explore-card p-4 shadow">
                                        <img src={explore4} className='img-fluid' alt="" />
                                        <h2 className='my-2'>Wellness & Spa</h2>
                                        <p className=''>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                        <a href="#">Read More <i className="ri-arrow-right-long-line"></i></a>
                                    </div>
                                </div>
                                {/* card 5 */}
                                <div className="col-lg-4 col-md-6 border-0 mt-lg-4 mt-sm-4 mt-md-0">
                                    <div className="explore-card p-4 shadow">
                                        <img src={explore5} className='img-fluid' alt="" />
                                        <h2 className='my-2'>Restaurants & Bars</h2>
                                        <p className=''>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                        <a href="#">Read More <i className="ri-arrow-right-long-line"></i></a>
                                    </div>
                                </div>
                                {/* card 6 */}
                                <div className="col-lg-4 col-md-6 border-0 mt-lg-4 mt-sm-4 mt-md-0">
                                    <div className="explore-card p-4 shadow">
                                        <img src={explore6} className='img-fluid' alt="" />
                                        <h2 className='my-2'>Special Offers</h2>
                                        <p className=''>Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet.</p>
                                        <a href="#">Read More <i className="ri-arrow-right-long-line"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Rooms */}
            <div className="container py-5">
                <div className="row">
                    <div className="section-title text-center explore-title d-flex flex-column align-items-center">
                        <span>The pleasure of luxury</span>
                        <h2>
                            Rooms & Suites
                        </h2>
                        <p>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
                    </div>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 },
                        }}
                        className='mt-5 border p-3 rounded'
                    >
                        {Data.Rooms.map((Room, index) => (
                            <SwiperSlide key={index}>
                                <div className="single-services mb-3">
                                    <div className="services-thumb">
                                        <a href={Room.src} className="gallery-link popup-image" tabIndex={-1}>
                                            <img src={Room.src} alt="room-image-01" className="img-fluid" />
                                        </a>
                                    </div>
                                    <div className="services-content p-4">
                                        <div className="day-book">
                                            <ul>
                                                <li>{Room.Price}/Night</li>
                                                <li style={{ cursor: 'pointer' }}>
                                                    <a onClick={() => handleClick(Room.id)}>Book Now</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <h5 className="card-title">{Room.name}</h5>
                                        <p className="card-text mt-3 room-pere">{Room.Description}</p>
                                        <div className="icon">
                                            <ul>
                                                <li><img src={singleServiceIcon01} alt="" className="img-fluid" /></li>
                                                <li><img src={singleServiceIcon02} alt="" className="img-fluid" /></li>
                                                <li><img src={singleServiceIcon03} alt="" className="img-fluid" /></li>
                                                <li><img src={singleServiceIcon04} alt="" className="img-fluid" /></li>
                                                <li><img src={singleServiceIcon05} alt="" className="img-fluid" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            {/* Resort */}
            <div className="resort my-5 mb-0">
                <div className="container-fluid position-relative">
                    <img src={element2} alt="" className='element element2 position-absolute ' />

                    <div className="row p-0 align-items-center">
                        <div className="col-lg-6  image-wrapper">
                            <img
                                src={resorts}
                                alt="Hotel Interior"
                                className="img-fluid  shadow-sm resort-img"
                            />
                        </div>

                        <div className="col-lg-4 ps-5 text-wrapper resort-content">
                            <div className="section-title about-title">
                                <span> Luxury Hotel & Resort</span>
                                <h2>Pearl Of The Adriatic. </h2>
                            </div>
                            <p>Vestibulum non ornare nunc. Maecenas a metus in est iaculis pretium. Aliquam ullamcorper nibh lacus, ac suscipit ipsum consequat porttitor.Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta ex, in imperdiet tortor feugiat at.</p>
                            <p>Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget.
                            </p>
                            <button className="btn discover-btn mt-3">DISCOVER MORE</button>

                        </div>

                    </div>

                </div>
            </div>
            {/* Best Prices */}
            <div className="prices my-5 py-5 position-relative">
                <img src={element1} className='element element1 position-absolute' alt="" />
                <img src={element2} className='element element2 position-absolute' alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="section-title price-title">
                                <span>Best Prices</span>
                                <h2>Extra Services</h2>
                            </div>
                            <p className='mt-4'>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
                            <p className='mt-4'>Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget.</p>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="price-box shadow p-4">
                                        <div className="price-head">
                                            <div className="price-head-text">
                                                <h2>Room cleaning</h2>
                                                <p>Perfect for early-stage startups</p>
                                            </div>
                                            <span>Monthly</span>
                                        </div>
                                        <h1>$39.99</h1>
                                        <p className='mt-4'><img src={checkIcon} alt="" /> &nbsp; Hotel quis justo at lorem</p>
                                        <p><img src={checkIcon} alt="" /> &nbsp; Fusce sodales, urna et tempus</p>
                                        <p><img src={checkIcon} alt="" /> &nbsp; Vestibulum blandit lorem quis</p>
                                        <button className="btn price-btn mt-2 w-100">GET STARTED <i className="ri-arrow-right-s-line"></i></button>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="price-box shadow p-4">
                                        <div className="price-head">
                                            <div className="price-head-text">
                                                <h2>Drinks included</h2>
                                                <p>Perfect for early-stage startups</p>
                                            </div>
                                            <span>Monthly</span>
                                        </div>
                                        <h1>$59.99</h1>
                                        <p className='mt-4'><img src={checkIcon} alt="" /> &nbsp; Hotel quis justo at lorem</p>
                                        <p><img src={checkIcon} alt="" /> &nbsp; Fusce sodales, urna et tempus</p>
                                        <p><img src={checkIcon} alt="" /> &nbsp; Vestibulum blandit lorem quis</p>
                                        <button className="btn price-btn mt-2 w-100">GET STARTED <i class="ri-arrow-right-s-line"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial */}
            <div className="testimonial-section py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <small className="text-uppercase text-warning fw-bold">Testimonial</small>
                        <h2 className="fw-bold display-5">What Our Clients Says</h2>
                        <p className="text-muted w-75 mx-auto">
                            Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra,
                            sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel.
                        </p>
                    </div>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        breakpoints={{
                            1399: { slidesPerView: 3 },
                            1199: { slidesPerView: 2 },
                            991: { slidesPerView: 1 },
                            0: { slidesPerView: 1 },
                        }}
                        className="test-swiper"
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="testimonial-card p-4 rounded bg-white shadow-sm">
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <img src={user1} alt="Jina Nilson" className="testimonial-img rounded-circle me-3" />
                                    <div className="testimonial-info">
                                        <h5 className="mb-0 fw-bold">Jina Nilson</h5>
                                        <small className="text-muted">Client</small>
                                    </div>
                                    {/* <i className="ri-double-quotes-l ms-auto fs-3 text-muted"></i> */}
                                    <img src={quote} alt="" />
                                </div>
                                <div className="stars text-warning mb-3">
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill"></i>
                                </div>
                                <p className="text-muted">
                                    Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur.
                                    Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam.
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Slide 2 */}
                        <SwiperSlide>
                            <div className="testimonial-card p-4 rounded bg-white shadow-sm">
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <img src={user2} alt="Brailty Dcosta" className="testimonial-img rounded-circle me-3" />
                                    <div className="testimonial-info">
                                        <h5 className="mb-0 fw-bold">Brailty Dcosta</h5>
                                        <small className="text-muted">Client</small>
                                    </div>
                                    {/* <i className="ri-double-quotes-l ms-auto fs-3 text-muted"></i> */}
                                    <img src={quote} alt="" />
                                </div>
                                <div className="stars text-warning mb-3">
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill"></i>
                                </div>
                                <p className="text-muted">
                                    Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur.
                                    Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam.
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 */}
                        <SwiperSlide>
                            <div className="testimonial-card p-4 rounded bg-white shadow-sm">
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <img src={user3} alt="Roboto Dose" className="testimonial-img rounded-circle me-3" />
                                    <div className="testimonial-info">
                                        <h5 className="mb-0 fw-bold">Roboto Dose</h5>
                                        <small className="text-muted">Client</small>
                                    </div>
                                    {/* <i className="ri-double-quotes-l ms-auto fs-3 text-muted"></i> */}
                                    <img src={quote} alt="" />
                                </div>
                                <div className="stars text-warning mb-3">
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill"></i>
                                </div>
                                <p className="text-muted">
                                    Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur.
                                    Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam.
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Slide 4 */}
                        <SwiperSlide>
                            <div className="testimonial-card p-4 rounded bg-white shadow-sm">
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <img src={user1} alt="Roberto Dose" className="testimonial-img rounded-circle me-3" />
                                    <div className="testimonial-info">
                                        <h5 className="mb-0 fw-bold">Roberto Dose</h5>
                                        <small className="text-muted">Client</small>
                                    </div>
                                    {/* <i className="ri-double-quotes-l ms-auto fs-3 text-muted"></i> */}
                                    <img src={quote} alt="" />
                                </div>
                                <div className="stars text-warning mb-3">
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill"></i>
                                </div>
                                <p className="text-muted">
                                    Phasellus aliquam quis lorem amet dapibus feugiat vitae purus vitae efficitur.
                                    Vestibulum sed elit id orci rhoncus ultricies. Morbi vitae semper consequat ipsum semper quam.
                                </p>
                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>
            </div>
            {/* book room */}
            <div className="py-5 bg-white">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-5 mb-4 d-flex flex-column">
                            <div className="section-title book-title">
                                <span>Make Appointment</span>
                                <h2>Book A Room</h2>
                            </div>

                            <form>
                                <div className="row mb-3">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label d-flex align-items-center">
                                            <i className="bi bi-calendar me-2 text-warning"></i>
                                            Check In Date
                                        </label>
                                        <input type="date" className="form-control p-3" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label d-flex align-items-center">
                                            <i className="bi bi-calendar2-check me-2 text-warning"></i>
                                            Check Out Date
                                        </label>
                                        <input type="date" className="form-control p-3" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label d-flex align-items-center">
                                            <i className="bi bi-people-fill me-2 text-warning"></i>
                                            Adults
                                        </label>
                                        <select className="form-select p-3">
                                            <option>Adults</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3+</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label d-flex align-items-center">
                                            <i className="bi bi-door-closed-fill me-2 text-warning"></i>
                                            Room
                                        </label>
                                        <select className="form-select p-3">
                                            <option>Room</option>
                                            <option>Single</option>
                                            <option>Double</option>
                                            <option>Suite</option>
                                        </select>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn text-white px-4 py-2 mt-2 w-100"
                                >
                                    BOOK TABLE NOW
                                </button>
                            </form>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-end">
                            <img
                                src={bookingImg}
                                alt="Room"
                                className="img-fluid booking-img"

                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner */}
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center banner-box">
                            <img src={playVideo} className='img-fluid' alt="" />
                            <h1>Take A Tour Of Luxuri</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* blog */}
            <div className="blog py-5 position-relative">
                <div className="container">
                    <img src={element1} alt="" className='element element1 position-absolute ' />
                    <div className="row">
                        <div className="section-title text-center blog-title d-flex flex-column align-items-center">
                            <span>Our Blog</span>
                            <h2>Latest Blog & News</h2>
                            <p style={{ maxWidth: "800px" }}>Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin dolor eget neque viverra, sed interdum metus interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel</p>
                        </div>
                        <div className="blog-wrapper mt-5">
                            <div className="row">
                                <div className='col-lg-4 col-md-6 mb-3'>
                                    <div className="blog-item">
                                        <div className="blog-image overflow-hidden">
                                            <img src={blog1} alt="blog-image" className='img-fluid' />
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-date">
                                                24th March 2022
                                            </div>
                                            <h4 className='mb-3'>Cras accumsan nulla nec lacus ultricies placerat.</h4>
                                            <p className='mb-4'>
                                                Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.
                                            </p>
                                            <button className="blog-btn">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 mb-3'>
                                    <div className="blog-item">
                                        <div className="blog-image overflow-hidden">
                                            <img src={blog2} alt="blog-image" className='img-fluid' />
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-date">
                                                24th March 2022
                                            </div>
                                            <h4 className='mb-3'>Dras accumsan nulla nec lacus ultricies placerat.</h4>
                                            <p className='mb-4'>
                                                Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.
                                            </p>
                                            <button className="blog-btn">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 mb-3'>
                                    <div className="blog-item">
                                        <div className="blog-image overflow-hidden">
                                            <img src={blog3} alt="blog-image" className='img-fluid' />
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-date">
                                                24th March 2022
                                            </div>
                                            <h4 className='mb-3'>Seas accumsan nulla nec lacus ultricies placerat.</h4>
                                            <p className='mb-4'>
                                                Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.
                                            </p>
                                            <button className="blog-btn">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* brands */}
            <div className='brand-container position-relative'>
                <div className="container">
                    <div className="row">
                        <Swiper
                            className='brand-swiper w-100'
                            spaceBetween={1}
                            slidesPerView={4}
                            loop={true}
                            autoplay={true}
                            breakpoints={{
                                1399: {
                                    slidesPerView: "4",
                                },
                                768: {
                                    slidesPerView: "3",
                                },
                                575: {
                                    slidesPerView: "2",
                                },
                                0: {
                                    slidesPerView: "1",
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="brand-image w-100">
                                    <img src={brand1} alt="brand-image" className='image-fluid' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-image w-100">
                                    <img src={brand2} alt="brand-image" className='image-fluid' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-image w-100">
                                    <img src={brand3} alt="brand-image" className='image-fluid' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-image w-100">
                                    <img src={brand4} alt="brand-image" className='image-fluid' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-image w-100">
                                    <img src={brand5} alt="brand-image" className='image-fluid' />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index