import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">Experience</span>
                <h2 className="colorlib-heading animate-box">
                  Work & Education
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-8">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Web Developer II <span>2020-present</span>
                        </h2>
                        <h3>UTHealth Science Center at Houston</h3>
                        <p>
                          My primary responsibility is collaborating with
                          UTHealth Creative Services, school departments, and
                          outside vendors in order to translate wireframes and
                          designs into modern web experiences. This year, I had
                          the privilege of developing the website for UTHealth's
                          high profile fundraising campaign,{" "}
                          <em>Many Faces. One Mission.</em> - the largest
                          philanthropic effort in UTHealth's history.
                        </p>
                        <ul>
                          <li>
                            dotCMS, JavaScript, Velocity, HTML, CSS, Foundation
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-8">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Front-End Web Developer <span>2018-2020</span>
                        </h2>
                        <h3>Baylor University</h3>
                        <p>
                          At Baylor, I was responsible for creating elegant
                          websites while serving as a professional consultant to
                          our campus partners. I enjoyed the opportunity to
                          develop the animated svg graphs used for Baylor's
                          comprehensive fundraising campaign website, Give
                          Light. Additionally, I assisted in scoping, planning,
                          and executing digital projects in an Agile environment
                          - most notably the migration from Baylor's homegrown
                          CMS to Drupal 8.
                        </p>
                        <ul>
                          <li>Drupal, JavaScript, PHP, Twig, HTML, CSS, Git</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-8">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Web Developer Internship <span>2017</span>
                        </h2>
                        <h3>Levy Marketing Group</h3>
                        <p>
                          Internship in brand marketing, website development,
                          and internet marketing with a focus on elegant design
                          and user-centric websites.
                        </p>
                        <ul>
                          <li>
                            Web page development – coding in HTML, CSS, PHP
                          </li>
                          <li>
                            Utilized the Wordpress CMS to create modern,
                            responsive web pages
                          </li>
                          <li>
                            Experience with E-Commerce platforms, shopping cart
                            and payment gateways
                          </li>
                          <li>
                            Exposure to Google Analytics, SEO, Campaign Tracking
                          </li>
                          <li>
                            Gained familiarity with hosting environments, DNS,
                            SSL certificates
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-8">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          A.A.S. in Web Application Development{" "}
                          <span>2016-2018</span>
                        </h2>
                        <h3>San Jacinto College</h3>
                        <p>
                          The curriculum at San Jacinto College enabled me to
                          create web pages and applications using HTML, CSS,
                          JavaScript, PHP and MySQL. I was also able to refine
                          my skills with graphic design using programs such as
                          Adobe Photoshop and Illustrator. The courses, along
                          with my professors, helped me to establish a firm
                          foundation in Web Development from which I have been
                          able to build upon.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
