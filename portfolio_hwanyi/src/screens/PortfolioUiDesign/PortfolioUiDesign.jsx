import React from "react";
import { Home } from "../../components/Home";
import { Menu } from "../../components/Menu";
import { SendingEmailButton } from "../../components/SendingEmailButton";
import { StaticNavbar } from "../../components/StaticNavbar";
import { VewAnimationBtn } from "../../components/VewAnimationBtn";
import "./style.css";

export const PortfolioUiDesign = () => {
  return (
    <div className="portfolio-UI-design">
      <div className="div-2">
        <footer className="footer">
          <div className="frame-5">
            <div className="text-wrapper-5">Hwanyi Kim</div>
            <div className="menu-2">
              <Menu className="menu-instance" homeClassName="menu-3" property1="default-state" />
              <Menu className="menu-4" homeClassName="menu-5" property1="default-state" text="About" />
              <Menu className="menu-6" homeClassName="menu-7" property1="default-state" text="Portfolio" />
              <Menu className="menu-8" homeClassName="menu-9" property1="default-state" text="CV" />
              <Menu className="menu-10" homeClassName="menu-11" property1="default-state" text="Skills" />
              <Menu className="menu-12" homeClassName="menu-13" property1="default-state" text="Contact" />
            </div>
          </div>
          <div className="frame-5">
            <div className="frame-6">
              <img className="linkedin-icon" alt="Linkedin icon" src="/img/linkedinicon.png" />
              <div className="linkedin-icon">
                <img className="exclude" alt="Exclude" src="/img/exclude.png" />
              </div>
            </div>
            <div className="contact">
              <a
                className="text-wrapper-6"
                href="mailto:itshwanyikim@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                itshwanyikim@gmail.com
              </a>
              <div className="text-wrapper-7">+44 073 1010 1620</div>
            </div>
          </div>
        </footer>
        <div className="overlap-2">
          <div className="frame-wrapper">
            <div className="frame-7">
              <div className="text-wrapper-8">Ask Me Anything!</div>
              <p className="text-wrapper-9">Do you have any questions? Let’s chat!</p>
              <SendingEmailButton className="sending-email-button-instance" property1="default-state" />
            </div>
          </div>
          <div className="skills">
            <div className="frame-8">
              <div className="text-wrapper-10">Skills</div>
              <div className="frame-9">
                <div className="UI-design">
                  <div className="text-wrapper-11">UI Design</div>
                  <div className="div-wrapper">
                    <div className="frame-10" />
                  </div>
                </div>
                <div className="UI-design">
                  <div className="text-wrapper-11">Web Design</div>
                  <div className="overlap-group-3">
                    <div className="frame-11" />
                  </div>
                </div>
                <div className="UI-design">
                  <div className="text-wrapper-11">Mobile Design</div>
                  <div className="overlap-group-3">
                    <div className="frame-12" />
                  </div>
                </div>
                <div className="UI-design-2">
                  <div className="text-wrapper-11">UX Design</div>
                  <div className="overlap-group-3">
                    <div className="frame-13" />
                  </div>
                </div>
                <div className="UI-design">
                  <div className="text-wrapper-11">Coding</div>
                  <div className="overlap-group-3">
                    <div className="frame-14" />
                  </div>
                </div>
                <div className="UI-design">
                  <div className="text-wrapper-11">Prototype</div>
                  <div className="overlap-group-3">
                    <div className="frame-12" />
                  </div>
                </div>
                <div className="UI-design">
                  <div className="text-wrapper-11">Design Strategy</div>
                  <div className="overlap-group-3">
                    <div className="frame-15" />
                  </div>
                </div>
                <div className="UI-design-2">
                  <div className="text-wrapper-11">2D Animation</div>
                  <div className="overlap-3">
                    <div className="frame-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="illustration-and">
          <div className="vew-animation-btn-wrapper">
            <VewAnimationBtn
              className="vew-animation-btn-instance"
              property1="default-state"
              rectangleClassName="vew-animation-btn-2"
            />
          </div>
          <div className="frame-17">
            <div className="ellipse-4" />
            <div className="ellipse-5" />
            <div className="ellipse-6" />
            <div className="ellipse-4" />
          </div>
        </div>
        <div className="portfolio">
          <div className="frame-8">
            <div className="text-wrapper-10">Personal Project</div>
            <div className="projects">
              <div className="kim-sunglasses">
                <div className="frame-18">
                  <div className="text-wrapper-12">Kim Sunglasses</div>
                  <p className="text-wrapper-13">Designing website of eyewear brand, focused on compact design.</p>
                  <div className="frame-19">
                    <div className="text-wrapper-14">View Project</div>
                  </div>
                </div>
                <div className="group">
                  <div className="overlap-group-4">
                    <div className="frame-20" />
                    <div className="frame-21" />
                    <div className="iphone-pro-max">
                      <div className="frame-22" />
                    </div>
                    <div className="iphone-pro-max-2">
                      <div className="frame-23" />
                    </div>
                    <div className="iphone-pro-max-3">
                      <div className="frame-24" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="easy-booking">
                <div className="overlap-4">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-5">
                      <div className="frame-25" />
                      <div className="frame-26" />
                    </div>
                  </div>
                  <div className="frame-18">
                    <div className="text-wrapper-12">EasyBooking</div>
                    <p className="text-wrapper-13">
                      Designing hotel booking platform suggesting in efficient way of booking.
                    </p>
                    <a
                      className="frame-27"
                      href="https://youtu.be/fqPvHA0jpXE"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="text-wrapper-14">View Prototype Video</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="little-lemon">
                <div className="frame-28">
                  <div className="text-wrapper-12">Little Lemon</div>
                  <p className="designing-mobile">
                    Designing mobile application for a local restaurant to book a table and delivery. <br />A simple
                    looking platform that is designed practically and easily accessible.
                  </p>
                  <a className="frame-29" href="https://youtu.be/1CH8tOpYw8Q" rel="noopener noreferrer" target="_blank">
                    <div className="text-wrapper-14">View Prototype Video</div>
                  </a>
                </div>
                <div className="group-2">
                  <div className="iphone-pro-max-4">
                    <div className="frame-30" />
                  </div>
                  <div className="iphone-pro-max-5">
                    <div className="frame-31" />
                  </div>
                  <div className="iphone-pro-max-6">
                    <div className="frame-32" />
                  </div>
                  <div className="iphone-pro-max-7">
                    <div className="frame-33" />
                  </div>
                </div>
              </div>
              <div className="cryto-money">
                <div className="group-3">
                  <div className="overlap-group-6">
                    <div className="frame-34" />
                    <div className="frame-35" />
                  </div>
                </div>
                <div className="frame-36">
                  <div className="text-wrapper-12">CryptoMoney</div>
                  <p className="text-wrapper-13">Designing the website of cryptocurrency managing platform.</p>
                  <a className="frame-37" href="https://youtu.be/dhqXtTNRYdE" rel="noopener noreferrer" target="_blank">
                    <div className="text-wrapper-14">View Prototype Video</div>
                  </a>
                </div>
              </div>
              <div className="yoga-space">
                <div className="frame-38">
                  <div className="text-wrapper-12">Yoga Space</div>
                  <p className="text-wrapper-13">
                    Designing the website of Yoga programs to promote their classes providing core information to users.
                  </p>
                  <a className="frame-39" href="https://youtu.be/tI7sk5YR7T0" rel="noopener noreferrer" target="_blank">
                    <div className="text-wrapper-14">View Prototype Video</div>
                  </a>
                </div>
                <div className="group-4">
                  <div className="overlap-group-7">
                    <div className="frame-40" />
                    <div className="frame-41" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="about-page">
            <div className="frame-42">
              <p className="i-am-an">
                I am an
                [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
              </p>
              <p className="i-am-a-designer-who">
                I am a designer who wants to create meaningful experience.
                <br />I used to be a painter and animator making art works about the story of people who are suffering
                from social issues. <br />I decided to move to Design in order to have bigger impacts on the society in
                practical way. Based on my previous art works, I want to be a designer who cares the humanity the most,
                and help people to improve their lives.
              </p>
            </div>
            <img className="ellipse-7" alt="Ellipse" src="/img/ellipse-1-2.png" />
          </div>
        </div>
        <div className="home-main">
          <Home className="home-instance" property1="main" />
        </div>
        <div className="navbar">
          <StaticNavbar className="static-navbar-instance" property1="default-state" />
        </div>
      </div>
    </div>
  );
};
