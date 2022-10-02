import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import styled from "styled-components";

const HomeStyle = styled.div`
  padding-top: 200px;
  padding-bottom: 100px;
  /* padding: 200px 0; */
  background-color: var(--dark-bg);
  color: var(--grey-text);

  .home-content {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;

    .big-fonts {
      h2 {
        font-size: 4rem;
        font-weight: 700;
        /* span {
          color: red;
        } */
      }
      h4 {
        font-size: 2.5rem;
        font-weight: 700;
        span {
          color: red;
          animation: typewriter 3.5s steps(38) normal,
            blinkTextCursor 0.5s infinite;
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 500;
          }
        }
      }

      /* @keyframes blink-caret {
        from,
        to {
          border-color: transparent;
        }
        50% {
          border-color: orange;
        }
      } */
    }
    .home-texts {
      font-size: 20px;
      margin-top: 20px;
    }
    .links {
      display: flex;
      margin-top: 25px;
      gap: 30px;
      /* .resume {
        text-decoration: none;
        color: var(--lightgreen-text);
        border: var(--lightgreen-text) solid 1px;
        padding: 1rem 1.5rem;
        font-size: 20px;
        margin-right: 30px;//
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        &:hover {
          border: #fff solid 2px;
          background: var(--lightgreen-hover);
          transition: 0.2s ease;
          color: #fff;
        }
      } */
      .github,
      .resume {
        text-decoration: none;
        color: var(--lightgreen-text);
        border: var(--lightgreen-text) solid 1px;
        padding: 1rem 1.5rem;
        font-size: 20px;
        margin-right: 30px;
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        &:hover {
          /* border: solid 2px; */
          background: var(--lightgreen-hover);
          transition: 0.2s ease;
          /* color: #fff; */
        }
      }
    }
    /* @media only screen and (max-width: 450px) {
      .home-content {
        display: flex;
        flex-direction: column;
      }
      .big-fonts h2 {
        font-size: 2.5rem;
      }
      .links {
        flex-direction: column;
      }
      .links a {
        width: 100%;
      }
    } */
  }

  @media only screen and (max-width: 768px) {
    .home-content {
      /* display: flex;
        flex-direction: column; */
    }
    h2 {
      font-size: 1.8rem;
    }
    h4 {
      font-size: 1.2rem;
    }
    .links {
      flex-direction: column;
    }
    .resume,
    .github {
      width: 100%;
      padding: 0.8rem 1rem;
      /* border-radius: ; */
    }
    .links a {
      /* width: 100%; */
    }
  }

  /* @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  } */
`;

export default function Home() {
  return (
    <HomeStyle>
      <section className="home-content">
        <div style={{ fontSize: "20px" }}>
          <p>Hello, I am</p>
        </div>
        <div className="big-fonts">
          <h2>
            <span>Godfrey</span> Bongomin.
          </h2>
          <h4>
            a full-stack<span> Web Developer</span>
          </h4>
        </div>
        <div className="home-texts">
          <p>
            I am a software developer who designs and develops websites. I bring
            your ideas to life in the form of a website.{" "}
          </p>
        </div>

        <div className="links">
          <a
            className="resume"
            href="https://drive.google.com/file/d/1bsoxIn43pZLXjJjlhiGG6wWKwhNH0b4w/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Browse my Resume</span> <BsArrowUpRight />
          </a>
          <a
            className="github"
            href="https://github.com/bongomin256"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Check out my Github</span> <FaGithub />
          </a>
        </div>
      </section>
    </HomeStyle>
  );
}
