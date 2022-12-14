import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const FooterStyle = styled.div`
  .centered {
    .main-container {
      background-color: var(--lightdark-bg);
      color: var(--grey-text);
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding-top: 1.5rem;
      padding-bottom: 1rem;

      .flex-child {
        h4 {
          color: white;
        }
        ul {
          display: flex;
          flex-direction: column;

          li {
            color: var(--grey-text);

            a {
              text-decoration: none;
              color: var(--grey-text);
              cursor: pointer;
              &:hover {
                color: white;
              }
            }
          }
        }
      }
    }
    .copy-right {
      background-color: var(--grey-text);
      padding: 0.8rem 0.6rem;

      p {
        margin-left: 2rem;
      }
    }
  }
  @media (max-width: 450px) {
    .main-container {
      flex-direction: column;
    }
    .flex-child {
      width: 100%;
      text-align: center;
    }
  }

  /* @media only screen and (max-width: 450px) {
    .main-container {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 768px) {
  } */
`;
export default function Footer() {
  return (
    <FooterStyle>
      <section className="centered">
        <div className="main-container">
          <div className="flex-child">
            <h4>Important Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex-child">
            <h4>Contact info</h4>
            <ul>
              <li>(425)-395-0516</li>
              <li>
                <a
                  href="mailto:godfrey.bongomin92@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  godfrey.bongomin92@gmail.com
                </a>
              </li>
              <li>Seattle,</li>
              <li>Washington</li>
            </ul>
          </div>
          <div className="flex-child">
            <h4>Social Links</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/bongomin256"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/godfrey-bo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mr.bongomin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/bongomin.godfrey.3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy-right">
          <p>
            {" "}
            &copy; 2022 | <span>Designed by Godfrey (Bongo) Bongomin</span>
          </p>
        </div>
      </section>
    </FooterStyle>
  );
}
