import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About</span>
                      <h2 className="colorlib-heading">Who I am</h2>
                      <h3>
                        I'm a Front-End Web Developer based in Katy, Texas.
                      </h3>
                      <p>
                        I love solving puzzles and turning designs into elegant,
                        user friendly websites - all the better if a project
                        requires picking up new skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-9 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do</span>
                <h2 className="colorlib-heading">
                  Here are some of the things I do
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="fas fa-project-diagram" />
                  </span>
                  <div className="desc">
                    <h3>Project Management</h3>
                    <p>
                      Outside of writing code, I also manage and coordinate web
                      projects, all the way from inception to delivery.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-8">
                  <span className="icon">
                    <i className="fas fa-laptop-code" />
                  </span>
                  <div className="desc">
                    <h3>Web Development</h3>
                    <p>
                      I have experience building websites using a variety of
                      technologies, such as JavaScript, HTML, CSS, PHP,
                      Bootstrap, git, Foundation, dotCMS, Drupal, and WordPress.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="fas fa-pencil-ruler" />
                  </span>
                  <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>
                      Though translating designs into functional websites is my
                      forte, I can also use tools like Adobe Photoshop to do
                      design work.
                    </p>
                  </div>
                </div>
              </div>
              {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
