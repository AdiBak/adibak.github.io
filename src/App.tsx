import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Project,
  //Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('light');

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Timeline/>
            <Project/>
            {/*<Contact/>*/}
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;