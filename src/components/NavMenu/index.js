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
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }

      .nav-link-mobile {
        position: absolute;
        display: block;
        list-style: none;
        background-color: var(--lightdark-bg);
        right: 1rem;
        top: 75px;
        width: 40%;
        transition: all 0.5s ease-out;
        border-radius: 10px;
        padding-top: 20px;
        padding-bottom: 20px;
        li {
          text-align: center;
          margin-bottom: 12px;
          a {
            text-decoration: none;
            color: var(--grey-text);
            font-size: 20px;
            padding: 1rem 1rem;
            cursor: pointer;
            &:hover {
              color: var(--lightgreen-text);
            }
          }
        }
      }
      .active {
        color: white;
      }
      #resume {
        border: 1px solid var(--lightgreen-text);
        color: var(--lightgreen-text);
        border-radius: 5px;
        padding: 10px 7px;
        cursor: pointer;
        &:hover {
          background: var(--lightgreen-hover);
        }
      }

      .mobile-menu {
        display: block;
        /*  */
        font-size: 30px;
        position: absolute;
        border: none;
        outline: none;
        right: 25px;
      }
    }
    @media (max-width: 450px) {
      .nav-links {
        display: none;
      }
      .mobile-menu {
        display: block;
        font-size: 30px;
        position: absolute;
        border: none;
        outline: none;
        right: 25px;
      }
      .nav-link-mobile {
        position: absolute;
        display: block;
        list-style: none;
        top: 75px;
        width: 50%;
        transition: all 0.5s ease-out;
        li {
          text-align: center;
          margin-bottom: 12px;

          a {
            text-decoration: none;
            color: var(--grey-text);
            font-size: 20px;
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
            border: 1px solid var(--lightgreen-text);
            color: var(--lightgreen-text);
            border-radius: 5px;
            padding: 10px 7px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export default function NavMenu() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <NavMenuStyle>
      <header>
        <div className="my-name">
          <h1>Godfrey Bongomin</h1>
        </div>

        <ul
          className={isMobile ? "nav-link-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
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
              href="https://drive.google.com/file/d/1ADlePckdrtuAWiD0ge4m4dpV2A_vlZNz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
        {/* mobile nav menu */}
        <div className="mobile-menu" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <MdClose /> : <MdMenu />}
        </div>
      </header>
    </NavMenuStyle>
  );
}
