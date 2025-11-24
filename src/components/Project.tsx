import React from "react";
import { Chip } from '@mui/material';
import smartPdfReader from '../assets/images/smart-pdf-reader.png';
import f1GestureController from '../assets/images/f1-gesture-controller.png';
import styleTransferGame from '../assets/images/style-transfer-game.png';
import upscAiLe from '../assets/images/upsc-ai-le.png';
import propulsionParody from '../assets/images/propulsion-parody.png';
import phantomPilgrimage from '../assets/images/phantom-pilgrimage.png';
import '../assets/styles/Project.scss';


function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project-card">
                <div className="project-image">
                    <img 
                        src={smartPdfReader} 
                        alt="Smart PDF Reader" 
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <div className="project-content">
                    <div className="project-header">
                        <h2>Smart PDF Reader</h2>
                        <div className="project-links">
                            <a href="https://github.com/AdiBak/SmartPDFReader" target="_blank" rel="noopener noreferrer" title="GitHub">
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
                            </a>
                            <a href="https://pdfsmart.vercel.app/" target="_blank" rel="noopener noreferrer" title="Live Demo">
                                <img src="https://img.icons8.com/m_rounded/512/228BE6/external-link.png" alt="Live Demo" />
                            </a>
                        </div>
                    </div>
                    <p>A PDF viewer with RAG-based chat functionality, annotation capabilities, and more.</p>
                    <div className="tech-stack">
                        <Chip label="React.js" className="tech-chip" />
                        <Chip label="Typescript" className="tech-chip" />
                        <Chip label="RAG" className="tech-chip" />
                        <Chip label="OpenAI" className="tech-chip" />
                        <Chip label="Supabase" className="tech-chip" />
                    </div>
                </div>
            </div>

            <div className="project-card">
                <div className="project-image">
                    <img 
                        src={f1GestureController} 
                        alt="F1 Gesture Controller" 
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <div className="project-content">
                    <div className="project-header">
                        <h2>F1 Gesture Controller</h2>
                        <div className="project-links">
                            <a href="https://github.com/AdiBak/f1-gesture-racer" target="_blank" rel="noopener noreferrer" title="GitHub">
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
                            </a>
                        </div>
                    </div>
                    <p>A hand gesture-controlled F1 simulator using computer vision and 3D graphics.</p>
                    <div className="tech-stack">
                        <Chip label="React.js" className="tech-chip" />
                        <Chip label="Three.js" className="tech-chip" />
                        <Chip label="Mediapipe" className="tech-chip" />
                    </div>
                </div>
            </div>
            
            <div className="project-card">
                <div className="project-image">
                    <img 
                        src={styleTransferGame} 
                        alt="Style Transfer Game" 
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <div className="project-content">
                    <div className="project-header">
                        <h2>Style Transfer Game</h2>
                        <div className="project-links">
                            <a href="https://github.com/AdiBak/styletransfergame" target="_blank" rel="noopener noreferrer" title="GitHub">
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
                            </a>
                            <a href="https://styletransfergame.vercel.app" target="_blank" rel="noopener noreferrer" title="Live Demo">
                                <img src="https://img.icons8.com/m_rounded/512/228BE6/external-link.png" alt="Live Demo" />
                            </a>
                        </div>
                    </div>
                    <p>A fun, educational game inspired by neural style transfer with interactive AI features.</p>
                    <div className="tech-stack">
                        <Chip label="React.js" className="tech-chip" />
                        <Chip label="PyTorch" className="tech-chip" />
                        <Chip label="Cloudinary" className="tech-chip" />
                        <Chip label="Vercel" className="tech-chip" />
                    </div>
                </div>
            </div>
            
            <div className="project-card">
                <div className="project-image">
                    <img 
                        src={upscAiLe} 
                        alt="Upsc-AI-le" 
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <div className="project-content">
                    <div className="project-header">
                        <h2>Upsc-AI-le</h2>
                        <div className="project-links">
                            <a href="https://github.com/AdiBak/upscaile" target="_blank" rel="noopener noreferrer" title="GitHub">
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
                            </a>
                            <a href="https://upscaile.onrender.com" target="_blank" rel="noopener noreferrer" title="Live Demo">
                                <img src="https://img.icons8.com/m_rounded/512/228BE6/external-link.png" alt="Live Demo" />
                            </a>
                        </div>
                    </div>
                    <p>A fullstack AI-powered image upscaler web app with real-time processing capabilities.</p>
                    <div className="tech-stack">
                        <Chip label="Flask" className="tech-chip" />
                        <Chip label="Hugging Face" className="tech-chip" />
                        <Chip label="Redis" className="tech-chip" />
                        <Chip label="Render" className="tech-chip" />
                    </div>
                </div>
            </div>
            
            <div className="project-card">
                <div className="project-image">
                    <img 
                        src={propulsionParody} 
                        alt="Propulsion Parody" 
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <div className="project-content">
                    <div className="project-header">
                        <h2>Propulsion Parody</h2>
                        <div className="project-links">
                            <a href="https://frenchfrys.itch.io/propulsion-parody" target="_blank" rel="noopener noreferrer" title="Play Game">
                                <img src="https://img.icons8.com/m_rounded/512/228BE6/external-link.png" alt="Play Game" />
                            </a>
                        </div>
                    </div>
                    <p>A jetpack joyrider game in a collaborative team of 15 developers.</p>
                    <div className="tech-stack">
                        <Chip label="Unity" className="tech-chip" />
                        <Chip label="C#" className="tech-chip" />
                        <Chip label="Trello" className="tech-chip" />
                        <Chip label="Itch.io" className="tech-chip" />
                    </div>
                </div>
            </div>
            
            <div className="project-card">
                <div className="project-image">
                    <img 
                        src={phantomPilgrimage} 
                        alt="Phantom Pilgrimage" 
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <div className="project-content">
                    <div className="project-header">
                        <h2>Phantom Pilgrimage</h2>
                        <div className="project-links">
                            <a href="https://emilye25.itch.io/phantom-pilgrimage" target="_blank" rel="noopener noreferrer" title="Play Game">
                                <img src="https://img.icons8.com/m_rounded/512/228BE6/external-link.png" alt="Play Game" />
                            </a>
                        </div>
                    </div>
                    <p>A surreal platformer game in a collaborative team of 11 developers.</p>
                    <div className="tech-stack">
                        <Chip label="Unity" className="tech-chip" />
                        <Chip label="C#" className="tech-chip" />
                        <Chip label="Trello" className="tech-chip" />
                        <Chip label="Itch.io" className="tech-chip" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;