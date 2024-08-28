import React from "react";
import Layouts from "@layouts/Layouts";
import Data from "@data/sections/about.json";

const AboutUsPage = () => {
  return (
    <Layouts>
      <section id="about-us" className="mil-p-120-30">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2
                className="mil-up mil-mb-60"
                dangerouslySetInnerHTML={{ __html: Data.title }}
              />
              <div
                className="mil-text mil-up mil-mb-30"
                dangerouslySetInnerHTML={{ __html: Data.description }}
              />
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
      </section>
    </Layouts>
  );
};

export default AboutUsPage;
