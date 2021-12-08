import React from "react";
import { TimelineWr } from "../styles/TimelineWr";
import { FiArrowUp } from "react-icons/fi";
import { TimelineData } from "../data/TimelineData";
import { Zoom } from "react-awesome-reveal";

const Timeline = () => {
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
          <Zoom className={`row row-${(e.id % 2) + 1}`} key={e.id}>
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
          </Zoom>
        ))}
      </div>
    </TimelineWr>
  );
};

export default Timeline;
