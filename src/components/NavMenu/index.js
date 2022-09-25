import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdClose, MdMenu } from "react-icons/md";

const NavMenuStyle = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem;

    h1 {
      color: var(--lightgreen-text);
      font-weight: 700;
      /* font-size: 4rem; */
    }
    .nav-links {
      display: flex;
      justify-content: space-between;
      .close-nav-icon {
        display: none;
        color: white;
        position: absolute;
      }
      li {
        /* a {
          &:hover {
            color: var(--lightgreen-text);
          }
        }
      } */
        a {
          color: var(--grey-text);
          font-size: 20px;
          text-decoration: none;
          padding: 1rem 1rem;
          cursor: pointer;
          &:hover {
            color: var(--lightgreen-text);
          }
        }
        .active {
          color: white;
        }
        #resume {
          outline: none;
          background-color: transparent;
          border: 1px solid var(--lightgreen-text);
          color: var(--lightgreen-text);
          border-radius: 5px;
          padding: 10px 7px;
          cursor: pointer;
          margin-left: 26px;
          &:hover {
            background: var(--lightgreen-hover);
          }
        }
      }
      /* .mobile-nav-icon {
        color: white;
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 4rem;
        cursor: pointer;
        display: none;
        outline: none;
        color: white;
      } */
      /* .close-nav-icon {
        display: none;
      } */
      /* @media only screen and (max-width: 768px) {
        .mobile-nav-icon {
          display: block;
        }
        .close-nav-icon {
          display: block;
        }
      }

      @media only screen and (max-width: 420px) {
        .mobile-nav-icon {
          display: block;
        }
        .close-nav-icon {
          display: block;
        }
      } */
    }
    .mobile-menu {
      display: none;
      color: white;
      font-size: 30px;
      cursor: pointer;
    }
    .mobile-nav-icon {
      color: white;
      position: absolute;
      right: 1rem;
      top: 1rem;
      width: 4rem;
      cursor: pointer;
      display: none;
      outline: none;
      /* color: white; */
    }
    /* .close-nav-icon {
      display: none;
      color: white;
    } */
    /* @media only screen and (max-width: 768px) {
      .mobile-nav-icon {
        display: block;
      }
      .close-nav-icon {
        display: block;
      }
    } */

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }

      .nav-link-mobile {
        position: absolute;
        display: block;
        list-style: none;
        background-color: var(--lightdark-bg);
        /* left: 0; */
        /* top: 75px; */
        right: 1rem;
        top: 1rem;
        /* width: 4rem; */
        width: 25%;
        transition: all 0.5s ease-out;
        border-radius: 10px;
        li {
          a {
            text-decoration: none;
            color: var(--grey-text);
            font-size: 20px;
            padding: 1rem 1rem;
            text-align: center;
            cursor: pointer;
            &:hover {
              color: var(--lightgreen-text);
            }
          }
        }
      }

      .mobile-menu {
        display: block;
      }
      /* li {
        text-decoration: none;
        color: var(--grey-text);
      } */
    }
  }
`;

export default function NavMenu() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <NavMenuStyle>
      <header>
        {/* mobile icon */}

        <div className="my-name">
          <h1>Godfrey Bongomin</h1>
        </div>
        {/* <div className="mobile-nav-icon">
          {isMobile ? <MdMenu /> : <}
          
        </div> */}

        <ul
          className={isMobile ? "nav-link-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          {/* <div className="close-nav-icon">
            {isMobile ? <MdMenu /> :<MdClose />}
          </div> */}

          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          {/* <li>
            <NavLink to="/experience">Experience</NavLink>
          </li> */}
          <li>
            <NavLink to="/work">Work</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <a
              id="resume"
              href="https://drive.google.com/file/d/1bsoxIn43pZLXjJjlhiGG6wWKwhNH0b4w/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
        <div className="mobile-menu" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <MdClose /> : <MdMenu />}
        </div>
      </header>
    </NavMenuStyle>
  );
}
