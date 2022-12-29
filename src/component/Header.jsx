import React from "react";
import tf from "./images/Trollface.png";
export default function Header() {
  return (
    <header className="header">
      <img src={tf} className="header--image" alt="tf" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}
