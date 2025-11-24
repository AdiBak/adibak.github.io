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
            date="Oct 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Lead Software Developer at Student Patient Advocacy Network</h3>
            <p>
              <ul>
                <li>Led full-stack migration of 8+ pages from static HTML to React + Vite with Supabase backend, establishing modern architecture and improving code maintainability</li>
                <li>Architected automated member onboarding pipeline using Supabase Edge Functions, Auth API, EmailJS, and Cloudflare routing, eliminating manual processes and reducing setup time</li>
                <li>Built document management system with PDF viewer, text extraction, and state-organized bill management for executive directors, enabling efficient legislative tracking</li>
                <li>Implemented role-based dashboard with volunteer hours tracking, member directory with advanced filtering, and responsive UI redesigns for improved user experience</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2025 - Sep 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Development Intern at Bright Sparks Academy</h3>
            <p>
              <ul>
                <li>Built and enhanced a nonprofit education platform using React, Next.js, Tailwind CSS, and Firebase</li>
                <li>Developed interactive dashboards including completed sessions tracking, question submission forms, messaging system, and dynamic sidebar navigation</li>
                <li>Collaborated with a cross-functional team to implement role-based UI components and improve platform accessibility</li>
                <li>Practiced component-first development methodology while following team code review processes and agile Kanban workflow</li>
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