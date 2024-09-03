import React from "react";
import Layouts from "@layouts/Layouts";
import Data from "@data/sections/f&q.json";

const FAQsPage = () => {
  return (
    <Layouts>
      <section id="faqs" className="mil-p-120-30">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2
                className="mil-up mil-mb-60"
                dangerouslySetInnerHTML={{ __html: Data.title }}
              />
              <div
                className="mil-text mil-up mil-mb-30"
                dangerouslySetInnerHTML={{ __html: Data.content }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default FAQsPage;
