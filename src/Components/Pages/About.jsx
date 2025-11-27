import React from 'react'
import { Link } from 'react-router-dom'

import hotelImg from '../../assets/about-1.png';
import bedroomImg from '../../assets/about-2.png';
import skillimg from './../../assets/skills-img.png'
import element1 from './../../assets/bg-1.png';
import element2 from './../../assets/bg-2.png';
import resorts from './../../assets/feature.png'
import blog1 from './../../assets/blog-1.jpg'
import blog2 from './../../assets/blog-2.jpg'
import blog3 from './../../assets/blog-3.jpg'

const About = () => {
  return (
    <>
      {/* Page Section */}
      <div className="section-banner d-flex align-items-center text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12">
              <div className="section-wrap text-center">
                <div className="section-title">
                  <h2>About Us</h2>
                </div>
                <div className="section-wrap d-flex align-items-center justify-content-center">
                  <ul className="d-flex align-items-center text-center gap-3 m-0 p-0 position-relative">
                    <li><Link to='/'>Home</Link> &nbsp; / &nbsp; <span className='fw-bold'>About Us</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      {/* progerss */}
      <div className="hotel-section ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 left-panel text-white p-5">
              <div className="section-title about-page-title">
                <span>Rio We Use</span>
                <h2>
                  We Offer Wide <br /> Selection of Hotel
                </h2>
              </div>

              <p className="text-light mb-4">
                Vestibulum non ornare nunc. Maecenas a metus in est iaculis
                pretium. Aliquam ullamcorper nibh lacus, ac suscipit ipsum
                consequat porttitor.
              </p>

              <div className="progress-wrapper">
                <div className="mb-4  progress-main">
                  <h6 className="fw-semibold">Quality Production</h6>
                  <div className="progress custom-progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                    >
                      <p className="first">80%</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4  progress-main">
                  <h6 className="fw-semibold">Maintenance Services</h6>
                  <div className="progress custom-progress">
                    <div
                      className="progress-bar d-flex justify-content-between align-center "
                      role="progressbar"
                      style={{ width: "90%" }}
                    >
                      <p className="second">90%</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4 progress-main">
                  <h6 className="fw-semibold">Product Management</h6>
                  <div className="progress custom-progress">
                    <div
                      className="progress-bar "
                      role="progressbar"
                      style={{ width: "70%" }}
                    >
                      <p className="third"> 70%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-md-6 p-0">
              <img
                src={skillimg}
                alt="Hotel Interior"
                className="img-fluid h-100 w-100 object-fit-cover"
              />
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
      {/* Newsletter */}
      <div className="container-fluid" style={{ backgroundColor: "#f7f5f1", padding: "120px" }}>
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-xl-8 col-lg-9">
            <div className="section-title mb-4">
              <span>News letters</span>
              <h2 className=" my-2">Subscribe to our Newsletter</h2>
              <p className="text-muted">
                With the subscription, enjoy your favourite hotels without
                having to think about it.
              </p>
            </div>

            <form className="d-flex justify-content-center newsletter-wrap">
              <div className="input-group  w-75">
                <input
                  type="email"
                  className="form-control newsletter-input"
                  placeholder="Enter your email address"
                />
                <button className="btn btn-warning text-white " type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;