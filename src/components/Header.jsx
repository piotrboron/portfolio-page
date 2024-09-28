import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <>
      <header className="pcHeader">
        <div class="logo">rosesandsins</div>
        <nav>
          <ul>
            <li>
              <a href="https://github.com/piotrboron" className="nav-link">
                <FontAwesomeIcon icon={faGithub} className="faicon" />{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.freecodecamp.org/rosesandsins"
                className="nav-link"
              >
                <FontAwesomeIcon icon={faFreeCodeCamp} className="faicon" />{" "}
              </a>
            </li>
          </ul>
        </nav>
        <p style={{ fontSize: 16 }}>Made in React.js</p>
      </header>
      <header className="mobileHeader">
        <div class="logo">rosesandsins</div>
        <nav>
          <ul>
            <li>
              <a href="https://github.com/piotrboron" className="nav-link">
                <FontAwesomeIcon icon={faGithub} className="faicon" />{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.freecodecamp.org/rosesandsins"
                className="nav-link"
              >
                <FontAwesomeIcon icon={faFreeCodeCamp} className="faicon" />{" "}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
