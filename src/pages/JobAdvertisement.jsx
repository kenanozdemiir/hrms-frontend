import React, { useEffect, useState } from "react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function Employer() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  })
  
  return(
      <div>
<section className="section section-md bg-gray-100">
        <div className="container">
          <div className="row row-40">
            <div className="col-12 text-center">
              <h3>Recent Jobs</h3>
            </div>
            <div className="col-12">
              <div className="table-job-offers-outer">
                <table className="table-job-offers table-responsive">
                  <tbody>
                      {jobAdvertisements.slice(0,2).map(jobAdvertisement =>(
                      

                      

                     
                  
                  <tr key = {jobAdvertisement.id}>
                    <td className="table-job-offers-date"><span>{jobAdvertisement.endDate}</span></td>
                    <td className="table-job-offers-main">
                      
                      <article className="company-light">
                        <figure className="company-light-figure"><img className="company-light-image" src="images/company-1-45x45.png" alt="" width="45" height="45"/>
                        </figure>
                        <div className="company-light-main">
                          <h5 className="company-light-title"><a href="job-details.html">{jobAdvertisement.jobPositionPosition}</a></h5>
                          <p className="text-color-default">{jobAdvertisement.employerCompanyName}</p>
                        </div>
                      </article>
                    </td>
                    <td className="table-job-offers-meta">
                      <div className="object-inline"><span className="icon icon-sm text-primary mdi mdi-cash"></span><span>{jobAdvertisement.minSalary} \ {jobAdvertisement.maxSalary}</span></div>
                    </td>
                    <td className="table-job-offers-meta">
                      <div className="object-inline"><span className="icon icon-1 text-primary mdi mdi-map-marker"></span><span>{jobAdvertisement.quato}</span></div>
                    </td>
                    <td className="table-job-offers-badge"><span className="badge">Full Time</span></td>
                
                
                  </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 text-center"><a className="button button-lg button-primary-outline" href="job-listing-full.html">Show More Jobs</a></div>
          </div>
        </div>
      </section>
      </div>
  )
}