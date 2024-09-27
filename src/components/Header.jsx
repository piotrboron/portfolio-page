import React from "react";

export default function Header() {
  return (
    <header>
      <div class="logo">rosesandsins</div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="https://github.com/piotrboron">Github</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <p style={{ fontSize: 16 }}>Made in React.js</p>
    </header>
  );
}
