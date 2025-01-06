import Data from "@data/sections/hero-1.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const HeroOne = () => {
  return (
    <>
      {/* banner */}
      <section
        className="mil-banner"
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Video Background */}
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
          <source src="/videos/13.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="mil-gradient" />

        <div className="container">
          <div className="mil-banner-content">
            {/* Title */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1
                className="mil-title"
                dangerouslySetInnerHTML={{ __html: Data.title }}
                style={{
                  color: "black",
                
                }}
              />
              {/* Description */}
              <p
  className="mil-description"
  dangerouslySetInnerHTML={{ __html: Data.description }}
></p>

            </div>

            {/* Bottom Content */}
            <div className="mil-bottom-content">
              <div className="mil-description">
                <Link
                  href={Data.button1.link}
                  className="mil-button mil-arrow-place mil-btn-space"
                >
                  <span>{Data.button1.label}</span>
                  <ArrowIcon />
                </Link>
                <Link
                  href={Data.button2.link}
                  className="mil-link mil-muted mil-arrow-place"
                  style={{
                    color: "black",
                  }}
                >
                  <span>{Data.button2.label}</span>
                  <ArrowIcon />
                </Link>
              </div>

              {/* Scroll Button */}
              <div className="mil-scroll-button">
                <a
                  href="#about"
                  className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"
                  style={{ color: "black" }}
                >
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* banner end */}
    </>
  );
};

export default HeroOne;
