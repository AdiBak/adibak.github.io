import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import { Chip } from '@mui/material';
import '../assets/styles/Project.scss';


function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <div className="project-header">
                    <div className="project-title">
                        <h2>
                            F1 Gesture Controller
                            <a href="https://github.com/AdiBak/f1-gesture-racer" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
                            </a>
                        </h2>
                    </div>
                    {/* Date removed */}
                </div>
                <div className="tech-stack">
                    <Chip label="React.js" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="Three.js" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier' }} />
                    <Chip label="Mediapipe" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                </div>
                <p>Building a hand gesture-controlled F1 simulator.</p>
            </div>
            
            <div className="project">
                <div className="project-header">
                    <div className="project-title">
                        <h2>
                            Style Transfer Game
                            <a href="https://github.com/AdiBak/styletransfergame" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
                            </a>
                            <a href="https://styletransfergame.vercel.app" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/m_rounded/512/228BE6/external-link.png" alt="Deployed Site" />
                            </a>
                        </h2>
                    </div>
                    {/* Date removed */}
                </div>
                <div className="tech-stack">
                    <Chip label="React.js" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="CSS" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="Jupyter" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier' }} />
                    <Chip label="PyTorch" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="Cloudinary" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="JSON" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="Git" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="Vercel" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                </div>
                <p>Designed a fun, educational game inspired by style transfer.</p>
            </div>
            
            <div className="project">
                <div className="project-header">
                    <div className="project-title">
                        <h2>
                            Upsc-AI-le
                            <a href="https://github.com/AdiBak/upscaile" target="_blank" rel="noopener noreferrer">
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
                            </a>
                            <a href="https://upscaile.onrender.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/m_rounded/512/228BE6/external-link.png" alt="Deployed Site" />
                            </a>
                        </h2>
                    </div>
                    {/* Date removed */}
                </div>
                <div className="tech-stack">
                    <Chip label="HTML" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="Bootstrap" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier' }} />
                    <Chip label="CSS" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="Flask" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="JSON" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="Hugging Face" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="Cloudinary" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="Redis" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="Git" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="Render" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                </div>
                <p>Built a fullstack AI-powered image upscaler web app.</p>
            </div>
            
            <div className="project">
                <div className="project-header">
                    <div className="project-title">
                        <h2>
                            Propulsion Parody
                            <a href="https://frenchfrys.itch.io/propulsion-parody" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/m_rounded/512/228BE6/external-link.png" alt="Deployed Site" />
                            </a>
                        </h2>
                    </div>
                    {/* Date removed */}
                </div>
                <div className="tech-stack">
                    <Chip label="Unity" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="C#" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="Git" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="Trello" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="Itch.io" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                </div>
                <p>Helped design, program a jetpack joyrider in a team of 15.</p>
            </div>
            
            <div className="project">
                <div className="project-header">
                    <div className="project-title">
                        <h2>
                            Phantom Pilgrimage
                            <a href="https://emilye25.itch.io/phantom-pilgrimage" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/m_rounded/512/228BE6/external-link.png" alt="Deployed Site" />
                            </a>
                        </h2>
                    </div>
                    {/* Date removed */}
                </div>
                <div className="tech-stack">
                    <Chip label="Unity" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="C#" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="Git" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="Trello" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                    <Chip label="Itch.io" style={{ margin: '5px', backgroundColor: 'black', color: 'white', fontFamily: 'courier'}} />
                </div>
                <p>Helped design, program a surreal platformer in a team of 11.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;