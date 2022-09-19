import React from "react";

import styled from "styled-components";
const FooterStyle = styled.div`
  .centered {
    // border: 2px solid red;
    // margin-top: 20px;
  }
  .main-container {
    background-color: var(--dark-bg);
    color: var(--grey-text);
    display: flex;
    padding-top: 2.5rem;
    padding-bottom: 1rem;

    .flex-child {
      margin: 0 auto;
    }
  }
`;
export default function Footer() {
  return (
    <FooterStyle>
      <div className="centered">
        <div className="main-container">
          <div className="flex-child">
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
          <div className="flex-child">
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
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
      </div>
    </FooterStyle>
  );
}
