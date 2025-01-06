import React from "react";
import Layouts from "@layouts/Layouts";
import Data from "@data/sections/about.json";

const AboutUsPage = () => {
  return (
    <Layouts>
      <section id="about-us" style={{ position: "relative", overflow: "hidden", padding: "120px 30px" }}>
        {/* Video Background */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", zIndex: 0 }}>
          <video autoPlay muted loop style={{ width: "100%", height: "100%", objectFit: "cover" }}>
            <source src="/videos/12.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content on top of the video */}
        <div style={{ position: "relative", zIndex: 1 }} className="container">
          <div className="row justify-content-center align-items-center text-center">
            {/* Content */}
            <div className="col-lg-8 col-xl-6">
              <div style={{ marginBottom: "90px" }}>
                <h3
                  style={{ marginBottom: "30px" }}
                  dangerouslySetInnerHTML={{ __html: Data.ourStoryTitle }}
                />
                <div
                  className="mil-text"
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
