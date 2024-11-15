import Image from "next/image";
import React from "react";

const About5 = ({ pt }) => {
  return (
    <div className={`ltn__about-us-area ${pt ? pt : "pt-120"} pb-120`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="about-us-img-wrap about-img-left">
              <Image
                src="/img/logo.png"
                alt="About Us Image"
                width={570}
                height={531}
              />
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="about-us-info-wrap">
              <div className="section-title-area ltn__section-title-2">
                <h6 className="section-subtitle ltn__secondary-color">
                  Know More About Co-Nation
                </h6>
                <h1 className="section-title">
                  Co <br className="d-none d-md-block" /> Nation
                </h1>
                <p>
                comes from the "Coffee Nation" which means we want to introduce Indonesian coffee to around the world. 
                </p>
              </div>
              <p>
                sellers who aspire to be good, do good, and spread goodness. We
                democratic, self-sustaining, two-sided marketplace which thrives
                on trust and is built on community and quality content.
              </p>
              <div className="about-author-info d-flex">
                <div className="author-name-designation  align-self-center mr-30">
                  <h4 className="mb-0">Conation Team</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About5;
