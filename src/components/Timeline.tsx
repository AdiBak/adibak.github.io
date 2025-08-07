import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Development Intern at Bright Sparks Academy</h3>
            <p>
              <ul>
                <li>Building and enhancing an education platform using React, Next.js, Tailwind CSS, and Firebase</li>
                <li>Developing new features for displaying completed sessions, question form, messaging, whiteboard, and dynamic sidebar navigation</li>
                <li>Collaborating with a cross-functional team to implement role-based UI and improve accessibility</li>
                <li>Practicing component-first development with team code review and robust Kanban workflow</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2024 - Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">NASA Proposal Writing and Evaluation Experience Academy</h3>
            <p>
              <ul>
                <li>Collaborated with interdisciplinary 11-member team to develop 7-page proposal for centrifugal 3D printing system designed to improve layer adhesion in microgravity</li>
                <li>Contributed to budget and schedule details, outlining resources, milestones, and costs to ensure feasibility and efficiency</li>
                <li>Gained valuable experience in project management, technical writing, and innovation, learning in weekly NASA-led sessions</li>
              </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;