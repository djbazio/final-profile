import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Social Media Manager",
          "Freelancer",
          "Web Developer",
          "Content Creator",
          "Graphic Designer",
          "Video Editor",
          "DJ"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
