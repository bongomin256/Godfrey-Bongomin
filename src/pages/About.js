import React from "react";
import styled from "styled-components";
import myimage from "../../src/images/myphoto.jpeg";
import { AiFillCaretRight } from "react-icons/ai";

const AboutStyle = styled.div`
  padding: 200px 0;
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
      gap: 20px;

      .about-content-left {
        // margin-right: 20px;
        img {
          width: 100%;
          height: auto;
          border: 4px solid Var(--grey-text);
          // border-radius: 50%;
          border-radius: 15px;
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
      margin-right: 50%;
    }
  }

  @media only screen and (max-width: 420px) {
  }
`;

export default function About() {
  return (
    <AboutStyle>
      <div className="about-content">
        <h3 className="about-header">About Me</h3>
        <div className="container">
          <div className="about-content-left">
            <img src={myimage} alt="" />
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
      </div>
    </AboutStyle>
  );
}
