import React, {useEffect} from "react";
import {
  Main,
  Education,
  Timeline,
  Project,
  Navigation,
  Footer,
} from "./components";
import './index.scss';

function App() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className="main-container">
        <Navigation />
        <main>
            <Main/>
            <Education/>
            <Timeline/>
            <Project/>
        </main>
        <Footer />
    </div>
    );
}

export default App;
