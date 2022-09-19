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
            <ul>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
}
