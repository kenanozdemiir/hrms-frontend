import React, { useEffect, useState } from "react";
import EmployerService from "../services/employerService";

export default function Employer() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((employer) => setEmployers(employer.data));
  });

  return (
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
                    {employers.map(employer => (
                  
                  <tr key = {employer.id}>
                    <td className="table-job-offers-date"><span>1 hour ago</span></td>
                    <td className="table-job-offers-main">
                      
                      <article className="company-light">
                        <figure className="company-light-figure"><img className="company-light-image" src="images/company-1-45x45.png" alt="" width="45" height="45"/>
                        </figure>
                        <div className="company-light-main">
                          <h5 className="company-light-title"><a href="job-details.html">Senior UX Designer</a></h5>
                          <p className="text-color-default">{employer.companyName}</p>
                        </div>
                      </article>
                    </td>
                    <td className="table-job-offers-meta">
                      <div className="object-inline"><span className="icon icon-sm text-primary mdi mdi-cash"></span><span>$25–$35 \ hour</span></div>
                    </td>
                    <td className="table-job-offers-meta">
                      <div className="object-inline"><span className="icon icon-1 text-primary mdi mdi-map-marker"></span><span>{employer.mail}</span></div>
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
  );
}