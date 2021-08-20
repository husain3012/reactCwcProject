import React from "react";
import { ArticleBody, ReactPlayerWrapper } from "./Solution";
import ScrollAnimation from "react-animate-on-scroll";
import ReactPlayer from "react-player";
import Solution from "./Solution";

const Solution1 = () => {
  const ArticleHtmlSections = [
    <div>
      <h2>Hello WOrld</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
        error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error
        harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
      </p>

      <ReactPlayerWrapper>
        <ReactPlayer className="m react-player" url="https://youtu.be/p7HKvqRI_Bo" />
      </ReactPlayerWrapper>
      <h3>Conclusion</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
        error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error
        harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit
      </p>
    </div>,
  ];

  const heading = {
    title: "Solution 1",
    info: "50% growth || 5 Years",
    bgColor:"#343A40",
    color:"#fff",
    infoBg:"rgb(225,232,235,0.7)"
  };

  return (
    <div>
      <Solution heading={heading} bodyHtml={ArticleHtmlSections} />
    </div>
  );
};

export default Solution1;
