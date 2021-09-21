import React from "react";
import { TimelineWr } from "../styles/TimelineWr";
import { FiArrowUp } from "react-icons/fi";

const Timeline = () => {
  return (
    <TimelineWr className="container">
      <div class="wrapper">
        <div class="center-line">
          <a href="#exp" class="scroll-icon">
            <i className="icon">
              <FiArrowUp />
            </i>
          </a>
        </div>
        <div class="row row-1">
          <section>
            <i className="icon"></i>
            <div class="details">
              <span class="title">Title of Section 1</span>
              <span>1st Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i className="icon"></i>
            <div class="details">
              <span class="title">Title of Section 2</span>
              <span>2nd Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
        <div class="row row-1">
          <section>
            <i className="icon"></i>
            <div class="details">
              <span class="title">Title of Section 3</span>
              <span>3rd Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i className="icon"></i>
            <div class="details">
              <span class="title">Title of Section 4</span>
              <span>4th Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
        <div class="row row-1">
          <section>
            <i className="icon"></i>
            <div class="details">
              <span class="title">Title of Section 5</span>
              <span>5th Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
        <div class="row row-2">
          <section>
            <i className="icon"></i>
            <div class="details">
              <span class="title">Title of Section 6</span>
              <span>6th Jan 2021</span>
            </div>
            <p>
              Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed
              qui veroes praesentium maiores, sint eos vero sapiente voluptas
              debitis dicta dolore.
            </p>
            <div class="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
      </div>
    </TimelineWr>
  );
};

export default Timeline;
