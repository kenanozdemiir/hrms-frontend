import React, { useEffect, useState } from "react";
import JobPositionService from "../services/jobPositionService";

export default function JobPosition() {
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((jobPosition) => setJobPositions(jobPosition.data));
  });

  return (
    <div>
      <section className="section section-md bg-default text-center">
        <div className="container container-fullwidth">
          <h3>İş pozisyonları</h3>
          
            <div
             
              className="owl-carousel owl-carousel-stretch"
              data-items="1"
              data-sm-items="2"
              data-md-items="3"
              data-lg-items="3"
              data-xl-items="5"
              data-xxl-items="6"
              data-dots="true"
              data-nav="false"
              data-stage-padding="1"
              data-loop="false"
              data-margin="26"
              data-md-margin="20"
              data-lg-margin="26"
              data-autoplay="false"
              data-autoplay-timeout="3500"
              data-mouse-drag="false"
            >
              
              <a className="box-creative" href="job-listing-full.html">
              {jobPositions.map((jobPosition) => (
                <div key={jobPosition.id} className="box-creative-inner">
                  <div className="icon box-creative-icon mercury-icon-calc"></div>
                  <p className="box-creative-title">{jobPosition.position}</p>
                  <p>2590 open positions</p>
                </div>))}
                
              </a>
            </div>
          
        </div>
      </section>
    </div>
  );
}
