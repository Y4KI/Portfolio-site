import React from "react";
import { TimelineWr } from "../styles/TimelineWr";
import { FiArrowUp } from "react-icons/fi";

const Timeline = () => {
  let TimelineData = [
    {
      theme: "HTML & CSS",
      date: "3rd Feb 2021",
      content:
        "I started my way of being ProDeveloper from 3rd february by learning basics of Front-End as HTML and CSS",
      id: 1,
    },
    {
      theme: "Javascript",
      date: "10th March 2021",
      content:
        "Learning basics didn't take long so I continued my way by learning JS and all his functionalities",
      id: 2,
    },
    {
      theme: "SASS & Bootstrap",
      date: "15th May 2021",
      content:
        "Working with tool like CSS started to become boring so I decided to learn something more fun",
      id: 3,
    },
    {
      theme: "React JS",
      date: "1st June 2021",
      content:
        "I learned things enough to go straight to learn a technology more powerfull and I decided to own power of React JS",
      id: 4,
    },
    {
      theme: "Next JS",
      date: "10th July 2021",
      content:
        "Things had become interesting and also challenging so I thougth that It's time to take my knowledge to the next level",
      id: 5,
    },
    {
      theme: "Webpack & api",
      date: "1th Sep 2021",
      content:
        "After all of them I didn't want to stop so I got going to deeper in that way and acquired a knowledge of webpack and api",
      id: 6,
    },
  ];
  return (
    <TimelineWr className="container">
      <div className="wrapper">
        <div className="center-line">
          <a href="#exp" className="scroll-icon">
            <i className="icon">
              <FiArrowUp />
            </i>
          </a>
        </div>
        {TimelineData.map((e) => (
          <div className={`row row-${(e.id % 2) + 1}`} key={e.id}>
            <section>
              <i className="icon"></i>
              <div className="details">
                <span className="title">{e.theme}</span>
                <span>{e.date}</span>
              </div>
              <p>{e.content}</p>
              <div className="bottom">
                <a href="/">Read more</a>
                <i>- My Roadmap</i>
              </div>
            </section>
          </div>
        ))}
      </div>
    </TimelineWr>
  );
};

export default Timeline;
