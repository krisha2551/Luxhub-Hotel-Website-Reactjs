import React from 'react'
import { Link } from 'react-router-dom'

import singleServiceIcon01 from './../../assets/option-icon-1.png'
import singleServiceIcon02 from './../../assets/option-icon-3.png'
import singleServiceIcon03 from './../../assets/option-icon-4.png'
import singleServiceIcon04 from './../../assets/option-icon-5.png'
import singleServiceIcon05 from './../../assets/option-icon-6.png'
import resorts from './../../assets/feature.png'
import element2 from './../../assets/bg-2.png';
import bookingImg from './../../assets/Bookings.png'
import playVideo from './../../assets/play-btn.png'

import { useNavigate } from 'react-router-dom'
import Nav from '../Nav/Nav'

// Data
import Data from './../../Data.json'

const Rooms = () => {

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/RoomsDetails/${id}`);
    };

    return (
        <>
            <Nav />
            {/* Page Section */}
            <div className="section-banner d-flex align-items-center text-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-wrap text-center">
                                <div className="section-title">
                                    <h2>Our Rooms</h2>
                                </div>
                                <div className="section-wrap d-flex align-items-center justify-content-center">
                                    <ul className="d-flex align-items-center text-center gap-3 m-0 p-0 position-relative">
                                        <li><Link to='/'>Home</Link> &nbsp; / &nbsp; <span className='fw-bold'>Our Rooms</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Rooms */}
            <div className="container py-5">
                <div className="row">
                    {/* Room Cards */}
                    {Data.Rooms.map((Room, index) => (
                        <div className="col-md-6 col-lg-4 mt-4" key={index}>
                            <div className="single-services h-100 border rounded overflow-hidden shadow-sm">
                                <div className="services-thumb">
                                    <a href={Room.src} className="gallery-link popup-image" tabIndex={-1}>
                                        <img src={Room.src} alt="room" className="img-fluid w-100" />
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
                        </div>
                    ))}
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
        </>
    )
}

export default Rooms;