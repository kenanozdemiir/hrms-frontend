import React from 'react'
import Employer from "../pages/Employer"
import JobAdvertisement from "../pages/JobAdvertisement"
import JobPosition from '../pages/JobPosition'

export default function Content() {
    return (
        <div>
            <section className="section section-md bg-default text-center">
        <div className="container">
          <h3>Welcome to <span className="text-primary">Jobs</span>Factory</h3>
          <p className="text-spacing-05">A place where leading employers are already looking for your talent and experience.</p>
          <div className="row row-50 justify-content-center align-items-center text-left">
            <div className="col-md-10 col-lg-6">
              <figure className="figure-responsive block-5"><img src="images/home-2-540x413.jpg" alt="" width="540" height="413"/>
              </figure>
            </div>
            <div className="col-md-10 col-lg-6">
              <div className="row row-50 row-xl-70">
                <div className="col-sm-6">
                  
                  <article className="box-line box-line_sm">
                    <div className="box-line-inner">
                      <div className="box-line-icon icon mercury-icon-group"></div>
                      <h5 className="box-line-title">More than 3.8 million visitors every day</h5>
                    </div>
                  </article>
                </div>
                <div className="col-sm-6">
                  
                  <article className="box-line box-line_sm">
                    <div className="box-line-inner">
                      <div className="box-line-icon icon mercury-icon-partners"></div>
                      <h5 className="box-line-title">Leading recruiting website in the US and Europe</h5>
                    </div>
                  </article>
                </div>
                <div className="col-sm-6">
                  
                  <article className="box-line box-line_sm">
                    <div className="box-line-inner">
                      <div className="box-line-icon icon mercury-icon-chat"></div>
                      <h5 className="box-line-title">24\7 Dedicated and free Support</h5>
                    </div>
                  </article>
                </div>
                <div className="col-sm-6">
                  
                  <article className="box-line box-line_sm">
                    <div className="box-line-inner">
                      <div className="box-line-icon icon mercury-icon-target"></div>
                      <h5 className="box-line-title">Only relevant and verified vacancies </h5>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <JobPosition/>
      
      <JobAdvertisement/>
      <section className="section section-sm bg-default">
        <div className="container">
          <h3 className="text-center">New Candidates</h3>
          <div className="owl-carousel owl-carousel-profile" data-items="1" data-sm-items="2" data-md-items="3" data-lg-items="4" data-dots="true" data-nav="false" data-stage-padding="0" data-loop="false" data-fade="true" data-margin="30" data-mouse-drag="false">
           <a className="profile-classic" href="resume-page.html">
              <figure className="profile-classic-figure"><img className="profile-classic-image" src="images/candidates-grid-1-266x219.jpg" alt="" width="266" height="219"/>
              </figure>
              <div className="profile-classic-main">
                <h5 className="profile-classic-name">Amanda Cook</h5>
                <ul className="profile-classic-list">
                  <li><span className="icon mdi mdi-map-marker"></span><span>Los Angeles, California</span></li>
                  <li><span className="icon mdi mdi-account"></span><span>Junior Web Designer</span></li>
                </ul>
              </div></a>
           <a className="profile-classic" href="resume-page.html">
              <figure className="profile-classic-figure"><img className="profile-classic-image" src="images/candidates-grid-2-266x219.jpg" alt="" width="266" height="219"/>
              </figure>
              <div className="profile-classic-main">
                <h5 className="profile-classic-name">Kevin Parker</h5>
                <ul className="profile-classic-list">
                  <li><span className="icon mdi mdi-map-marker"></span><span>Seattle, Washington</span></li>
                  <li><span className="icon mdi mdi-account"></span><span>HR Manager</span></li>
                </ul>
              </div></a>
            <a className="profile-classic" href="resume-page.html">
              <figure className="profile-classic-figure"><img className="profile-classic-image" src="images/candidates-grid-3-266x219.jpg" alt="" width="266" height="219"/>
              </figure>
              <div className="profile-classic-main">
                <h5 className="profile-classic-name">Sandy Williams</h5>
                <ul className="profile-classic-list">
                  <li><span className="icon mdi mdi-map-marker"></span><span>Miami, Florida</span></li>
                  <li><span className="icon mdi mdi-account"></span><span>Sales Manager</span></li>
                </ul>
              </div></a>
            <a className="profile-classic" href="resume-page.html">
              <figure className="profile-classic-figure"><img className="profile-classic-image" src="images/candidates-grid-4-266x219.jpg" alt="" width="266" height="219"/>
              </figure>
              <div className="profile-classic-main">
                <h5 className="profile-classic-name">James Johnson</h5>
                <ul className="profile-classic-list">
                  <li><span className="icon mdi mdi-map-marker"></span><span>Boston, Massachusetts</span></li>
                  <li><span className="icon mdi mdi-account"></span><span>Programmer</span></li>
                </ul>
              </div></a>
          </div>
        </div>
      </section>
      
      <section className="parallax-container section-md bg-primary bg-overlay-1 text-center" data-parallax-img="images/bg-image-7.jpg">
        <div className="parallax-content">
          <div className="container">
            <h3>Success Stories </h3>
            
            <div className="owl-carousel" data-items="1" data-md-items="2" data-dots="true" data-nav="false" data-stage-padding="0" data-loop="false" data-margin="30" data-autoplay="true" data-mouse-drag="false">
              <blockquote className="quote-mary">
                <div className="quote-mary-main">
                  <svg className="quote-mary-mark" version="1.1" x="0px" y="0px" viewBox="0 0 36 28" width="38" height="28">
                    <path d="M13,0l-2.4,13.3H15V28H0V13.1L4,0H13z M34,0l-2.4,13.3H36V28H20.9V13.1L25,0H34z"></path>
                  </svg>
                  <div className="quote-mary-text">
                    <p>If I didn’t find JobsFactory I’m pretty sure I’d be nowhere, they helped me find a job in less than 2 days and the job is amazing. Thank you!</p>
                  </div>
                </div>
                <div className="quote-mary-meta"><img className="quote-mary-avatar" src="images/user-2-73x73.jpg" alt="" width="73" height="73"/>
                  <div className="quote-mary-info">
                    <cite className="quote-mary-cite heading-5">Karen Sanders</cite>
                    <p className="quote-mary-subtitle">Marketing Director</p>
                  </div>
                </div>
              </blockquote>
              <blockquote className="quote-mary">
                <div className="quote-mary-main">
                  <svg className="quote-mary-mark" version="1.1" x="0px" y="0px" viewBox="0 0 36 28" width="38" height="28">
                    <path d="M13,0l-2.4,13.3H15V28H0V13.1L4,0H13z M34,0l-2.4,13.3H36V28H20.9V13.1L25,0H34z"></path>
                  </svg>
                  <div className="quote-mary-text">
                    <p>Within a couple of days after posting a CV, I had possible employers contacting me. After several interviews, I decided to accept a position located nearby.</p>
                  </div>
                </div>
                <div className="quote-mary-meta"><img className="quote-mary-avatar" src="images/user-1-73x73.jpg" alt="" width="73" height="73"/>
                  <div className="quote-mary-info">
                    <cite className="quote-mary-cite heading-5">Walter Williams</cite>
                    <p className="quote-mary-subtitle">HR Managers</p>
                  </div>
                </div>
              </blockquote>
              <blockquote className="quote-mary">
                <div className="quote-mary-main">
                  <svg className="quote-mary-mark" version="1.1" x="0px" y="0px" viewBox="0 0 36 28" width="38" height="28">
                    <path d="M13,0l-2.4,13.3H15V28H0V13.1L4,0H13z M34,0l-2.4,13.3H36V28H20.9V13.1L25,0H34z"></path>
                  </svg>
                  <div className="quote-mary-text">
                    <p>I found a job as a Web Developer and applied through my iPhone with the JobsFactory website! It’s very easy to search for jobs and apply here!</p>
                  </div>
                </div>
                <div className="quote-mary-meta"><img className="quote-mary-avatar" src="images/user-4-73x73.jpg" alt="" width="73" height="73"/>
                  <div className="quote-mary-info">
                    <cite className="quote-mary-cite heading-5">Julia Smith</cite>
                    <p className="quote-mary-subtitle">Web Developer</p>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    
      <section className="section section-md bg-default">
        <div className="container">
          <h3 className="text-center">Pricing</h3>
          <div className="row row-50 justify-content-center">
            <div className="col-md-6 col-lg-4">
             
              <article className="pt pt-classic">
                <div className="pt-classic-header">
                  <div className="pt-classic-item">
                    <p className="pt-title">Startup</p><span className="badge">7 Days Free</span>
                  </div>
                  <p className="pt-price"><span className="pt-price-small pt-price-currency">$</span><span>59</span><span className="pt-price-small">00</span></p>
                </div>
                <div className="pt-classic-main">
                  <ul className="pt-classic-features">
                    <li>Post 8 Jobs</li>
                    <li>5 Highlighted Job Posts</li>
                    <li>Browse Your Job Listings</li>
                    <li>Access to Job Posting Stats</li>
                    <li>Email Support</li>
                    <li>Jobs Expire In 90 Days</li>
                  </ul><a className="button button-primary-outline" href="#">Get started</a>
                </div>
              </article>
            </div>
            <div className="col-md-6 col-lg-4">
            
              <article className="pt pt-classic">
                <div className="pt-classic-header">
                  <div className="pt-classic-item">
                    <p className="pt-title text-tertiary">Company</p>
                  </div>
                  <p className="pt-price"><span className="pt-price-small pt-price-currency">$</span><span>89</span><span className="pt-price-small">00</span></p>
                </div>
                <div className="pt-classic-main">
                  <ul className="pt-classic-features">
                    <li>Post 28 Jobs</li>
                    <li>10 Highlighted Job Posts</li>
                    <li>Edit Your Job Listings</li>
                    <li>Access to Job Posting Stats</li>
                    <li>Email and Phone Support</li>
                    <li>Jobs Expire In 180 Days</li>
                  </ul><a className="button button-primary-outline" href="#">Get started</a>
                </div>
              </article>
            </div>
            <div className="col-md-6 col-lg-4">
             
              <article className="pt pt-classic">
                <div className="pt-classic-header">
                  <div className="pt-classic-item">
                    <p className="pt-title text-secondary">Enterprise</p>
                  </div>
                  <p className="pt-price"><span className="pt-price-small pt-price-currency">$</span><span>199</span><span className="pt-price-small">00</span></p>
                </div>
                <div className="pt-classic-main">
                  <ul className="pt-classic-features">
                    <li>Post 35 Jobs</li>
                    <li>15 Highlighted Job Posts</li>
                    <li>Replace Your Job Listings</li>
                    <li>Access to Job Posting Stats</li>
                    <li>24/7 Support</li>
                    <li>Jobs Expire In 250 Days</li>
                  </ul><a className="button button-primary-outline" href="#">Get started</a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="parallax-container section-md bg-primary bg-overlay-1 text-center" data-parallax-img="images/parallax-2.jpg">
        <div className="parallax-content">
          <div className="container container-fullwidth">
            <h3>Companies We've Helped</h3>
            
            <div className="owl-carousel owl-carousel-stretch" data-autoplay="true" data-autoplay-timeout="4000" data-items="1" data-sm-items="2" data-md-items="3" data-lg-items="3" data-xl-items="5" data-xxl-items="6" data-dots="true" data-nav="false" data-stage-padding="2" data-loop="false" data-margin="30" data-mouse-drag="false"><a className="link-corporate" href="#"><img src="images/brand-1-inverse-183x44.png" alt="" width="183" height="44"/></a><a className="link-corporate" href="#"><img src="images/brand-2-inverse-118x82.png" alt="" width="118" height="82"/></a><a className="link-corporate" href="#"><img src="images/brand-3-inverse-137x39.png" alt="" width="137" height="39"/></a><a className="link-corporate" href="#"><img src="images/brand-4-inverse-133x77.png" alt="" width="133" height="77"/></a><a className="link-corporate" href="#"><img src="images/brand-5-inverse-153x30.png" alt="" width="153" height="30"/></a><a className="link-corporate" href="#"><img src="images/brand-6-inverse-90x68.png" alt="" width="90" height="68"/></a><a className="link-corporate" href="#"><img src="images/brand-7-inverse-112x43.png" alt="" width="112" height="43"/></a><a className="link-corporate" href="#"><img src="images/brand-8-inverse-126x22.png" alt="" width="126" height="22"/></a><a className="link-corporate" href="#"><img src="images/brand-9-inverse-158x33.png" alt="" width="158" height="33"/></a><a className="link-corporate" href="#"><img src="images/brand-10-inverse-137x37.png" alt="" width="137" height="37"/></a><a className="link-corporate" href="#"><img src="images/brand-11-inverse-84x59.png" alt="" width="84" height="59"/></a><a className="link-corporate" href="#"><img src="images/brand-12-inverse-116x51.png" alt="" width="116" height="51"/></a></div>
          </div>
        </div>
      </section>
   
      <section className="section section-md bg-default text-center">
        <div className="container">
          <h3>Just 3 Easy Steps to New Capabilities</h3>
          <ul className="list-linked">
            <li className="ll-item">
              <div className="icon ll-item-icon thin-icon-email-search">
                <svg className="ll-item-icon-inner" version="1.2" baseProfile="tiny" viewBox="-1 -1 102 102">
                  <circle cx="50" cy="50" r="50" fill="none" vectorEffect="non-scaling-stroke"></circle>
                </svg>
              </div>
              <div className="ll-item-main">
                <h5 className="ll-item-title"><a href="job-listing.html">Browse Jobs</a></h5>
                <p>Easy search by category</p>
              </div>
            </li>
            <li className="ll-item">
              <div className="icon ll-item-icon mercury-icon-target-2">
                <svg className="ll-item-icon-inner" version="1.2" baseProfile="tiny" viewBox="-1 -1 102 102">
                  <circle cx="50" cy="50" r="50" fill="none" vectorEffect="non-scaling-stroke"></circle>
                </svg>
              </div>
              <div className="ll-item-main">
                <h5 className="ll-item-title"><a href="job-details.html">Find Your Vacancy</a></h5>
                <p>Choose a suitable job</p>
              </div>
            </li>
            <li className="ll-item">
              <div className="icon ll-item-icon ll-item-icon-sm mercury-icon-e-mail-o">
                <svg className="ll-item-icon-inner" version="1.2" baseProfile="tiny" viewBox="-1 -1 102 102">
                  <circle cx="50" cy="50" r="50" fill="none" vectorEffect="non-scaling-stroke"></circle>
                </svg>
              </div>
              <div className="ll-item-main">
                <h5 className="ll-item-title"><a href="submit-resume.html">Submit Resume</a></h5>
                <p>Get a personal job offer</p>
              </div>
            </li>
            <li className="ll-item">
              <div className="icon ll-item-icon mercury-icon-touch">
                <svg className="ll-item-icon-inner" version="1.2" baseProfile="tiny" viewBox="-1 -1 102 102">
                  <circle cx="50" cy="50" r="50" fill="none" vectorEffect="non-scaling-stroke"></circle>
                </svg>
              </div>
              <div className="ll-item-main"><a className="button button-sm button-primary-outline" href="job-listing.html">Start Now</a></div>
            </li>
          </ul>
        </div>
      </section>
      
      <section className="section section-md bg-gray-100">
        <div className="container">
          <h3 className="text-center">Latest Posts</h3>
          <div className="row row-30 row-xl-70">
            <div className="col-12 col-lg-4">
             
              <article className="post-minimal"><a className="post-minimal-media" href="blog-post.html"><img className="post-minimal-image" src="images/blog-1-369x253.jpg" alt="" width="369" height="253"/></a>
                <div className="post-minimal-main">
                  <h5 className="post-minimal-title"><a href="blog-post.html">8 Surprising Predictions About the Future of Work</a></h5>
                  <p>There’s no denying that the landscape of work is changing. More and more companies are adopting flexible work policies</p>
                  <time className="post-minimal-time" dateTime="2019">November 23, 2019</time>
                </div>
              </article>
            </div>
            <div className="col-12 col-lg-4">
              
              <article className="post-minimal"><a className="post-minimal-media" href="blog-post.html"><img className="post-minimal-image" src="images/blog-2-369x253.jpg" alt="" width="369" height="253"/></a>
                <div className="post-minimal-main">
                  <h5 className="post-minimal-title"><a href="blog-post.html">Job Search Success: Finding a Business Development Job</a></h5>
                  <p>Business development professionals are at the heart of all sorts of organizations, from startups to multinational corporations.</p>
                  <time className="post-minimal-time" dateTime="2019">November 23, 2019</time>
                </div>
              </article>
            </div>
            <div className="col-12 col-lg-4">
            
              <article className="post-minimal"><a className="post-minimal-media" href="blog-post.html"><img className="post-minimal-image" src="images/blog-3-369x253.jpg" alt="" width="369" height="253"/></a>
                <div className="post-minimal-main">
                  <h5 className="post-minimal-title"><a href="blog-post.html">How to Impress Your Future Employer</a></h5>
                  <p>You’re committed to your job search, and you use every ounce of your free time you have to comb through listings, write cover</p>
                  <time className="post-minimal-time" dateTime="2019">November 23, 2019</time>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section section-md bg-default text-center">
        <div className="container">
          <h3>Get JobsFactory App for Your Mobile</h3>
          <p className="offset-top-20px"><span style={{maxWidth:"670px"}}>Searching for jobs has never been that easy. Now you can find job matched your career expectation, apply for jobs and receive feedback right on your mobile. Start your job search now!</span></p>
          <div className="group"><a className="button button-primary button-fixed-size" href="#"><img src="images/google-play-download-138x35.png" alt="" width="138" height="35"/></a><a className="button button-primary button-fixed-size" href="#"><img src="images/appstore.svg" alt=""/></a></div>
        </div>
      </section>
        </div>
    )
}
