import React from 'react'
import { Link } from 'react-router-dom'

import explore1 from '../../assets/explore-icon-1.png';
import explore2 from '../../assets/explore-icon-2.png';
import explore3 from '../../assets/explore-icon-3.png';
import explore4 from '../../assets/explore-icon-4.png';
import explore5 from '../../assets/explore-icon-5.png';
import explore6 from '../../assets/explore-icon-6.png';
import element1 from './../../assets/bg-1.png';
import element2 from './../../assets/bg-2.png';
import resorts from './../../assets/feature.png'
import bookingImg from './../../assets/Bookings.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import user1 from './../../assets/test-1.png'
import user2 from './../../assets/test-2.png'
import user3 from './../../assets/test-3.png'
import quote from './../../assets/Quote.png'

const Facilities = () => {
    return (
        <>
            {/* Page Section */}
            <div className="section-banner d-flex align-items-center text-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-wrap text-center">
                                <div className="section-title">
                                    <h2>Our Service</h2>
                                </div>
                                <div className="section-wrap d-flex align-items-center justify-content-center">
                                    <ul className="d-flex align-items-center text-center gap-3 m-0 p-0 position-relative">
                                        <li><Link to='/'>Home</Link> &nbsp; / &nbsp; <span className='fw-bold'>Our Service</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Explore */}
            <div className="explore facilities-explore my-5 mt-0 mb-0 py-5 position-relative">
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
                            1399: {slidesPerView:3},
                            1199: {slidesPerView:2},
                            991: {slidesPerView:1},
                            0: {slidesPerView:1},
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
        </>
    )
}

export default Facilities