import React from "react";
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
    ul {
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
    @media only screen and (max-width: 768px) {
      .mobile-nav-icon {
        display: block;
      }
      .close-nav-icon {
        display: block;
      }
    }
  }
`;

export default function NavMenu() {
  return (
    <NavMenuStyle>
      <header>
        {/* mobile icon */}

        <div className="my-name">
          <h1>Godfrey Bongomin</h1>
        </div>
        <div className="mobile-nav-icon">
          <MdMenu />
        </div>

        <ul>
          <div className="close-nav-icon">
            <MdClose />
          </div>

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
            <NavLink id="resume" to="/resume">
              Resume
            </NavLink>
          </li>
        </ul>
      </header>
    </NavMenuStyle>
  );
}
