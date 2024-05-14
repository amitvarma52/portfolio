import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoSchool } from "react-icons/io5";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center">Education</h2>
        <hr></hr>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "grey" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2021"
            iconStyle={{ background: "#0fdc87", color: "black" }}
            icon={<IoSchool />}
          >
            <h3 className="vertical-timeline-element-title" style={{color:"black",marginBottom:"15px"}}>
              HSC 
            </h3>
            <h5 className="vertical-timeline-element-subtitle">Maharashtra state board</h5>
            <p>
              Percentage : 70.67% 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "grey" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="2024"
            iconStyle={{ background: "#0fdc87", color: "black" }}
            icon={<IoSchool />}
          >
            <h3 className="vertical-timeline-element-title" style={{color:"black",marginBottom:"15px"}}>
            Bachelor of Science in IT               
            </h3>
            <h5 className="vertical-timeline-element-subtitle">Mumbai University</h5>
            <p>
              sem V : 8.10 cgpa 
            </p>
            <p style={{margin:"0px"}}>sem VI : yet to come</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;