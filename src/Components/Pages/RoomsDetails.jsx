import React from "react";

import RoomImage01 from './../../assets/single-room-img01.png'
import RoomImage02 from './../../assets/single-room-img02.png'
import RoomImage03 from './../../assets/single-room-img03.png'
import stars from './../../assets/stars.png'
import Nav from './../../Components/Nav/Nav'
import { Link, useParams } from "react-router-dom";

import data from './../../Data.json'


function RoomsDetails() {
    const { id } = useParams();
    const FoundRoom = data.Rooms.find((item) => item.id == id);
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
                                    <h2>Rooms Details</h2>
                                </div>
                                <div className="section-wrap d-flex align-items-center justify-content-center">
                                    <ul className="d-flex align-items-center text-center gap-3 m-0 p-0 position-relative">
                                        <li><Link to='/'>Home</Link> &nbsp; / &nbsp; <span className='fw-bold'>Our Details</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5 my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-4 order-2">
                            <aside className='sidebar services-sidebar'>
                                <div className="sidebar-widget categories">
                                    <h2 className='widget-title'>  Book A Room  </h2>
                                    <div className="booking">
                                        <div className="contact-bg">
                                            <form className='contact-form mt-3'>
                                                <div className="row">
                                                    <div className="col-lg-12 mb-3">
                                                        <div className="contact-field position-relative mb-2">
                                                            <label>
                                                                <i className=""></i>
                                                                Check In Date
                                                            </label>
                                                            <input type="date" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mb-3">
                                                        <div className="contact-field position-relative mb-2">
                                                            <label>
                                                                <i className=""></i>
                                                                Check Out Date
                                                            </label>
                                                            <input type="date" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mb-3">
                                                        <div className="contact-field position-relative mb-2">
                                                            <label>
                                                                <i className=""></i>
                                                                Adults
                                                            </label>
                                                            <select>
                                                                <option>Adults</option>
                                                                <option value={1}>1</option>
                                                                <option value={2}>2</option>
                                                                <option value={3}>3</option>
                                                                <option value={4}>4</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 mb-3">
                                                        <div className="contact-field position-relative mb-2">
                                                            <label>
                                                                <i className=""></i>
                                                                Room
                                                            </label>
                                                            <select>
                                                                <option>Room</option>
                                                                <option value={1}>1</option>
                                                                <option value={2}>2</option>
                                                                <option value={3}>3</option>
                                                                <option value={4}>4</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 mb-3">
                                                        <button className='btn ss-btn'>
                                                            <span>Book Table Now</span>
                                                        </button>
                                                    </div>

                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 order-1">
                            <div className="position-relative">
                                <div className="position-relative">
                                    <div className="container">
                                        <div className="row">
                                            <div className="position-relative col-xl-6 col-lg-12 col-md-12">
                                                <img
                                                    src={FoundRoom?.src}
                                                    alt={FoundRoom?.name}
                                                    className="img-fluid main-room"
                                                />
                                            </div>
                                            <div className=" col-xl-6 col-lg-12 col-md-12">
                                                <img src={RoomImage02} alt="" className='img-fluid mb-2 hide-element' />
                                                <img src={RoomImage03} alt="" className='img-fluid mt-2 hide-element' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="position-relative mt-5 p-2">
                                <div className="row align-items-center mb-5">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="">
                                            <h2>{FoundRoom.name}</h2>
                                            <span>{FoundRoom.Price}/Night</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex justify-content-end" >
                                        <img src={stars} alt="" className='raiting-image' />
                                    </div>
                                </div>
                                <p>{FoundRoom.Description}</p>

                                <p>Interdum et malesu they adamale fames ac anteipsu pimsine faucibus curabitur arcu site feugiat in tortor in, volutpat sollicitudin libero. Hotel non lorem acer suscipit bibendum vulla facilisi nedeuter nunc volutpa mollis sapien velet conseyer turpeutionyer masin libero sempe mollis.</p>
                                <h3>Room Feature.</h3>
                                <ul className='room-features d-flex align-items-center'>
                                    <li>
                                        <i className=""></i>
                                        TV
                                    </li>
                                    <li>
                                        <i className=""></i>
                                        Free Wifi
                                    </li>
                                    <li>
                                        <i className=""></i>
                                        Air Condition

                                    </li>
                                    <li>
                                        <i className=""></i>
                                        Heater

                                    </li>
                                    <li>
                                        <i className=""></i>
                                        Phone

                                    </li>
                                    <li>
                                        <i className=""></i>
                                        Laundry

                                    </li>
                                    <li>
                                        <i className=""></i>
                                        Adults: 2

                                    </li>
                                    <li>
                                        <i className=""></i>
                                        Size: 24m²
                                    </li>
                                    <li>
                                        <i className=""></i>  Bed Type: One bed

                                    </li>
                                </ul>
                                <a href="#" className='btn'>
                                    Book now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RoomsDetails;