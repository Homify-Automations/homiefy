import React, { useEffect, useRef } from "react";
import Data from "@data/sections/about.json";
import LinesIcon from "@layouts/svg-icons/Lines";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const AboutSection = () => {
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  useEffect(() => {
    const leftContent = leftContentRef.current;
    const rightContent = rightContentRef.current;

    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === leftContent) {
            leftContent.classList.add("slide-in-left");
            leftContent.classList.remove("slide-out-left");
          } else if (entry.target === rightContent) {
            rightContent.classList.add("slide-in-right");
            rightContent.classList.remove("slide-out-right");
          }
        } else {
          if (entry.target === leftContent) {
            leftContent.classList.remove("slide-in-left");
            leftContent.classList.add("slide-out-left");
          } else if (entry.target === rightContent) {
            rightContent.classList.remove("slide-in-right");
            rightContent.classList.add("slide-out-right");
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (leftContent) observer.observe(leftContent);
    if (rightContent) observer.observe(rightContent);

    return () => {
      if (leftContent) observer.unobserve(leftContent);
      if (rightContent) observer.unobserve(rightContent);
    };
  }, []);

  return (
    <section id="about">
      <div className="container mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          {/* Left content with animation */}
          <div ref={leftContentRef} className="col-lg-6 col-xl-5 animated">
            <div className="mil-mb-90">
              <h2
                className="mil-up mil-mb-60"
                dangerouslySetInnerHTML={{ __html: Data.title }}
              />
              <div
                className="mil-text mil-up mil-mb-30"
                dangerouslySetInnerHTML={{ __html: Data.description }}
              />
              <div className="mil-about-quote">
                <div>
                  <Link href="/about-us" className=" ">
                    <span>Read More</span>
                    <ArrowIcon />
                  </Link>
                </div>

                <h6
                  className="mil-quote mil-up"
                  dangerouslySetInnerHTML={{ __html: Data.subtitle }}
                />
              </div>
            </div>
          </div>

          {/* Right content with animation */}
          <div ref={rightContentRef} className="col-lg-5 animated">
            <div className="mil-about-photo mil-mb-90">
              <div className="mil-lines-place">
                <LinesIcon />
              </div>
              <div
                className="mil-up mil-img-frame"
                style={{ paddingBottom: "160%" }}
              >
                <img
                  src={Data.image.url}
                  alt={Data.image.alt}
                  className="mil-scale"
                  data-value-1="1"
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
