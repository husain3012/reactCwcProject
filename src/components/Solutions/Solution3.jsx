import React from "react";
import { ArticleBody, ReactPlayerWrapper } from "./Solution";
import ScrollAnimation from "react-animate-on-scroll";
import ReactPlayer from "react-player";
import Solution from "./Solution";

const Solution3 = () => {
  const ArticleHtmlSections = [
    <div>
      <h2>Wikipedia</h2>
      <p>
        Shuttle-Centaur was a version of the Centaur upper stage rocket that could be carried aloft inside the Space Shuttle and used to launch satellites into high Earth orbits or probes into deep space. Two variants were produced: Centaur
        G-Prime, to launch robotic probes to Jupiter; and Centaur G, for use with US Department of Defense Milstar satellites and the Magellan Venus probe. Its power allowed for heavier deep space probes, prolonging the operational life of
        the spacecraft.
      </p>

      <ReactPlayerWrapper>
        <ReactPlayer className="m react-player" url="https://youtu.be/jHrGsxSpM5E" />
      </ReactPlayerWrapper>
    </div>,
    <div>
      <h3>This is done using props</h3>
      <p>
        Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference here.
        Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.{" "}
      </p>
    </div>,
  ];
  const heading = {
    title: "Solution 3",
    info: "Lorem Ipsum"
  };

  return (
    <div>
      <Solution heading={heading} bodyHtml={ArticleHtmlSections} />
    </div>
  
  );
};

export default Solution3;
