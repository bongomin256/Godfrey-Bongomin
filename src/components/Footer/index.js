import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const FooterStyle = styled.div`
  .centered {
    // border: 2px solid red;
    // margin-top: 20px;
  }
  .main-container {
    background-color: var(--lightdark-bg);
    color: var(--grey-text);
    display: flex;
    padding-top: 2.5rem;
    padding-bottom: 1rem;

    .flex-child {
      margin: 0 auto;
      ul {
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
    }
  }
`;
export default function Footer() {
  return (
    <FooterStyle>
      <div className="centered">
        <div className="main-container">
          <div className="flex-child">
            <h4>Important Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/work">Work</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex-child">
            <h4>Contact info</h4>
            <ul>
              <li>(425) 3950516</li>
              <li>
                <a
                  href="mailto:godfrey.bongomin92@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  godfrey.bongomin92@gmail.com
                </a>
              </li>
              <li>Seattle, WA</li>
              {/* <li>WA</li> */}
            </ul>
          </div>
          <div className="flex-child">
            <h4>Social Links</h4>
            <ul>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Github
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
      </div>
    </FooterStyle>
  );
}
