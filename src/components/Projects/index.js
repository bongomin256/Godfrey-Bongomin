import React from "react";
import styled from "styled-components";
import localExchange from "../../images/local_exchange_hub_homepage.png";
import RRG from "../../images/RRG.png";
import weather from "../../images/weather.png";
import workPlanner from "../../images/workdayPlanner.png";

const ProjectStyles = styled.div`
  padding-top: 200px;
  padding-bottom: 100px;
  /* padding: 200px 0; */
  background-color: var(--dark-bg);
  color: var(--grey-text);

  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;

    .project-heading {
      margin-bottom: 2.2rem;
    }

    .pro-items {
      .item {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 100px;

        //hover of the image
        &:hover .img img {
          // making the image zoom in.
          transform: scale(1.1);
          z-index: 1;
        }

        img {
          width: 100%;
          height: auto;
          //making the transformation smooth;
          transition: 0.3s ease transform;
        }

        .img {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
        }

        //applying the overlay color on the image
        .img::after {
          position: absolute;
          content: "";
          right: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: var(--lightgreen-hover); //
          /* opacity: 0.5; */
        }

        .right {
          flex: 1;
          margin-left: -150px;
          background-color: var(--dark-bg);
          padding: 2rem 1rem;
          border-radius: 12px;
          box-shadow: 0 0 20px white;
          z-index: 2;

          h2 {
            font-size: 1.2rem;
            margin-bottom: 1.4rem;
            color: #fff;
            font-weight: bold;
          }

          h4 {
            font-size: 1rem;
            color: var(--lightgreen-text);
          }

          p {
            font-size: 0.8rem;
          }
        }

        .left {
          flex: 2;
        }
      }

      // reversing in the even number of the project items
      .item:nth-child(even) {
        flex-direction: row-reverse;
      }

      // this is making sure the reverse is the same looking as odd items
      .item:nth-child(even) .right {
        margin-left: 0;
      }

      // this is making sure the reverse is the same looking as odd items
      .item:nth-child(even) .left {
        margin-left: -150px;
      }

      .btn {
        color: var(--lightgreen-text);
        border: var(--lightgreen-text) solid 1px;
        border-radius: 10px;
        margin-right: 16px;
        &:hover {
          background: var(--lightgreen-hover);
          transition: 0.2s ease;
        }
      }
    }

    @media (max-width: 768px) {
      .project-heading {
        text-align: center;
      }
      .pro-items {
        .item {
          flex-direction: column;
          .left {
            width: 100%;
          }
          .right {
            width: 90%;
            margin: 0 auto;
            margin-top: -150px;
            .pro-title,
            .buttons,
            .sub-title {
              text-align: center;
            }
          }
        }

        .item:nth-child(even) {
          flex-direction: column;
        }

        .item:nth-child(even) .left {
          margin-left: 0;
        }
        .item:nth-child(even) .right {
          margin-right: 0;
        }
      }
    }

    @media (max-width: 450px) {
      .pro-items {
        .item {
          flex-direction: column;
          .left {
            width: 100%;
          }
          .right {
            width: 90%;
            margin: 0 auto;
            margin-top: -70px;
            .buttons {
              display: flex;
              flex-direction: column;
              gap: 10px;
              width: 100%;
            }
          }
        }

        .item:nth-child(even) {
          flex-direction: column;
        }

        .item:nth-child(even) .left {
          margin-left: 0;
        }
        .item:nth-child(even) .right {
          margin-right: 0;
        }
      }
    }
  }
`;

export default function Projects() {
  return (
    <>
      <ProjectStyles>
        <section className="container">
          <h2 className="project-heading" data-ouline="Projects">
            Projects
          </h2>
          <div className="pro-items">
            <div className="item">
              <div className="left">
                <div className="img">
                  <img src={localExchange} alt="" />
                </div>
              </div>
              <div className="right">
                {/* <h2 className="pro-title"> School Project</h2> */}
                <h4 className="sub-title"> Local Exchange Hub</h4>
                <p className="pro-desc">
                  This is local exchange hub, my team and i designed this during
                  our group project. The purpose of this application is to
                  provide a platform where you can signup and post any used
                  item/s that you would like to get rid of for free or in
                  exchange of something that some other user posted, other than
                  throwing it away to reduce waste and its impact to the
                  environment.
                </p>
                <div className="buttons">
                  <a
                    className="btn"
                    href="https://github.com/rkutsel/local-exchange-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                  <a
                    className="btn"
                    href="https://local-exchange-hub.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    App Link
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="left">
                <div className="img">
                  <img src={RRG} alt="" />
                </div>
              </div>
              <div className="right">
                {/* <h2 className="pro-title"> School Project</h2> */}
                <h4 className="sub-title"> Random Recipe Generator</h4>
                <p className="pro-desc">
                  This is Random Recipe Generator, a school group project, where
                  my group and i design an application that fetches data from
                  two APIs and update the page with the fetched data. The main
                  of of this application to connect the two API end point with
                  one depending on the other.
                </p>
                <div className="buttons">
                  <a
                    className="btn"
                    href="https://github.com/bongomin256/Random-Recipe-Generator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                  <a
                    className="btn"
                    href="https://bongomin256.github.io/Random-Recipe-Generator/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    App Link
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="left">
                <div className="img">
                  <img src={weather} alt="" />
                </div>
              </div>
              <div className="right">
                {/* <h2 className="pro-title"> School Project</h2> */}
                <h4 className="sub-title"> Weather Dashboard</h4>
                <p className="pro-desc">
                  This is a school individual project where we were tasked to
                  design a Weather Dashboard. This appplcation fetches data for
                  any city searched from open weather map API and update with
                  the page.
                </p>
                <div className="buttons">
                  <a
                    className="btn"
                    href="https://github.com/bongomin256/Weather-Dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                  <a
                    className="btn"
                    href="https://bongomin256.github.io/Weather-Dashboard/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    App Link
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="left">
                <div className="img">
                  <img src={workPlanner} alt="" />
                </div>
              </div>
              <div className="right">
                {/* <h2 className="pro-title"> School Project</h2> */}
                <h4 className="sub-title"> Work Day Scheduler</h4>
                <p className="pro-desc">
                  This is Work day planner application, it is like a to-do app
                  which helps you plan your work day. In the present time the
                  color of the task block is green and if past the hour it
                  changes to grey.
                </p>
                <div className="buttons">
                  <a
                    className="btn"
                    href="https://github.com/bongomin256/Work-Day-Planner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo
                  </a>
                  <a
                    className="btn"
                    href="https://bongomin256.github.io/Work-Day-Planner/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    App Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ProjectStyles>
    </>
  );
}
