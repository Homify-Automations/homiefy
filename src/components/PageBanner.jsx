import Head from 'next/head';
import Link from "next/link";
import { useRouter } from 'next/router';
import AppData from "@data/app.json";

import ArrowIcon from "@layouts/svg-icons/Arrow";
import Pentagon from "@layouts/pentagon/Index";

const PageBanner = ({ 
  pageTitle, 
  breadTitle, 
  anchorLabel, 
  anchorLink = 0, 
  paddingBottom, 
  align, 
  headingSize = 1, 
  backgroundVideo // Video path from public directory
}) => {
  const { asPath } = useRouter();
  let clearBreadTitle;

  if (breadTitle != undefined) {
    clearBreadTitle = breadTitle;
  } else {
    const regex = /(<([^>]+)>)/gi;
    clearBreadTitle = pageTitle.replace(regex, "");
  }

  const headTitle = `${AppData.settings.siteName} - ${clearBreadTitle}`;

  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>

      {/* banner */}
      <div
        className={paddingBottom ? "mil-inner-banner mil-p-0-120" : "mil-inner-banner"}
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Video */}
        {backgroundVideo && (
          <video
            className="mil-banner-video"
            autoPlay
            muted
            loop
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
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Banner Content */}
        <div
          className={
            align == "center"
              ? "mil-banner-content mil-center mil-up"
              : "mil-banner-content mil-up"
          }
        >
         
          <div className="container">
            <ul
              className={
                align == "center"
                  ? "mil-breadcrumbs mil-center mil-mb-60"
                  : "mil-breadcrumbs mil-mb-60"
              }
            >
              <li>
                <Link href="/">Homepage</Link>
              </li>
              {asPath.indexOf('/blog/') != -1 && (
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
              )}
              {asPath.indexOf('/projects/') != -1 && (
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
              )}
              {asPath.indexOf('/services/') != -1 && (
                <li>
                  <Link href="/services">Services</Link>
                </li>
              )}
              <li>
                <a dangerouslySetInnerHTML={{ __html: clearBreadTitle }} />
              </li>
            </ul>
            {headingSize == 1 && (
              <h1
                className="mil-mb-60"
                dangerouslySetInnerHTML={{ __html: pageTitle }}
              />
            )}
            {headingSize == 2 && (
              <h2
                className={anchorLink != 0 ? "mil-mb-60" : ""}
                dangerouslySetInnerHTML={{ __html: pageTitle }}
              />
            )}
            {anchorLink != 0 && (
              <a
                href={anchorLink}
                className="mil-link mil-dark mil-arrow-place mil-down-arrow"
              >
                <span>{anchorLabel}</span>
                <ArrowIcon />
              </a>
            )}
          </div>
        </div>
      </div>
      {/* banner end */}
    </>
  );
};
export default PageBanner;

