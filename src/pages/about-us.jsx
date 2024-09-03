import React, { useEffect, useRef } from "react";
import Layouts from "@layouts/Layouts";
import Data from "@data/sections/about.json";
import LinesIcon from "@layouts/svg-icons/Lines";

const AboutUsPage = () => {
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  useEffect(() => {
    const leftContent = leftContentRef.current;
    const rightContent = rightContentRef.current;

    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries) => {
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
    <Layouts>
      <section id="about-us" className="mil-p-120-30">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            {/* Image on the left side */}
            <div ref={leftContentRef} className="col-lg-5 animated">
              <div className="mil-about-photo mil-mb-90">
                <div className="mil-lines-place">
                  <LinesIcon />
                </div>
                <div className="mil-up mil-img-frame">
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

            {/* Content on the right side */}
            <div ref={rightContentRef} className="col-lg-6 col-xl-5 animated">
              <div className="mil-mb-90">
                <h3
                  className="mil-up mil-mb-30"
                  dangerouslySetInnerHTML={{ __html: Data.ourStoryTitle }}
                />
                <div
                  className="mil-text mil-up"
                  dangerouslySetInnerHTML={{ __html: Data.ourStoryDescription }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default AboutUsPage;
