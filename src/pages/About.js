import React from "react";
import styled from "styled-components";
import myimage from "../../src/images/myphoto.jpeg";
import { AiFillCaretRight } from "react-icons/ai";

const AboutStyle = styled.div`
  padding-top: 200px;
  padding-bottom: 100px;
  background-color: var(--dark-bg);
  color: var(--grey-text);
  .about-content {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    .about-header {
      margin-bottom: 2.2rem;
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc(100vh -200px);
      gap: 60px;

      .about-content-left {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 300px;

          border-radius: 10px;
          z-index: 1;
          &:hover ~ .image__border {
            margin-top: 90px;
            margin-right: 90px;
          }
        }
        .image__border {
          width: 300px;
          height: 300px;
          position: absolute;
          border: 2px solid var(--lightgreen-text);
          border-radius: 10px;
          margin-bottom: 45px;
          margin-left: 45px;
          transition: var(--transition);
        }
      }
      .about-content-right {
        .tech {
          display: flex;
          justify-content: space-between;
          p {
            margin-left: 20px;
            color: var(--lightgreen-text);
            font-weight: bold;
          }
          .tech__list {
            .arrow {
              color: var(--lightgreen-text);
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
    }
    .about-header {
      text-align: center;
    }
  }

  @media only screen and (max-width: 430px) {
    .about-content-right {
      .tech {
        .tech__list {
          ul {
            li {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
`;

export default function About() {
  return (
    <AboutStyle>
      <section className="about-content">
        <h3 className="about-header">About Me</h3>
        <div className="container">
          <div className="about-content-left">
            <img src={myimage} alt="" />
            <div className="image__border"></div>
          </div>
          <div className="about-content-right">
            <p>
              I am{" "}
              <strong
                style={{
                  color: "white",
                  fontSize: "20px",
                  letterSpacing: "3px",
                }}
              >
                GODFREY BONGOMIN
              </strong>{" "}
              , but i go by{" "}
              <strong
                style={{
                  color: "white",
                  fontSize: "18px",
                  letterSpacing: "3px",
                }}
              >
                Bongo!
              </strong>
            </p>
            <p>
              I have 8 years of experience working in production, logistics,
              customer service, and management in a multi-cultural setting.
              Having already earned a BBA from a globally accredited university,
              I recently graduated from UW Coding Bootcamp, an intensive
              six-month certificate program. I am now searching for a web
              development position with a company I am passionate about.
              {/* I have experience in HTML, CSS, Javascript and
              MySQL. Framework: Nodejs, Expressjs, ReactJs, GraphQL, mongoDB,
              bootstrap, bulma, APIs. */}
            </p>
            <div className="tech">
              <div className="tech__list">
                <p>Languages</p>
                <ul>
                  <li>
                    <AiFillCaretRight className="arrow" /> JavaScript
                  </li>
                  <li>
                    <AiFillCaretRight className="arrow" /> MySQL
                  </li>
                  <li>
                    <AiFillCaretRight className="arrow" /> HTML
                  </li>
                  <li>
                    <AiFillCaretRight className="arrow" /> CSS
                  </li>
                  <li>
                    <AiFillCaretRight className="arrow" /> GraphQL
                  </li>
                </ul>
              </div>
              <div className="tech__list">
                <p>Frame Works</p>
                <ul>
                  <li>
                    <AiFillCaretRight className="arrow" /> React
                  </li>
                  <li>
                    <AiFillCaretRight className="arrow" /> NodeJS
                  </li>
                  <li>
                    <AiFillCaretRight className="arrow" /> Express
                  </li>
                  <li>
                    <AiFillCaretRight className="arrow" /> MongoDB
                  </li>
                </ul>
              </div>
              <div className="tech__list">
                <p>CSS Libraries</p>
                <ul>
                  <li>
                    <AiFillCaretRight className="arrow" /> Bootstrap
                  </li>
                  <li>
                    <AiFillCaretRight className="arrow" /> Bulma
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Feel free to explore and contact me with any opportunities or
              inquiries you may have.
            </p>
          </div>
        </div>
      </section>
    </AboutStyle>
  );
}
