import React from "react";
import Data from "@data/sections/about.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const AboutSection = () => {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        overflow: "hidden",
        color: "#fff",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/videos/hero1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div
  className="container custom-margin"
  style={{
    position: "relative",
    zIndex: 1,
    marginBottom: "50px",
    paddingTop: "80px",
    paddingBottom: "120px",
  }}
>

        <div className="row justify-content-end align-items-center">
          <div className="col-lg-9">
            <div
              style={{
                padding: "30px", // Increased padding for height
              }}
            >
              <h2
                className="mil-up"
                dangerouslySetInnerHTML={{ __html: Data.title }}
                style={{
                  color: "white",
                }}
              />
              <div
                className="mil-text mil-up"
                dangerouslySetInnerHTML={{ __html: Data.description }}
                style={{
                  marginBottom: "40px",
                }}
              />
              <div
                className="mil-about-quote"
                style={{
                  marginTop: "80px", // Adjust spacing above the quote
                }}
              >
                {/* This will align subtitle on the left for large screens */}
                <h6
                  className="mil-quote mil-up"
                  dangerouslySetInnerHTML={{ __html: Data.subtitle }}
                  style={{
                    color: "white",
                    marginBottom: "40px", // Space between subtitle and button
                  }}
                />
                <div className="mil-button-container">
                  <Link
                    className="mil-button mil-arrow-place mil-btn-space"
                    href="/about-us"
                  >
                    <span>Read More</span>
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
