import Data from "@data/sections/hero-1.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";

const HeroOne = () => {
  return (
    <>
      {/* banner */}
      <section
        className="mil-banner "
        style={{
          backgroundImage: `url('/img/photo/hero3.jpg')`, // Use the root-relative path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div className="mil-gradient" />

        <div className="container">
          <div className="mil-banner-content mil-up">
            <h1
              className="mil-muted mil-mb-60"
              dangerouslySetInnerHTML={{ __html: Data.title }}
            />

            <div className="row">
              <div className="col-md-7 col-lg-5">
                <p className="mil-light-soft mil-mb-60">{Data.description}</p>
              </div>
            </div>

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
            >
              <span>{Data.button2.label}</span>
              <ArrowIcon />
            </Link>

            <div className="mil-circle-text">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 300 300"
                enableBackground="new 0 0 300 300"
                xmlSpace="preserve"
                className="mil-ct-svg mil-rotate"
                data-value="360"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                  />
                </defs>
                <circle cx="150" cy="100" r="75" fill="none" />
                <g>
                  <use xlinkHref="#circlePath" fill="none" />
                  <text style={{ letterSpacing: "6.5px" }}>
                    {/* circle text */}
                    <textPath xlinkHref="#circlePath">
                      Scroll down - Scroll down -{" "}
                    </textPath>
                  </text>
                </g>
              </svg>
              <a
                href="#about"
                className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"
              >
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* banner end */}
    </>
  );
};

export default HeroOne;
